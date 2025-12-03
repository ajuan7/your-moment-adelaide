"use client";

import { useState } from "react";

export function EnquiryForm() {


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            instagram: formData.get("instagram"),
            date: formData.get("date"),
            location: formData.get("location"),
            occasion: formData.get("occasion"),
            package: formData.get("package"),
            theme: formData.get("theme"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <form
            className="mt-6 space-y-4 rounded-2xl bg-black/50 border border-white/10 p-4 md:p-6 text-left"
            onSubmit={handleSubmit}
        >
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                Enquiry form
            </h3>
            <p className="text-xs text-zinc-300">
                Fill this out and we&apos;ll get back to you with availability and a quote.
            </p>

            {/* Name + Email */}
            <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                    <label
                        htmlFor="name"
                        className="text-xs font-medium uppercase tracking-wide text-zinc-200"
                    >
                        Name<span className="text-red-400">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        required
                        placeholder="Full name"
                        className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/40"
                    />
                </div>

                <div className="space-y-1">
                    <label
                        htmlFor="email"
                        className="text-xs font-medium uppercase tracking-wide text-zinc-200"
                    >
                        Email<span className="text-red-400">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/40"
                    />
                </div>
            </div>

            {/* Phone + Instagram */}
            <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                    <label
                        htmlFor="phone"
                        className="text-xs font-medium uppercase tracking-wide text-zinc-200"
                    >
                        Phone number<span className="text-red-400">*</span>
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        required
                        placeholder="04xx xxx xxx"
                        className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/40"
                    />
                </div>

                <div className="space-y-1">
                    <label
                        htmlFor="instagram"
                        className="text-xs font-medium uppercase tracking-wide text-zinc-200"
                    >
                        Instagram handle (optional)
                    </label>
                    <input
                        id="instagram"
                        name="instagram"
                        placeholder="@yourmomentadelaide"
                        className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/40"
                    />
                </div>
            </div>

            {/* Date + Location */}
            <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                    <label
                        htmlFor="date"
                        className="text-xs font-medium uppercase tracking-wide text-zinc-200"
                    >
                        Date of setup<span className="text-red-400">*</span>
                    </label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/40"
                    />
                </div>

                <div className="space-y-1">
                    <label
                        htmlFor="location"
                        className="text-xs font-medium uppercase tracking-wide text-zinc-200"
                    >
                        Hotel / Airbnb & suburb<span className="text-red-400">*</span>
                    </label>
                    <input
                        id="location"
                        name="location"
                        required
                        placeholder="Hotel name / Airbnb + suburb"
                        className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/40"
                    />
                </div>
            </div>

            {/* Occasion + Package */}
            <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                    <label
                        htmlFor="occasion"
                        className="text-xs font-medium uppercase tracking-wide text-zinc-200"
                    >
                        Occasion<span className="text-red-400">*</span>
                    </label>
                    <select
                        id="occasion"
                        name="occasion"
                        required
                        className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40"
                    >
                        <option value="">Select</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="proposal">Proposal</option>
                        <option value="romantic-night">Romantic night</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="space-y-1">
                    <label
                        htmlFor="package"
                        className="text-xs font-medium uppercase tracking-wide text-zinc-200"
                    >
                        Package selection<span className="text-red-400">*</span>
                    </label>
                    <select
                        id="package"
                        name="package"
                        required
                        className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40"
                    >
                        <option value="">Select a package</option>
                        <option value="classic">Classic Package</option>
                        <option value="signature">Signature Package</option>
                        <option value="proposal">Proposal Package</option>
                        <option value="not-sure">Not sure yet – help me choose</option>
                    </select>
                </div>
                
                <div className="space-y-1">
                    <label
                        htmlFor="theme"
                        className="text-xs font-medium uppercase tracking-wide text-zinc-200"
                    >
                        Choose Your Theme<span className="text-red-400">*</span>
                    </label>
                    <select
                        id="theme"
                        name="theme"
                        required
                        className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40"
                    >
                        <option value="">Select a theme</option>
                        <option value="classic"> ❤️ Romantic Red & Gold</option>
                        <option value="signature">🌸 Blush & Rose Gold</option>
                        <option value="proposal">🤍 Nude & White Luxe</option>
                        <option value="proposal">🖤 Black & Gold Luxe</option>
                        <option value="not-sure">Not sure yet – help me choose</option>
                    </select>
                </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
                <label
                    htmlFor="message"
                    className="text-xs font-medium uppercase tracking-wide text-zinc-200"
                >
                    Tell us about your setup<span className="text-red-400">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Preferred method of contact, colours, check-in time, special requests…"
                    className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold text-black shadow-sm transition hover:bg-zinc-200"
            >
                Submit enquiry
            </button>

            <p className="text-[10px] text-zinc-400">
                By submitting this form you&apos;re making an enquiry only. Your booking is
                confirmed once we reply and payment is received.
            </p>
        </form>
    );
}
