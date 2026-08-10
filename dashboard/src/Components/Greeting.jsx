 import React from "react";

export default function Greeting() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  const hours = currentDate.getHours();
  let greetingMessage;
    if (hours < 12) {
        greetingMessage = "Good Morning";
    } else if (hours < 18) {
        greetingMessage = "Good Afternoon";
    }
        else {      
        greetingMessage = "Good Evening";
    }
    return (
        <div className="greeting border-b-2 border-gray-300 mb-4 pb-4 rounded-lg bg-violet-950 text-white p-4 text-left">
            <h1 className=" text-3xl">{greetingMessage} , Our User</h1>
            <p className=" text-1xl ">{formattedDate}</p>
        </div>
    );
}   