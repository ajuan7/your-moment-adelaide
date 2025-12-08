import { prisma } from "../../lib/prisma";
import { theSeasons } from "../fonts";

export default async function AdminPage() {
    const enquires = await prisma.inquiry.findMany({
        orderBy: {createdAt: "desc"},
    });


    function formatDate(date: Date | null) {
        if (!date) return "-";
        return date.toLocaleString("en-AU", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white px-4 py-24">
            <div className={`flex-col items-center min-h-screen bg-gray text-white px-4 py-24 mx-auto max-w-6xl space-y-10`}>
                <h1 className={`${theSeasons.className} `}>Admin Dashboard</h1>

                <div className="overflow-x-auto text-left rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <table className="min-w-full text-sm border-separate border-spacing-x-6 border-spacing-y-2">
                        <thead className="bg-white/5 text-xs uppercase tracking-wide text-zinc-300">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Instagram</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Occasion</th>
                                <th>Package</th>
                                <th>Theme</th>
                                <th>Message</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enquires.map((enquiry ) => (
                                <tr key={enquiry.id}>
                                    <td>{enquiry.name}</td>
                                    <td>{enquiry.email}</td>
                                    <td>{enquiry.phone}</td>
                                    <td>{enquiry.instagram}</td>
                                    <td>{formatDate(enquiry.date)}</td>
                                    <td>{enquiry.location}</td>
                                    <td>{enquiry.occasion}</td>
                                    <td>{enquiry.package}</td>
                                    <td>{enquiry.theme}</td>
                                    <td>{enquiry.message}</td>
                                    <td>{formatDate(enquiry.createdAt)}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};