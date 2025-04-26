"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  CaseSensitive,
  CaseSensitiveIcon,
  CaseUpper,
  LogIn,
  Mail,
} from "lucide-react";

function page() {
  const { user } = useUser();
  return (
    <div className="p-10 ">
      <div className="flex justify-between border-b-2 border-b-slate-300 pb-2 ">
        <h2 className="font-semibold text-2xl ">User Profile</h2>
        <UserButton />
      </div>
      <div className="mt-10 grid md:grid-cols-2 sm:grid-cols-1 gap-16 font-semibold">
        <div className="flex flex-col gap-4 p-5 rounded-lg shadow-md shadow-green-300">
          <div className="flex flex-row gap-2 items-center">
            <CaseUpper size="32px" className="mt-1.5" />
            <h2 className="font-bold text-2xl">First Name</h2>{" "}
          </div>
          <span className="font-semibold text-xl">{user?.firstName}</span>
        </div>

        <div className="flex flex-col gap-4 p-5 rounded-lg shadow-md shadow-green-300">
          <div className="flex flex-row gap-2 items-center">
            <CaseUpper size="32px" className="mt-1.5" />
            <span className="font-bold text-2xl">Last Name</span>{" "}
          </div>

          <span className="font-semibold text-xl">{user?.lastName}</span>
        </div>
        <div className="flex flex-col gap-4 p-5 rounded-lg shadow-md shadow-green-300">
          <div className="flex flex-row gap-2 items-center">
            <Mail className="mt-1" />
            <h2 className="font-bold text-2xl">Email Address</h2>{" "}
          </div>
          <span className="font-semibold text-xl">
            {user?.primaryEmailAddress?.emailAddress}
          </span>
        </div>

        {user?.lastSignInAt && (
          <div className="flex flex-col gap-4 p-5 rounded-lg  shadow-md shadow-green-300">
            <div className="flex flex-row gap-2 items-center">
              <LogIn />
              <span className="font-bold text-2xl">Last Sign-In</span>
            </div>

            <span className="font-semibold text-xl">
              {new Date(user.lastSignInAt).getUTCDate() +
                "/" +
                (new Date(user.lastSignInAt).getUTCMonth() + 1) +
                "/" +
                new Date(user.lastSignInAt).getUTCFullYear()}
            </span>
          </div>
        )}
        <h2>{user?.hasImage}</h2>
      </div>
    </div>
  );
}

export default page;
