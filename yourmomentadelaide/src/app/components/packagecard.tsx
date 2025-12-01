"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";
import { theSeasons } from "../fonts";
import Link from "next/link";

interface PackageCardProps {
    title: string;
    items: string[];
    price?: string;
    tag?: string;
    imageSrc?: string;
    imageAlt?: string;
    href?: string;
}

export function PackageCard({
    title,
    items,
    price,
    tag,
    imageSrc,
    imageAlt,
    href = "#",
}: PackageCardProps) {
    return (
        <Card
            radius="lg"
            shadow="lg"
            className={`
                border border-zinc-200
                bg-[#faf7f2]
                font--font-geist-sans
                hover:bg-[#f3eee7]
                transition
                hover:-translate-y-1
                hover:shadow-xl
                rounded-2xl
                overflow-hidden
            `}
        >

            {imageSrc && (
                <div className="relative h-50 w-full">
                    <Image
                        src={imageSrc}
                        alt={imageAlt || title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <CardHeader className="flex flex-col items-start gap-1 pb-2 pt-4 px-4">
                {tag && (
                    <span className="rounded-full bg-black text-white text-[10px] px-2 py-0.5 uppercase tracking-wide">
                        {tag}
                    </span>
                )}
                <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
            </CardHeader>

            <CardBody className="pt-1 px-4 pb-2">
                <ul className="space-y-1 text-sm text-zinc-700 leading-relaxed">
                    {items.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            </CardBody>

            {price && (
                <CardFooter className=" pb-1 px-4 flex items-center flex-col">
                    <p className="text-sm pb-3 font-semibold text-zinc-900">
                        From {price}
                    </p>
                    <Link
                        href={href}
                        className="text-xs font-medium rounded-full bg-black px-3 py-1.5 text-white hover:bg-zinc-800 transition"
                    >
                        View details
                    </Link>
                </CardFooter>
            )}
        </Card>
    );
}
