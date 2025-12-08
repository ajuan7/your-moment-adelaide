"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";
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
        border border-white/10
        bg-white/5
        backdrop-blur-md
        hover:bg-white/10
        transition
        hover:-translate-y-1
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]
        rounded-3xl
        overflow-hidden
      `}
        >
            {imageSrc && (
                <div className="relative w-full aspect-[4/3]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt || title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <CardHeader className="flex flex-col items-start gap-2 pb-1 pt-4 px-4">
                {tag && (
                    <span className="rounded-full bg-white/10 text-[10px] px-2 py-0.5 uppercase tracking-wide text-amber-300">
                        {tag}
                    </span>
                )}
                <h2 className="text-base md:text-lg font-semibold text-white">
                    {title}
                </h2>
            </CardHeader>

            <CardBody className="pt-1 px-4 pb-3">
                <ul className="space-y-1.5 text-sm text-zinc-200 leading-relaxed">
                    {items.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            </CardBody>

            {price && (
                <CardFooter className="pb-4 px-4 flex flex-col items-start gap-2">
                    <p className="text-sm text-zinc-200">
                        From{" "}
                        <span className="text-lg font-semibold text-white">
                            {price}
                        </span>
                    </p>
                    <Link
                        href={href}
                        className="inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-[11px] font-medium text-black hover:bg-zinc-100 transition"
                    >
                        View details
                    </Link>
                </CardFooter>
            )}
        </Card>
    );
}
