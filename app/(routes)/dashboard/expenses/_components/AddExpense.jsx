import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { toast } from "sonner";
import moment from "moment/moment";
import { Loader } from "lucide-react";

function AddExpense({ budgetId, user, refreshData }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const addNewExpense = async () => {
    setLoading(true);
    const result = await db
      .insert(Expenses)
      .values({
        name: name,
        amount: amount,
        budgetId: budgetId,
        createdAt: moment().format("DD/MM/YYYY"),
      })
      .returning({ insertedId: Budgets.id });

    setAmount(0);
    setName("");
    if (result) {
      setLoading(false);
      refreshData();
      toast("New Expense Added");
    }
    setLoading(false);
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
          value={name}
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
          value={amount}
        />
      </div>
      <Button
        onClick={() => addNewExpense()}
        disabled={!(name && amount) || loading}
        className="mt-3 w-full cursor-pointer"
      >
        {loading ? <Loader className="animate-spin" /> : "Add New Expense"}
      </Button>
    </div>
  );
}

export default AddExpense;
