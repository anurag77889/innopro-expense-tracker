"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import CardInfo from "./_components/CardInfo";
import { useEffect, useState } from "react";
import { db } from "@/utils/dbConfig";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses } from "@/utils/schema";
import BarChartDashboard from "./_components/BarChartDashboard";
import BudgetItem from "./budgets/_components/BudgetItem";
import ExpenseTable from "./expenses/_components/ExpenseTable";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

function Dashboard() {
  const { user } = useUser();

  const [budgetList, setBudgetList] = useState([]);

  const [expensesList, setExpensesList] = useState([]);

  useEffect(() => {
    getBudgetList();
  }, [user]);

  // Used to get Budget List
  const getBudgetList = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`SUM(${Expenses.amount})`.mapWith(Number),
        totalItem: sql`COUNT(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id));
    setBudgetList(result);
    getAllExpenses();
  };

  // Used to get all the expenses
  const getAllExpenses = async () => {
    const result = await db
      .select({
        id: Expenses.id,
        name: Expenses.name,
        amount: Expenses.amount,
        createdAt: Expenses.createdAt,
      })
      .from(Budgets)
      .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress.emailAddress))
      .orderBy(desc(Expenses.id));

    setExpensesList(result);
  };

  // Handle print
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-3xl ">
            Hi, <span className="text-primary">{user?.fullName}</span> ✌️
          </h2>
          <p className="text-gray-500">
            Here's a snapshot of your financial activity.
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <Button
            onClick={handlePrint}
            className=" bg-green-100 hover:bg-green-200 text-green-700 border-green-200 gap-2 print:hidden cursor-pointer"
          >
            <Printer size={18} weight="fill" />
            Print
          </Button>
          <UserButton />
        </div>
      </div>
      <CardInfo budgetList={budgetList} />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-5">
        <div className="md:col-span-2">
          <BarChartDashboard budgetList={budgetList} />
          <h2 className="font-bold text-lg mt-5">Latest Expenses</h2>
          <ExpenseTable
            expenseList={expensesList}
            refreshData={() => getBudgetList()}
          />
        </div>
        <div className="grid gap-5">
          <h2 className="font-bold text-lg">Latest Budgets</h2>
          {budgetList.map((budget, index) => (
            <BudgetItem budget={budget} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
