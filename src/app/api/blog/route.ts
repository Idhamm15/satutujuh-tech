// app/api/blogs/route.ts

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import jwt from "jsonwebtoken";

/**
 * =========================
 * GET BLOGS (PUBLIC)
 * =========================
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const {
      data,
      error,
      count,
    } = await supabase
      .from("blogs")
      .select("*", {
        count: "exact",
      })
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
          has_next_page: page < totalPages,
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

/**
 * =========================
 * POST BLOG (PROTECTED)
 * =========================
 */
export async function POST(req: Request) {
  try {
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

    // verify JWT
    let decoded: any;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!);
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

    // role check
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

    const body = await req.json();

    const {
      title,
      slug,
      excerpt,
      body: content,
      thumbnail_url,
      status,
    } = body;

    // validation
    if (!title || !slug || !content) {
      return NextResponse.json(
        {
          status: false,
          code: 400,
          message: "title, slug, body wajib diisi",
          data: null,
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("blogs")
      .insert({
        title,
        slug,
        excerpt: excerpt || null,
        body: content,
        thumbnail_url: thumbnail_url || null,
        status: status || "draft",
        user_id: decoded.id,
      })
      .select()
      .single();

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
        code: 201,
        message: "Blog berhasil dibuat",
        data,
      },
      { status: 201 }
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