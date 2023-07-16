import { connectDB } from "@/lib/mongodb/config/connect-db";
import User from "@/lib/mongodb/model/User.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// ? @what Register API route
// ? @desc Validate data before inserting into database

interface IRegister {
  first_name?: string;
  last_name?: string;
  email?: string;
  password: any;
  role?: string;
}

export async function POST(req: Request) {
  const { first_name, last_name, email, password, role }: IRegister =
    await req.json();

  await connectDB();

  try {
    const isExist = await User.findOne({ email });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    const hashed_password = await bcrypt.hash(password, salt);

    if (isExist)
      return NextResponse.json(
        { message: "Email is already exist." },
        { status: 400 }
      );

    const newUser = new User({
      first_name,
      last_name,
      email,
      raw_password: password,
      hashed_password,
      role,
    });

    await User.create(newUser);
    return NextResponse.json({ message: "Successfully registered" });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Internal server error!" },
      { status: 500 }
    );
  }
}
