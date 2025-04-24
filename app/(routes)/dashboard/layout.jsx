"use client";
import React, { useEffect } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { Budgets } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { db } from "@/utils/dbConfig";

function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const email = user?.primaryEmailAddress?.emailAddress;

    if (!email) {
      console.warn("User email not found");
      return;
    }

    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, email));
    console.log(result);

    if (result.length === 0) {
      router.replace("/dashboard/budgets");
    }
  };

  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-64 ">{children}</div>
    </div>
  );
}

export default DashboardLayout;
