"use client";
import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  User,
  User2,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav() {
  const menuList = [
    { id: 1, name: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
    { id: 2, name: "Budgets", icon: PiggyBank, path: "/dashboard/budgets" },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    { id: 4, name: "Upgrade", icon: ShieldCheck, path: "/dashboard/upgrade" },
    { id: 5, name: "Profile", icon: User2, path: "/dashboard/profile" },
  ];

  const path = usePathname();

  return (
    <div className="h-screen p-5 border shadow-sm">
      <Link href={"/"}>
        <Image
          src="/finalLogo.png"
          alt="logo"
          width={160}
          height={100}
          priority
        />
      </Link>

      <div className="mt-5">
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id}>
            <div
              className={`flex gap-2 items-center mb-2 text-gray-500 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-green-200
              ${path === menu.path ? "text-primary bg-green-200" : ""}`}
            >
              <menu.icon />
              {menu.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
