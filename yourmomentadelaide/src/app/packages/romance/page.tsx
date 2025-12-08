import Image from "next/image";
import Link from "next/link";
import { PackageCard } from "../../components/packagecard";
import { theSeasons } from "../../fonts";

export default function PackageRomancePage() {
    return (
        <main className="min-h-screen bg-gray text-white px-4 py-24">
            <div className="mx-auto max-w-3xl space-y-10">
                <h1 className={`${theSeasons.className} text-center text-white text-lg md:text-xl lg:text-2xl`}>
                    Romance Package
                </h1>

                <div className={`${theSeasons.className} flex flex-col justify-center items-center text-center space-y-10`}>
                    <div>
                        <Image
                            src="/proposal-package-demo.png"
                            alt="Romance Package Main Photo"
                            width={400}
                            height={200}
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </div>

                    <div>
                        <p>Included</p>
                        <p>
                            20 x ceiling float balloons in choice of colour and shape, finished with satin ribbon/bows <br/>
                            10 x confetti balloons  <br />
                            20 x floor balloons  <br />
                            2 x set side balloon cluster x 6 (includes confetti ballons, tassels and weight)  <br/>
                            10 x LED candles and letters  <br/>
                            4 x streamers with polaroid photos <br/>
                            1 x petals heart shaped on bed <br/>
                            1 x petals at entrance walkway <br/>
                            1 x large balloon text ‘Will you marry me?’  <br/>
                            1 x floral bouquet / card <br/>
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