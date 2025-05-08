"use client";

import React, { useEffect, useState } from "react";
import ExpenseTable from "./_components/ExpenseTable";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { desc, eq, or, isNull } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { Plus, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import moment from "moment/moment";
import { Loader } from "lucide-react";

function ExpensePage() {
  const { user } = useUser();
  const [expenseList, setExpenseList] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const addNewExpense = async () => {
    setLoading(true);
    const result = await db
      .insert(Expenses)
      .values({
        id: id,
        name: name,
        amount: amount,
        budgetId: null,
        createdAt: moment().format("DD/MM/YYYY"),
      })
      .returning();

    setAmount(0);
    setName("");
    if (result) {
      setLoading(false);
      getAllExpenses(user?.primaryEmailAddress?.emailAddress);
      toast("New Expense Added");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      getAllExpenses(user.primaryEmailAddress.emailAddress);
    }
  }, [user]);

  const getAllExpenses = async (email) => {
    const result = await db
      .select()
      .from(Expenses)
      .leftJoin(Budgets, eq(Budgets.id, Expenses.budgetId))
      .where(
        or(
          eq(Budgets.createdBy, email), // Budget belongs to user
          eq(Expenses.budgetId, 0), // Or expense has no budget
          isNull(Expenses.budgetId)
        )
      )
      .orderBy(desc(Expenses.id));

    // Set the result in the state
    setExpenseList(
      result.map((row) => ({
        ...row,
        id: row.expenses?.id,
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
        <div className="flex gap-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="cursor-pointer">
                <Plus />
                Add Expense
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Expense</DialogTitle>
                <DialogDescription></DialogDescription>

                <div className="mt-2">
                  <div>
                    <label className="text-black font-medium my-1 block">
                      Expense Name
                    </label>
                    <Input
                      placeholder="e.g. Home Decor"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mt-2">
                    <label className="text-black font-medium my-1 block">
                      Expense Amount
                    </label>
                    <Input
                      placeholder="e.g. ₹5000"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                    />
                  </div>
                </div>
              </DialogHeader>

              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button
                    onClick={() => addNewExpense()}
                    disabled={!(name && amount) || loading}
                    className="mt-3 w-full cursor-pointer"
                  >
                    {loading ? (
                      <Loader className="animate-spin" />
                    ) : (
                      "Add New Expense"
                    )}
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button
            onClick={handlePrint}
            className=" bg-green-100 hover:bg-green-200 text-green-700 border-green-200 gap-2 print:hidden cursor-pointer"
          >
            <Printer size={18} weight="fill" />
            Print
          </Button>
        </div>
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
