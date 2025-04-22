import { PiggyBank, ReceiptText, Wallet } from "lucide-react";
import React, { useEffect, useState } from "react";

function CardInfo({ budgetList }) {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);

  useEffect(() => {
    if (Array.isArray(budgetList) && budgetList.length > 0) {
      calculateCardInfo();
    } else {
      setTotalBudget(0);
      setTotalSpend(0);
    }
  }, [budgetList]);

  const calculateCardInfo = () => {
    const totals = budgetList.reduce(
      (acc, curr) => {
        const amount = Number(curr.amount) || 0;
        const spend = Number(curr.totalSpend) || 0;
        acc.totalBudget += amount;
        acc.totalSpend += spend;
        return acc;
      },
      { totalBudget: 0, totalSpend: 0 }
    );

    setTotalBudget(totals.totalBudget);
    setTotalSpend(totals.totalSpend);
  };

  return (
    <div>
      {Array.isArray(budgetList) && budgetList.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-7 border rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-sm">Total Budget</h2>
              <h2 className="font-bold text-2xl">₹{totalBudget}</h2>
            </div>
            <PiggyBank className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
          </div>

          <div className="p-7 border rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-sm">Total Expense</h2>
              <h2 className="font-bold text-2xl">₹{totalSpend}</h2>
            </div>
            <ReceiptText className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
          </div>

          <div className="p-7 border rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-sm">Budget Count</h2>
              <h2 className="font-bold text-2xl">{budgetList?.length || 0}</h2>
            </div>
            <Wallet className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item, index) => (
            <div
              className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
              key={index}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardInfo;
