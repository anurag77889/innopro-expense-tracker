import React from "react";
import ExpenseTable from "./_components/ExpenseTable";

function ExpensePage({ expenseList, refreshData }) {
  return (
    <div className="mt-4">
      <ExpenseTable
        expenseList={expenseList}
        refreshData={() => getBudgetInfo()}
      />
    </div>
  );
}

export default ExpensePage;
