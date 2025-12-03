import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

const HeroSection=()=>{
    return <section className="w-full pt-30 md:pt-40 pb-10">
        <div className="space-y-6 text-center">
            <div className="space-y-6 mx-auto">
                <h1 className="text-5xl font-bold ">Your Ai Carrer Coach for
                <br />
                Proffesional Success
                </h1>
                <p className="text-2xl font-semibold text-neutral-400">
                 Your smart career companion — guiding you with personalized insights,
                 <br /> skill paths, and clear
                  steps to reach your goals. Level up your future with the power of AI.
                </p>
            </div>
            <div>
                <Link href='/dashboard'>
                <Button size='lg' className="px-8">
                    Get Started</Button>
                </Link>
            </div>
            <div>
                <div>
                    <Image
                    src="/banner.jpg"
                    width={1100}
                    height={150}
                    alt="Dashboard"
                    className="rounded-lg shadow-2xl boarder mx-auto"
                    />
                </div>
            </div>
        </div>
    </section>
}

export default HeroSection;