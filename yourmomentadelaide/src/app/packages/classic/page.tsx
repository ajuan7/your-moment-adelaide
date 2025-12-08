import Image from "next/image";
import Link from "next/link";
import { PackageCard } from "../../components/packagecard";
import { theSeasons } from "../../fonts";

export default function PackageClassicPage() {
    return (
        <main className="min-h-screen bg-gray text-white px-4 py-24">
            <div className="mx-auto max-w-3xl space-y-10">
                <h1 className={`${theSeasons.className} text-center text-white text-lg md:text-xl lg:text-2xl`}>
                    Classic Package
                </h1>

                <div className="flex flex-col justify-center items-center text-center">
                    <div>
                        <Image
                            src="/proposal-package-demo.png"
                            alt="Classic Package Main Photo"
                            width={400}
                            height={200}
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </div>

                    <div>
                        <p>Included</p>
                        <p>
                            20 x balloons in colour of choice  <br/>
                            5 x metallic balloon  <br />
                            10 x floor balloons  <br />
                            Up to 15 x foil letters or numbers or 2 x large number balloons  <br/>
                            1 x balloon cluster x 6 (includes confetti ballons, tassels and weight)  <br/>
                            Scattered petals  
                        </p>
                    </div>
                        <Link
                            href="/contact"
                            className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black shadow-sm transition hover:bg-zinc-100"
                        >
                            Enquire Now
                        </Link>
                    <div>
                        
                    </div>
                </div>


            </div>
        </main>
    );
};