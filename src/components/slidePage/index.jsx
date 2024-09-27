import React, { useContext } from "react";
import "./slidePage.css";
import TaskTable from "../dataTable";
import { PageTranslateContext } from "../../contextapi/dataContext";

const SlidePage = ({ children }) => {
  const { isTransitionActive } = useContext(PageTranslateContext);

  return (
    <div>
      {/* <button onClick={handleTransition}>Trigger Transition</button> */}
      <div
        className={`page-transition ${
          isTransitionActive ? "page-transition-active" : ""
        }`}
      >
        <div className="insidePage-content">
          <TaskTable />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SlidePage;
