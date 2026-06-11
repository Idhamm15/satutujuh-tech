import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    console.log("SLUG DEBUG:", slug);

    if (!slug) {
      return NextResponse.json(
        {
          status: false,
          code: 400,
          message: "Slug is required",
          data: null,
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

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

    if (!data) {
      return NextResponse.json(
        {
          status: false,
          code: 404,
          message: "Blog not found",
          data: null,
        },
        { status: 404 }
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
  } catch (err: any) {
    console.error(err);

    return NextResponse.json(
      {
        status: false,
        code: 500,
        message: err.message || "Internal Server Error",
        data: null,
      },
      { status: 500 }
    );
  }
}