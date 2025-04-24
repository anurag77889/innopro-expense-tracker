import React from "react";
import { UserButton } from "@clerk/nextjs";

function page() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-lg">User Profile</h2>
      <div className="p-15 w-24 h-24">
        <UserButton />
      </div>
    </div>
  );
}

export default page;
