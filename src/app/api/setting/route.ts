// app/api/settings/route.ts

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("settings")
    .select("*")
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
    data,
  });
}

export async function PUT(req: Request) {
  const body = await req.json();

  const { data, error } = await supabase
    .from("settings")
    .update(body)
    .eq("id", 1)
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
    message: "Settings berhasil diupdate",
    data,
  });
}