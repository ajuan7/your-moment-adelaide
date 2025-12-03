import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            name,
            email,
            phone, 
            instagram,
            date,
            location,
            occasion,
            package: selectedPackage,
            theme: selectedTheme,
            message,
        } = body;

        if (!name || !email || !phone || !date || !location || !occasion || !selectedPackage || !selectedTheme || !message) {
            return NextResponse.json(
                { error: "Missing required fields."},
                { status: 400 }
            );
        }

        const parsedDate = new Date(date);
        if (Number.isNaN(parsedDate.getTime())) {
            return NextResponse.json(
                { error: "Invalid date format" },
                { status: 400 }
            );
        }

        await prisma.inquiry.create({
            data: {
                name,
                email,
                phone,
                instagram: instagram || null,
                date: parsedDate,
                location,
                occasion,
                package: selectedPackage,
                theme: selectedTheme,
                message
            },
        });
        
        return NextResponse.json({ success: true }, { status: 201 });
        } catch (err) {
            console.error("[ENQUIRY_POST_ERROR]", err);
            return NextResponse.json(
                { error: "Something went wrong. Please try again later." },
                { status: 500 }
        );
    }
}
