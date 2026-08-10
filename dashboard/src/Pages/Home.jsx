import React from "react";
import Greeting from "../Components/Greeting";
import AllCards from "../Components/AllCards";
import TodayTasks from "../Components/TodayTasks";
import Reminders from "../Components/Reminders";

export default function Home() {
    return (
        <div className="home flex flex-row gap-4 p-4 w-full h-full">
         
           {/* <div className="SideBar">
              <p> This is the Side Bar</p>
            </div> */}


            <div className="main-content flex-1 w-full">
            
            {/* // Greetins in the top of the page with the current date and time. */}

                      <div className="greeting w-full">
                         <Greeting />
                        </div> 

{/* 
      After Greetings, there will be 4 cards in a grid layout. Each card will have a title and some content.
       The cards will be for the following categories: Expenses, Habits, Proteins, and Tasks. Each card will have a different background color and some padding to make them visually appealing. The grid layout will ensure that the cards are displayed in a neat and organized manner, making it easy for users to navigate through their personal dashboard.    */}

        <div className="">

              <AllCards/> 

            </div>



           {/* // Below the cards, there will be a section for notes. This section will allow users to jot down any important information or reminders they may have. The notes section will be designed to be simple and easy to use, with a text area for users to type in their notes and a save button to store them. This feature will help users keep track of their thoughts and ideas, making it easier for them to stay organized and productive. */}

       
        <div className="tasks and remainders flex flex-col md:flex-row gap-4 mt-4 w-full">

                <div className=" tasks border-t-2 border-gray-300 mt-4 pt-4 rounded-2xl bg-violet-950
                 text-white p-4 text-left w-full">

                    <p> This is the Tasks and Remainders section</p>
                        <TodayTasks/>
                </div>


                <div className="remainders border-t-2 border-gray-300 mt-4 pt-4 rounded-lg bg-violet-950
                 text-white p-4 text-left w-full "> 
                    <p> This is the Remainders section</p>

                         <Reminders/>
                </div>
          
        </div>


{/* 
           Now we have goals, habits and recent expenses section. This section will allow users to set and track their goals, habits, and recent expenses. The goals section will allow users to set specific goals and track their progress towards achieving them. The habits section will allow users to create and track their daily habits, helping them to build positive routines. The recent expenses section will allow users to keep track of their spending and manage their finances more effectively. This feature will help users stay motivated and focused on their personal development and financial goals. */}


            <div className="goals, habits and recent expenses flex flex-col md:flex-row gap-4 mt-4 w-full">
               
                   <div className="goals border-t-2 border-gray-300 mt-4 pt-4 rounded-lg bg-violet-950              text-white p-4 text-left w-full"> 
                     <p> This is the Goals section</p>
                     </div>   

                     <div className="habits border-t-2 border-gray-300 mt-4 pt-4 rounded-lg bg-violet-950              text-white p-4 text-left w-full">
                     <p> This is the Habits section</p>
                     </div>   

                     <div className="recent-expenses border-t-2 border-gray-300 mt-4 pt-4 rounded-lg bg-violet-950              text-white p-4 text-left w-full">
                     <p> This is the Recent Expenses section</p>  

                      </div>

            </div>



               {/* Here we will have daily journal to write down our thoughts and feelings. This section will provide users with a space to reflect on their day and express their emotions. The daily journal will allow users to write down their thoughts, feelings, and experiences, helping them to process their emotions and gain insights into their mental health. This feature will encourage users to practice self-reflection and mindfulness, promoting overall well-being and personal growth. */}


            <div className="daily-journal border-t-2 border-gray-300 mt-4 pt-4 rounded-lg bg-violet-950              text-white p-4 text-left w-full">
                     <p> This is the Daily Journal section</p>

                     
                     </div>




             </div>
    
         
         


        </div>
    );
}       