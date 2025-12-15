import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/src/lib/prisma"; 
import jwt from "jsonwebtoken";

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
        console.log("test");
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return NextResponse.json(
                { error: "Invalid Password"},
                { status: 401 }
            );
        }

        const token = jwt.sign(
        {
            sub: user.id,
            email: user.email,
            role: "admin",
        },
        process.env.JWT_SECRET as string,
        { expiresIn: "7d" }
        );

        const res = NextResponse.redirect(new URL("/admin", req.url));
        res.cookies.set("admin_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return res;
    } catch (err) {
        console.log("Login Error:", err);
        NextResponse.json(
            { error: "Something went wrong."},
            { status: 500 }
        );
    }
}
