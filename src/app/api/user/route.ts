// app/api/users/route.ts

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  try {
    // 1. ambil token dari header
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        {
          status: false,
          code: 401,
          message: "No token provided",
          data: null,
        },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    // 2. verify JWT
    let decoded: any;
    try {
      decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
      );
    } catch (err) {
      return NextResponse.json(
        {
          status: false,
          code: 401,
          message: "Invalid token",
          data: null,
        },
        { status: 401 }
      );
    }

    // 3. check role admin
    if (decoded.role !== "admin") {
      return NextResponse.json(
        {
          status: false,
          code: 403,
          message: "Forbidden",
          data: null,
        },
        { status: 403 }
      );
    }

    // 4. ambil users dari TABLE kamu sendiri
    const { data, error } = await supabase
      .from("users")
      .select("id, username, email, role, created_at");

    if (error) {
      return NextResponse.json(
        {
          status: false,
          code: 500,
          message: error.message,
          data: null,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        status: true,
        code: 200,
        message: "Success",
        data,
      },
      { status: 200 }
    );

  } catch (error: any) {
    return NextResponse.json(
      {
        status: false,
        code: 500,
        message: error.message || "Internal Server Error",
        data: null,
      },
      { status: 500 }
    );
  }
}