import { connectDB } from "@/lib/mongodb/config/connect-db";
import User from "@/lib/mongodb/model/User.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { ILogin } from "../../../../typings";

export async function POST(req: Request) {
  const { email, password, role }: ILogin = await req.json();

  await connectDB();

  try {
    const user = await User.findOne({ email, role });

    if (!user)
      return NextResponse.json({ message: "Email not found" }, { status: 404 });

    const validPassword = await bcrypt.compare(password, user.hashed_password);

    if (!validPassword)
      return NextResponse.json(
        { message: "Invalid password." },
        { status: 400 }
      );

    return NextResponse.json({
      message: "Login Successfull",
      isAuth: true,
      user,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal server error!" },
      { status: 500 }
    );
  }
}
