import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./dataTable.css";
import WithTableData from "../../hooks/data/withTableData";

import { MdDelete } from "react-icons/md";

const TaskTable = ({ tableData, setTableData }) => {
  // const handleDelete = (rowId) => {
  //   const filteredData = tableData.filter((row) => row.id !== rowId);
  //   console.log("filter data is", filteredData);
  //   console.log("function delete");
  // };

  const columns = [
    {
      name: "Task Name",
      selector: (row) => row.taskName,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      grow: 2, // Make the description column wider
    },
    {
      name: "Deadline",
      selector: (row) => row.deadline,
      sortable: true,
      width: "150px",
    },
    {
      name: "Task Status",
      selector: (row) => row.status,
      sortable: true,
      width: "150px",
    },
    {
      name: "Actions", // Column for the delete button
      cell: (row) => (
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            const localId = row.id;
            const filterData = tableData.filter((row) => row.id !== localId);
            setTableData(filterData);
          }}
          className="delete-btn"
        >
          <MdDelete />
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div className="task-table-container">
      <DataTable
        title="Task List"
        columns={columns}
        data={tableData}
        pagination
        highlightOnHover
        striped
        responsive
        defaultSortField="taskName"
      />
    </div>
  );
};

export default WithTableData(TaskTable);
