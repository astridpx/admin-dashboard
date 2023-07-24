import { connectDB } from "@/lib/mongodb/config/connect-db";
import User from "@/lib/mongodb/model/User.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { INewUser, IUserEdit } from "../../../../typings";

// ? @desc GET ALL USERS

export async function GET() {
  await connectDB();

  const users = await User.find().select("-hashed_password -raw_password ");

  return NextResponse.json({ data: users }, { status: 200 });
}

export async function POST(req: Request) {
  const { first_name, last_name, email, gender, address, password }: INewUser =
    await req.json();

  async function hashingPassword(pass: any) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(pass, salt);
      return hashedPassword;
    } catch (error) {
      console.error("Error hashing password:", error);
      throw error;
    }
  }
  await connectDB();

  const isEmail = await User.findOne({ email });

  if (isEmail)
    return NextResponse.json(
      { message: "Email is already exist." },
      { status: 408 }
    );

  const hashed_password = await hashingPassword(password);

  try {
    await User.create({
      first_name,
      last_name,
      email,
      gender,
      address,
      raw_password: password,
      hashed_password,
    });

    return NextResponse.json({ message: "User successfully added." });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error." },
      { status: 500 }
    );
  }
}
