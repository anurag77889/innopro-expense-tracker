"use client";

import React, { useEffect, useState } from "react";
import ExpenseTable from "./_components/ExpenseTable";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";

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

  return (
    <div className="p-10">
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
