import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    // AUTH
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

    let decoded: any;

    try {
      decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
      );
    } catch {
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

    // PAGINATION
    const searchParams = req.nextUrl.searchParams;

    const page = Number(
      searchParams.get("page")
    ) || 1;

    const limit = Number(
      searchParams.get("limit")
    ) || 10;

    const search =
      searchParams.get("search") || "";

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
      .from("users")
      .select(
        "id, username, email, role, created_at",
        { count: "exact" }
      );

    if (search) {
      query = query.or(
        `username.ilike.%${search}%,email.ilike.%${search}%`
      );
    }

    const {
      data,
      error,
      count,
    } = await query
      .order("id", {
        ascending: false,
      })
      .range(from, to);

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

    const totalPages = Math.ceil(
      (count || 0) / limit
    );

    return NextResponse.json(
      {
        status: true,
        code: 200,
        message: "Success",
        data,
        pagination: {
          current_page: page,
          per_page: limit,
          total_data: count,
          total_pages: totalPages,
          has_next_page:
            page < totalPages,
          has_prev_page: page > 1,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: false,
        code: 500,
        message:
          error.message ||
          "Internal Server Error",
        data: null,
      },
      { status: 500 }
    );
  }
}