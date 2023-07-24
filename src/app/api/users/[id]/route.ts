import { connectDB } from "@/lib/mongodb/config/connect-db";
import User from "@/lib/mongodb/model/User.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function PUT(req: Request, { params }: any) {
  const { first_name, last_name, email, gender, address }: any =
    await req.json();
  const { id } = params;

  try {
    await connectDB();

    const isEmailExist = await User.findOne({ email: email, _id: { $ne: id } });

    if (isEmailExist)
      return NextResponse.json(
        { message: "This email is already in used." },
        { status: 408 }
      );

    await User.findByIdAndUpdate(id, {
      first_name,
      last_name,
      email,
      gender,
      address,
    });

    return NextResponse.json({ message: "Update status success." });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params }: any) {
  const { id } = params;

  try {
    await connectDB();

    const isExist = await User.findById(id);

    if (!isExist)
      return NextResponse.json(
        { message: "Unique Id not found." },
        { status: 404 }
      );

    await User.findByIdAndDelete(id);

    return NextResponse.json({ message: "User Deleted Successfully." });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error." },
      { status: 500 }
    );
  }
}
