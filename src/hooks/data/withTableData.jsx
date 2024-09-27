import React from "react";
import { TableDataContext } from "../../contextapi/dataContext";
import { useContext } from "react";

const WithTableData = (IncomingComponent) => {
  const OutgoingComponent = () => {
    const {
      tableData,
      onSubmit,
      setTableData,
      setIsmodal,
      isModal,
      handleClose,
    } = useContext(TableDataContext);
    return (
      <IncomingComponent
        setTableData={setTableData}
        tableData={tableData}
        setIsmodal={setIsmodal}
        isModal={isModal}
        handleClose={handleClose}
      />
    );
  };

  return OutgoingComponent;
};

export default WithTableData;
