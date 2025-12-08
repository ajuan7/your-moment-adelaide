import { prisma } from "../../lib/prisma";
import { theSeasons } from "../fonts";

export default async function AdminPage() {
    const enquires = await prisma.inquiry.findMany({
        orderBy: {createdAt: "desc"},
    });

    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white px-4 py-24">
            <div className={`flex-col items-center min-h-screen bg-gray text-white px-4 py-24 mx-auto max-w-3xl space-y-10`}>
                <h1 className={`${theSeasons.className} `}>Admin Dashboard</h1>

                <div className="overflow-x-auto text-left rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <table className="min-w-full space-x-10 text-sm">
                        <thead>
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
                                    <td>-</td>
                                    <td>{enquiry.location}</td>
                                    <td>{enquiry.occasion}</td>
                                    <td>{enquiry.package}</td>
                                    <td>{enquiry.theme}</td>
                                    <td>{enquiry.message}</td>
                                    <td>-</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};