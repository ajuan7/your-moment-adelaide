import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/src/lib/prisma"; 

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const email = String(formData.get("email") || "").trim().toLowerCase();
        const password = String(formData.get("password") || "");

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required."},
                { status: 400}                
            );
        }

        const user = await prisma.adminUser.findUnique({
            where: {email},
        });

        if (!user) {
            return NextResponse.json(
                { error: "Account not found."},
                { status: 401}
            );
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return NextResponse.json(
                { error: "Invalid Password"},
                { status: 401 }
            );
        }

        return NextResponse.json({success: true});
    } catch (err) {
        console.log("Login Error:", err);
        NextResponse.json(
            { error: "Something went wrong."},
            { status: 500 }
        );
    }
}
