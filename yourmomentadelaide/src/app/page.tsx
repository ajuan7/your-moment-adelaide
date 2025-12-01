import Image from "next/image";
import { theSeasons } from "./fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white px-4">
        {/* Hotel Image Background Blurred */}
        <Image
          src="/hotel-background.jpg"       
          alt="Romantic hotel room"
          fill                          
          priority
          className="object-cover blur-sm brightness-[0.35]"
        />

        <div className="space-y-2">
          {/* Main Text Content */}
          <div className="relative z-10 max-w-md text-center space-y-2">
            <div className={theSeasons.className}>
              <Image
                src="/yourmoment-logo-white-transparent.png"
                alt="Your Moment Logo"
                width={500}
                height={500}
              />
              <p className="-mt-25 text-zinc-300 space-y-1">
                We style the room. You live the moment.
              </p>
              <p className="mt-10 text-sm text-zinc-400">
                Our website is coming soon. For bookings & enquiries:
              </p>
              <div className="space-y-2 mt-10">
                <p className="text-sm">
                  Email:{" "}
                  <a
                    href="mailto:yourmomentadelaide@gmail.com"
                    className="underline"
                  >
                    yourmomentadelaide@gmail.com
                  </a>
                </p>
                <p className="text-sm">
                  Instagram:{" "}
                  <a
                    href="https://instagram.com/yourmomentadelaide"
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @yourmomentadelaide
                  </a>
                </p>
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}
