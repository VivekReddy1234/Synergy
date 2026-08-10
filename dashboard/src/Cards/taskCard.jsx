import React from "react";
import { BaseCard } from "./baseCard";

export default function TaskCard() {
       return(
                <div className="task-card">

                <BaseCard value="0/0" label="Tasks Completed" sub="Today" />

                </div>
       )
};