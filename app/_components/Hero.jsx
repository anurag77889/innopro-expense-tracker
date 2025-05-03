"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

function Hero() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-15 mt-6 justify-around items-center px-4 sm:px-0">
      <div className="font-bold text-lg sm:text-xl text-center sm:text-left">
        <h2 className="text-5xl sm:text-8xl text-green-600">InnoPro</h2>
        <h4 className="text-2xl sm:text-3xl">Because Every Expense Matters</h4>
        {isSignedIn ? (
          <Link href={"/dashboard"}>
            <Button
              className="cursor-pointer mt-6 p-4 sm:p-6 border-black"
              variant="ghost"
            >
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link href={"/sign-in"}>
            <Button className="cursor-pointer mt-6 p-4 sm:p-6 mr-4 border-black">
              Get Started
            </Button>
          </Link>
        )}
      </div>
      <div className="w-full sm:w-auto mt-6 sm:mt-0">
        <Image
          src="/dashboard.png"
          alt="Dashboard"
          width={700}
          height={700}
          priority
          className="rounded-xl border-2 shadow-lg max-h-[60vh] sm:max-h-[80vh] w-full"
        />
      </div>
    </div>
  );
}

export default Hero;
