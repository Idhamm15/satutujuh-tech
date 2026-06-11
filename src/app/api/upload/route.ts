import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const formData = await req.formData();

  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({
      success: false,
      message: "File tidak ditemukan",
    });
  }

  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("blogs")
    .upload(fileName, file);

  if (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }

  const { data } = supabase.storage
    .from("blogs")
    .getPublicUrl(fileName);

  return NextResponse.json({
    success: true,
    url: data.publicUrl,
  });
}