import { PackageCard } from "../components/packagecard";
import { theSeasons } from "../fonts";
export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white px-4 py-24">
      <div className="mx-auto max-w-3xl space-y-10">
        <h1 className={`${theSeasons.className} "text-2xl md:text-3xl lg:text-4xl text-center font-semibold tracking-tight`}>
          Our Packages
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PackageCard
            imageSrc="/proposal-package-demo.png"
            title="Classic Package"
            items={[
            ]}
            price="$280"
            href="/packages/classic"
          />

          <PackageCard
            imageSrc="/proposal-package-demo.png"
            tag="Most Popular"
            title="Signature Package"
            items={[
            ]}
            price="$350"  
            href="/packages/signature"
          />

          <PackageCard
            imageSrc="/proposal-package-demo.png"
            title="Romance Package"
            items={[
            ]}
            price="$450"
            href="/packages/romance"
          />
        </div>
      </div>
    </main>
  );
}
