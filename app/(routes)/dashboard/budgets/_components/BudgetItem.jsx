"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Budgets } from "@/utils/schema";

function BudgetItem({ budget }) {
  const calculateProgressPercentage = () => {
    const percentage = (budget.totalSpend / budget.amount) * 100;
    return percentage.toFixed(2);
  };
  return (
    <Link href={"/dashboard/expenses/" + budget?.id}>
      <div className="p-5 border rounded-lg hover:shadow-md cursor-pointer h-[170px]">
        <div className="gap-2 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <h2 className="text-2xl p-3 px-4 bg-green-100 rounded-full">
              {budget?.icon}
            </h2>
            <div>
              <h2 className="font-bold">{budget.name}</h2>
              <h2 className="text-sm text-gray-500">{budget.totalItem} Item</h2>
            </div>
          </div>
          <h2 className="font-bold text-primary text-lg">
            &#8377;{budget.amount}
          </h2>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs text-slate-400">
              &#8377;{budget.totalSpend ? budget.totalSpend : 0} Spent
            </h2>
            <h2 className="text-xs text-slate-400">
              &#8377;{budget.amount - budget.totalSpend} Remaining
            </h2>
          </div>
          <div className="w-full bg-green-300 h-2 rounded-full">
            <div
              className=" bg-primary h-2 rounded-full"
              style={{
                width: `${calculateProgressPercentage()}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BudgetItem;
