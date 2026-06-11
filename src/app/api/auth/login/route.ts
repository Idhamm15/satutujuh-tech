// app/api/auth/login/route.ts

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          status: false,
          code: 400,
          message: "Email dan password wajib diisi",
          data: null,
        },
        { status: 400 }
      );
    }

    // ambil user
    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (!user) {
      return NextResponse.json(
        {
          status: false,
          code: 401,
          message: "Email atau password salah",
          data: null,
        },
        { status: 401 }
      );
    }

    // cek password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return NextResponse.json(
        {
          status: false,
          code: 401,
          message: "Email atau password salah",
          data: null,
        },
        { status: 401 }
      );
    }

    // ACCESS TOKEN (JWT)
    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "15m",
      }
    );

    // REFRESH TOKEN (random string)
    const refreshToken = crypto.randomUUID();

    const expiredAt = new Date();
    expiredAt.setDate(expiredAt.getDate() + 7);

    // simpan refresh token ke DB
    await supabase.from("user_tokens").insert({
      user_id: user.id,
      refresh_token: refreshToken,
      expired_at: expiredAt,
    });

    const { password: _, ...userData } = user;

    const response = NextResponse.json({
      status: true,
      code: 200,
      message: "Login berhasil",
      data: {
        user: userData,
        access_token: accessToken,
        refresh_token: refreshToken,
      },
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        code: 500,
        message: "Internal server error",
        data: null,
      },
      { status: 500 }
    );
  }
}