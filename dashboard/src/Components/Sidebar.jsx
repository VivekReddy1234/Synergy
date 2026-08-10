import React from "react";

export default function Sidebar() {
    return (
        <div className="sidebar p-4">

            <h2 className="text-2xl font-bold mb-4">Sidebar</h2>

            <ul className="space-y-2">
                <li>
                    <a href="/" className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">Home</a>
                </li>
                <li>        

                    <a href="/expenses" className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">Expenses</a>
                </li>
                <li>
                    <a href="/habits" className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">Habits</a>
                </li>
            </ul>                   
        </div>
    )
}   