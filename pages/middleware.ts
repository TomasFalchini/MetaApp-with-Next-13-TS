import mongoose from "mongoose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest, res: NextResponse) {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return NextResponse.next();
  }
  // Use new db connection
  await mongoose.connect(process.env.mongodburl!);
  return NextResponse.next();
}
