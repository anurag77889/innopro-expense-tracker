import React from "react";

function CreateBudget() {
  return (
    <div>
      <div className="bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 cursor-pointer border-dashed hover:shadow-md">
        <h2 className="text-3xl">+</h2>
        <h2>Create New Budget</h2>
      </div>
    </div>
  );
}

export default CreateBudget;
