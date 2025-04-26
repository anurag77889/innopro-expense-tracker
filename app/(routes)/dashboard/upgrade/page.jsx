import { Button } from "@/components/ui/button";
import React from "react";

function Upgrade() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-4xl mb-10">
        Upgrade to the Pro Version of InnoPro
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5">
        <div className="rounded-lg bg-red-700 shadow-2xl">
          <div className="flex flex-col justify-center items-center bg-red-800 rounded-lg pt-5 pb-5 gap-1.5">
            <h4 className="text-xl font-bold text-white">Free</h4>
            <h1 className="text-4xl font-bold text-white">&#8377;0</h1>
            <h5 className="text-xl font-light text-white"> PER MONTH</h5>
          </div>
          <div className="flex flex-col justify-center items-center pt-5 gap-4 pb-8">
            <h2 className="text-white font-semibold">
              Manual Expense Tracking
            </h2>
            <h2 className="text-white font-semibold">1 Budget Category</h2>
            <h2 className="text-white font-semibold">Basic Reports</h2>
            <h2 className="text-white font-semibold">Up to 5 Users</h2>
            <Button className="text-red-700 bg-white p-5 rounded-sm cursor-pointer transition-transform duration-100 transform hover:scale-115 hover:bg-red-50">
              GET PLAN
            </Button>
          </div>
        </div>
        <div className="rounded-lg bg-green-700 shadow-2xl">
          <div className="flex flex-col justify-center items-center bg-green-800 rounded-lg pt-5 pb-5 gap-1.5">
            <h4 className="text-xl font-bold text-white">Standard</h4>
            <h1 className="text-4xl font-bold text-white">&#8377;500</h1>
            <h5 className="text-xl font-light text-white"> PER MONTH</h5>
          </div>
          <div className="flex flex-col justify-center items-center pt-5 gap-4 pb-8">
            <h2 className="text-white font-semibold">All Free Features</h2>
            <h2 className="text-white font-semibold">
              Up to 5 Budget Categories
            </h2>
            <h2 className="text-white font-semibold">Monthly Summary Charts</h2>
            <h2 className="text-white font-semibold">Export to CSV</h2>
            <h2 className="text-white font-semibold">Cloud Sync</h2>
            <Button className="text-green-700 bg-white p-5 rounded-sm cursor-pointer transition-transform duration-100 transform hover:scale-115 hover:bg-green-50">
              GET PLAN
            </Button>
          </div>
        </div>
        <div className="rounded-lg bg-sky-700 shadow-2xl">
          <div className="flex flex-col justify-center items-center bg-sky-800 rounded-lg pt-5 pb-5 gap-1.5">
            <h4 className="text-xl font-bold text-white">Plus</h4>
            <h1 className="text-4xl font-bold text-white">&#8377;1000</h1>
            <h5 className="text-xl font-light text-white"> PER MONTH</h5>
          </div>
          <div className="flex flex-col justify-center items-center pt-5 gap-4 pb-8">
            <h2 className="text-white font-semibold">All Standard Features</h2>
            <h2 className="text-white font-semibold">Unlimited Categories</h2>
            <h2 className="text-white font-semibold">Receipt Scanning</h2>
            <h2 className="text-white font-semibold">
              AI Insights & Predictions
            </h2>
            <h2 className="text-white font-semibold">Priority Support</h2>
            <Button className="text-sky-700 bg-white p-5 rounded-sm cursor-pointer transition-transform duration-100 transform hover:scale-115 hover:bg-sky-50">
              GET PLAN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
