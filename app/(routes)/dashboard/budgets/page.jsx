import React from "react";
import BudgetList from "./_components/BudgetList";
import { Button } from "@/components/ui/button";
import { Crown, Pen } from "lucide-react";

import Link from "next/link";

function Budgets() {
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <h2 className="font-bold text-3xl">My Budgets</h2>
        <Link href="/dashboard/upgrade">
          <Button className="flex gap-2 cursor-pointer">
            <Crown />
            Upgrade to Pro version
          </Button>
        </Link>
      </div>
      <BudgetList />
    </div>
  );
}

export default Budgets;
