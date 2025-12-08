import Image from "next/image";
import Link from "next/link";
import { PackageCard } from "../../components/packagecard";
import { theSeasons } from "../../fonts";

export default function PackageSignaturePage() {
    return (
        <main className="min-h-screen bg-gray text-white px-4 py-24">
            <div className="mx-auto max-w-3xl space-y-10">
                <h1 className={`${theSeasons.className} text-center text-white text-2xl md:text-3xl lg:text-4xl`}>
                    Signature Package
                </h1>

                <div className={`${theSeasons.className} flex flex-col justify-center items-center text-center space-y-10`}>
                    <div>
                        <Image
                            src="/proposal-package-demo.png"
                            alt="Signature Package Main Photo"
                            width={400}
                            height={200}
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </div>

                    <div>
                        <p>Included</p>
                        <p>
                            25 x balloons in colour of choice or shape includes metallic <br/>
                            10 x tassels and satin ribbon/bows onto balloons  <br />
                            2 x set side balloon cluster x 6 (includes confetti ballons, tassels and weight)  <br />
                            10 x floor balloons  <br/>
                            8 x streamers  <br/>
                            Up to 15 x small / medium foil letters or numbers OR 2 x large number balloons <br/>
                            3500 x Scattered Petals <br/>
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