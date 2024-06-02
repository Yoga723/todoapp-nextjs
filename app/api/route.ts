import { NextRequest, NextResponse } from "next/server";
import { mongooseConnect } from "@/lib/mongoose";
import { Tasks } from "@/models/ToDoModels";

// CRUD Function
export async function POST(req: NextRequest, res: any) {
  // const body = await req.json();
  const test = {
    title: "Makan Siang",
    order: "2",
    description: "Makan Pagi dengan nasi orak arik",
  };
  await mongooseConnect();
  await Tasks.create(test);
  // console.log("title:", body);
  return NextResponse.json({ success: true, mesaage: "POST Berhasil" });
}

export async function GET(req: NextRequest) {
  mongooseConnect();
  const id = req.nextUrl.searchParams.get("id");
  try {
    if (id) {
      const datas = await Tasks.findOne({ _id: id });
      return NextResponse.json(datas);
    } else {
      const datas = await Tasks.find({});

      return NextResponse.json(datas);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

async function UPDATE(req: NextRequest) {
  mongooseConnect();
}
