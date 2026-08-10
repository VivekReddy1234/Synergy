import { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import React from 'react';

export default function ExpensePage() {
  const [active, setActive] = useState('Monthly');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const years = Array.from({ length: 10 }, (_, i) => 2020 + i);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleSelect = (year, monthIndex) => {
    setDate(new Date(year, monthIndex));
    setOpen(false);
  };

  const monthLabel = date.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  const [openDate, setOpenDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div className=" w-full">
      {/* 
             // This is the Expense Page. It will have a form to add new expenses and a list of recent expenses. The form will have fields for the expense name, amount, category, and date. The list of recent expenses will display the expense name, amount, category, and date in a table format. Users will be able to edit or delete expenses from the list. This page will help users keep track of their spending and manage their finances more effectively.

             Expenses (heading )       add new expense    view expense  */}

      <div className=" w-full flex flex-row">
        <h1 className="text-2xl font-bold mb-4 text-white">Expenses</h1>

        <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Add New Expense
        </button>

        <button className="ml-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
          View Expenses
        </button>
      </div>

      {/* 
           Here you have date select range   */}

      <div className="flex items-center justify-between bg-[#0f172a] p-3 rounded-xl text-white relative">
        {/* LEFT */}
        <span className="flex gap-3">
          {/* Month Selector */}
          <span className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-[#1e293b] px-4 py-2 rounded-lg"
            >
              {monthLabel}
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute mt-2 bg-[#1e293b] p-3 rounded-lg z-20 w-64">
                {/* Years */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {years.map((y) => (
                    <button
                      key={y}
                      onClick={() => setDate(new Date(y, date.getMonth()))}
                      className="px-2 py-1 text-sm bg-[#334155] rounded"
                    >
                      {y}
                    </button>
                  ))}
                </div>

                {/* Months */}
                <div className="grid grid-cols-3 gap-2">
                  {months.map((m, i) => (
                    <button
                      key={m}
                      onClick={() => handleSelect(date.getFullYear(), i)}
                      className="px-2 py-1 text-sm bg-[#334155] rounded"
                    >
                      {m.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </span>

          {/* Date Range */}
          <span className="relative">
            {/* <span
              onClick={() => setOpenDate(!openDate)}
              className="flex items-center gap-2 bg-[#1e293b] px-4 py-2 rounded-lg cursor-pointer"
            > */}
            {/* <CalendarDays size={18} />
              <span>{selectedDate || 'Select Date'}</span> */}
            {/* </span> */}

            <input
              type="date"
              className="absolute bg-[#1e293b] text-white p-2 rounded-lg z-20"
              onChange={(e) => {
                setSelectedDate(e.target.value);
              }}
            />
          </span>
        </span>

        {/* RIGHT */}
        <span className="flex bg-[#1e293b] rounded-lg p-1">
          {['Daily', 'Weekly', 'Monthly'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-1 rounded-md ${
                active === tab ? 'bg-purple-600 text-white' : 'text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </span>
      </div>
    </div>
  );
}
