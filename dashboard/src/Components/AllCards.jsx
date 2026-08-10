import React from "react";
import ExpenseCard from "../Cards/expenseCard";
import HabitCard from "../Cards/habitCard";
import ProteinCard from "../Cards/proteinCard";
import TaskCard from "../Cards/taskCard";


export default function AllCards() {
  return (
    <div className="all-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <ExpenseCard/>
          <HabitCard/>
          <ProteinCard/>
          <TaskCard/>

        </div>
    );  
}