import { Expenses } from "@/utils/schema";
import { Trash, Trash2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { db } from "@/utils/dbConfig";
import { eq, and, desc, getTableColumns, sql } from "drizzle-orm";

function ExpenseTable({ expenseList = [], refreshData }) {
  const deleteExpense = async (expenses) => {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expenses.id))
      .returning();

    if (result) {
      toast("Expense Deleted");
      refreshData();
    }
  };

  return (
    <div className="mt-3">
      <h2 className="font-bold text-lg">Latest Expenses</h2>
      <div className="grid grid-cols-4 bg-green-200 p-2 mt-4 rounded-sm ">
        <h2 className="font-bold">Name</h2>
        <h2 className="font-bold">Amount</h2>
        <h2 className="font-bold">Date</h2>
        <h2 className="font-bold">Action</h2>
      </div>
      {expenseList.map((expenses, index) => (
        <div
          className="grid grid-cols-4 border-b-2 border-b-green-200 p-2"
          key={index}
        >
          <h2>{expenses.name || expenses.Expenses.name}</h2>
          <h2>{expenses.amount || expenses.Expenses.amount}</h2>
          <h2>{expenses.createdAt || expenses.Expenses.createdAt}</h2>
          <h2>
            <Trash2
              className="text-red-600 hover:text-red-800 cursor-pointer"
              onClick={() => deleteExpense(expenses)}
            />
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ExpenseTable;
