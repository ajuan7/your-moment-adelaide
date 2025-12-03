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

        // Validation for entries
        if (!name || !email || !phone || !date || !location || !occasion || !selectedPackage || !selectedTheme || !message) {
            return NextResponse.json(
                { error: "Missing required fields."},
                { status: 400 }
            );
        }

        // Parse date from String into Date
        const parsedDate = new Date(date);
        if (Number.isNaN(parsedDate.getTime())) {
            return NextResponse.json(
                { error: "Invalid date format" },
                { status: 400 }
            );
        }

        // Create the row in the table
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
        
        // Catch response and error
        return NextResponse.json({ success: true }, { status: 201 });
        } catch (err) {
            console.error("[ENQUIRY_POST_ERROR]", err);
            return NextResponse.json(
                { error: "Something went wrong. Please try again later." },
                { status: 500 }
        );
    }
}
