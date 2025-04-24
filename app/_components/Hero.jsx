"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

function Hero() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex gap-15 mt-6 justify-around items-center">
      <div className="font-bold text-lg/10">
        <h2 className="text-8xl text-green-600">InnoPro</h2>
        <h4 className="text-3xl">Because Every Expense Matters</h4>
        {isSignedIn ? (
          <Link href={"/dashboard"}>
            <Button
              className="cursor-pointer mt-6 p-6 border-black"
              variant="ghost"
            >
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link href={"/sign-in"}>
            <Button className="cursor-pointer mt-6 p-6 mr-4 border-black">
              Get Started
            </Button>
          </Link>
        )}
      </div>
      <div>
        <Image
          src="/dashboard.png"
          alt="Dashboard"
          width={700}
          height={700}
          priority
          className="rounded-xl border-2 shadow-lg max-h-[80vh]"
        />
      </div>
    </div>
  );
}

export default Hero;
