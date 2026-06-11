// app/api/auth/register/route.ts

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      username,
      email,
      password,
    } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Semua field wajib diisi",
        },
        { status: 400 }
      );
    }

    // cek email
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email sudah digunakan",
        },
        { status: 400 }
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from("users")
      .insert({
        username,
        email,
        password: hashedPassword,
        role: "user",
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Register berhasil",
      data,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}