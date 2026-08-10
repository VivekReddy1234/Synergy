import React from "react";

export default function TodayTasks() {
  return (
    <div className="today-tasks">
         <h2 className="text-2xl font-bold mb-4">Today's Tasks</h2>
            <ul className="list-disc list-inside text-gray-300">
                <li>Complete the project report</li>
                <li>Attend team meeting at 3 PM</li>
                <li>Review code for the new feature</li>
                <li>Respond to client emails</li>   
            </ul>
    </div>
  );
}   