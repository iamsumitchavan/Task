import React, { useContext } from "react";
import "./dashboard.css";
import task from "../../Assets/jpg/task.jpg";
import ModalPage from "../../common/modal/index";
import WithTableData from "../../hooks/data/withTableData";
import { MdCreateNewFolder } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { PageTranslateContext } from "../../contextapi/dataContext";
import { FaArrowRightLong } from "react-icons/fa6";

const Dashboard = ({ setIsmodal }) => {
  const { handleTransition } = useContext(PageTranslateContext);
  return (
    <div className="dash-container">
      <img className="task-img" src={task} alt="" />
      <div className="form-container">
        <h3>Create Your Task here...!</h3>
        <ModalPage />
        <div className="button-wrapper">
          <button className="create-task-btn" onClick={() => setIsmodal(true)}>
            <MdCreateNewFolder className="create-logo" />
            <h5 className="create-task">create task</h5>
          </button>
          <button
            className="create-task-btn show-btn"
            onClick={handleTransition}
          >
            <BiShow className="create-logo" />
            <h5 className="create-task">Task List</h5>
            <FaArrowRightLong className="create-logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithTableData(Dashboard);
