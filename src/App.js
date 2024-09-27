import { useState } from "react";
import Dashboard from "./components/dashboard";
import SlidePage from "./components/slidePage";
import "./styles/App.css";
import { TableDataContext } from "./contextapi/dataContext";
import { PageTranslateContext } from "./contextapi/dataContext";
import { dummydata } from "./common/dummyData/dummyData";

function App() {
  const [isTransitionActive, setIsTransitionActive] = useState(false);
  const [isModal, setIsmodal] = useState(false);
  const [tableData, setTableData] = useState(dummydata);

  const handleTransition = () => {
    setIsTransitionActive(!isTransitionActive);
  };

  const handleClose = () => {
    setIsmodal(false);
  };

  return (
    <>
      <TableDataContext.Provider
        value={{
          tableData,
          setTableData,
          setIsmodal,
          isModal,
          handleClose,
        }}
      >
        <PageTranslateContext.Provider
          value={{
            handleTransition,
            isTransitionActive,
            setIsTransitionActive,
          }}
        >
          <SlidePage>
            <div
              onClick={() => {
                if (isTransitionActive) {
                  setIsTransitionActive(false);
                }
              }}
              className="app"
            >
              <Dashboard />
            </div>
          </SlidePage>
        </PageTranslateContext.Provider>
      </TableDataContext.Provider>
    </>
  );
}

export default App;
