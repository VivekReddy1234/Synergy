import React from "react";
import { BaseCard } from "./baseCard";

export default function ExpenseCard() {
  return (
    <div className="expense-card">
       <BaseCard value="$1,200" label="Total Expenses" sub="This month" />
    </div>
  );
}