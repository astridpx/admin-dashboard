import { connectDB } from "@/lib/mongodb/config/connect-db";
import User from "@/lib/mongodb/model/User.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// ? @desc GET ALL USERS

export async function GET() {
  const users = await User.find();

  return NextResponse.json({ data: users }, { status: 200 });
}
