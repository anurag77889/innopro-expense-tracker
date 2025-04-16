import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { toast } from "sonner";

function AddExpense({ budgetId, user, refreshData }) {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  const addNewExpense = async () => {
    const result = await db
      .insert(Expenses)
      .values({
        name: name,
        amount: amount,
        budgetId: budgetId,
        createdAt: user?.primaryEmailAddress?.emailAddress,
      })
      .returning({ insertedId: Budgets.id });

    console.log(result);
    if (result) {
      refreshData();
      toast("New Expense Added");
    }
  };

  return (
    <div className="border p-5 rounded-lg">
      <h2 className="font-bold text-lg">Add Expense</h2>
      <div className="mt-2">
        <label className="text-black font-medium my-1 block">
          Expense Name
        </label>
        <Input
          placeholder="e.g. Bedroom Decor"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mt-2">
        <label className="text-black font-medium my-1 block">
          Expense Amount
        </label>
        <Input
          placeholder="e.g. &#8377;1000"
          type="number"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <Button
        onClick={() => addNewExpense()}
        disabled={!(name && amount)}
        className="mt-3 w-full cursor-pointer"
      >
        Add New Expense
      </Button>
    </div>
  );
}

export default AddExpense;
