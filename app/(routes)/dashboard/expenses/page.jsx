"use client";

import React, { useEffect, useState } from "react";
import ExpenseTable from "./_components/ExpenseTable"; // Adjust the path if needed
import { db } from "@/utils/dbConfig";
import { Expenses } from "@/utils/schema";
import { desc } from "drizzle-orm";

function ExpensePage() {
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    getAllExpenses();
  }, []);

  const getAllExpenses = async () => {
    const result = await db.select().from(Expenses).orderBy(desc(Expenses.id)); // Optional: latest first
    setExpenseList(result);
  };

  return (
    <div className="p-10">
      <ExpenseTable expenseList={expenseList} refreshData={getAllExpenses} />
    </div>
  );
}

export default ExpensePage;
