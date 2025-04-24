"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Correct import
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center shadow-sm">
      <Link href="/">
        <Image
          src="/finallogo.png"
          alt="logo"
          width={120}
          height={120}
          className="cursor-pointer"
        />
      </Link>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href="/sign-in">
          <Button asChild>
            <span>Get Started</span>
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
