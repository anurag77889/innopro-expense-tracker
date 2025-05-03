"use client";

import React, { useEffect, useState } from "react";
import ExpenseTable from "./_components/ExpenseTable";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

function ExpensePage() {
  const { user } = useUser();
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      getAllExpenses(user.primaryEmailAddress.emailAddress);
    }
  }, [user]);

  const getAllExpenses = async (email) => {
    const result = await db
      .select()
      .from(Expenses)
      .innerJoin(Budgets, eq(Budgets.id, Expenses.budgetId)) // Using Drizzle ORM's join method
      .where(eq(Budgets.createdBy, email))
      .orderBy(desc(Expenses.id));

    console.log(result);

    // Set the result in the state
    setExpenseList(
      result.map((row) => ({
        ...row,
        name: row.expenses?.name,
        amount: row.expenses?.amount,
        createdAt: row.expenses?.createdAt,
      }))
    );
  };

  // Handle print
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Total Expenses</h2>
        <Button
          onClick={handlePrint}
          className=" bg-green-100 hover:bg-green-200 text-green-700 border-green-200 gap-2 print:hidden cursor-pointer"
        >
          <Printer size={18} weight="fill" />
          Print
        </Button>
      </div>

      <ExpenseTable
        expenseList={expenseList}
        refreshData={() =>
          getAllExpenses(user?.primaryEmailAddress?.emailAddress)
        }
      />
    </div>
  );
}

export default ExpensePage;
