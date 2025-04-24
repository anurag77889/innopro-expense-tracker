import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BarChartDashboard({ budgetList }) {
  // Transform data to reflect 'totalSpend' and 'remainingBudget'
  const processedData = budgetList.map((item) => ({
    name: item.name,
    totalSpend: Math.min(item.totalSpend, item.amount), // prevent overdraw
    remainingBudget: Math.max(item.amount - item.totalSpend, 0),
  }));

  return (
    <div className="border rounded-lg p-5">
      <h2 className="font-bold text-lg">Activity</h2>
      <ResponsiveContainer width="80%" height={300}>
        <BarChart data={processedData} margin={{ top: 7 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* totalSpend appears below */}
          <Bar dataKey="totalSpend" stackId="a" fill="#00a63e" />
          {/* remaining budget appears above */}
          <Bar dataKey="remainingBudget" stackId="a" fill="#6EE7B7" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartDashboard;
