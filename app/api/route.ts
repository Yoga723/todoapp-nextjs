import { NextRequest, NextResponse } from "next/server";
import { mongooseConnect } from "@/lib/mongoose";
import { Tasks } from "@/models/ToDoModels";

// CRUD Function
export async function POST(req: NextRequest, res: any) {
  const body = await req.json();
  const payload = {
    title: body.title,
    order: "4",
    description: body.description,
  };
  await mongooseConnect();
  await Tasks.create(payload);
  console.log("Body:", body);
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

export async function PUT(req: NextRequest, res: any) {
  mongooseConnect();
  const id = req.nextUrl.searchParams.get("id");
  const body = await req.json();
  const payload = {
    title: body.title,
    order: "4",
    description: body.description,
  };
  console.log("ini IDnya :", id);
  try {
    if (id) {
      const datas = await Tasks.findOneAndUpdate({ _id: id }, payload);
      return NextResponse.json(datas);
    } else {
      return NextResponse.json(
        { error: "ID parameter is missing" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.error();
  }
}

export async function DELETE(req: NextRequest) {
  mongooseConnect();
  const id = req.nextUrl.searchParams.get("id");
  try {
    const datas = await Tasks.findOneAndDelete({ _id: id });
    return NextResponse.json(datas);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.error();
  }
}
