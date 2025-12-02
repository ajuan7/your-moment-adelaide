import { PackageCard } from "../components/packagecard";

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-white px-4 py-24">
      <div className="mx-auto max-w-3xl space-y-10">
        <h1 className="text-3xl text-center text-black font-semibold tracking-tight">
          Our Packages
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PackageCard
            imageSrc="/proposal-package-demo.png"
            title="Classic Package"
            items={[
            ]}
            price="$280"
          />

          <PackageCard
            imageSrc="/proposal-package-demo.png"
            tag="Most Popular"
            title="Signature Package"
            items={[
            ]}
            price="$350"
          />

          <PackageCard
            imageSrc="/proposal-package-demo.png"
            title="Proposal Package"
            items={[
            ]}
            price="$450"
          />
        </div>
      </div>
    </main>
  );
}
