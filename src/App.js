import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Table from "./TableComponent";
import FilterComponent from "./FilterComponent";
import ElementDetails from "./ElementDetails";
import { RiDownloadLine } from "react-icons/ri";
import DataValues from "./Data/mockData.json";

function App() {
  const [clickedRowNumber, setClickedRowNumber] = useState(null);
  const [clickedElement, setClickedElement] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const [Data, setData] = useState(DataValues);
  // const [immutableData, setImmutableData] = useState(DataValues);

  useEffect(() => {
    //Sort all the data by date (latest first)
    let sortedData = Data.sort(function (a, b) {
      if (a.regDate > b.regDate) {
        return -1;
      }
      if (a.regDate < b.regDate) {
        return 1;
      }
      return 0;
    });

    setData(sortedData);
    // setImmutableData(sortedData);
    setLoaded(true);
  }, [Data]);

  return (
    <div>
      {loaded ? (
        <div className="App">
          <Navbar />
          <div className="AppContainer">
            <div className="subnav-container">
              <div className="request-info">Request for information</div>
              <div className="buttons-right">
                <div className="download-icon">
                  <RiDownloadLine></RiDownloadLine>
                </div>
                <button className="add-request-button">Add request</button>
              </div>
            </div>

            <div className="appComponents">
              <div className="firstPart">
                <FilterComponent
                  Data={Data}
                  immutableData={DataValues}
                  setData={setData}
                ></FilterComponent>
              </div>
              {clickedRowNumber === null ? (
                <div className="largeTable">
                  <Table
                    clickedRowNumber={clickedRowNumber}
                    setClickedRowNumber={setClickedRowNumber}
                    setClickedElement={setClickedElement}
                    Data={Data}
                  ></Table>
                </div>
              ) : (
                <>
                  <div className="smallTable">
                    <Table
                      clickedRowNumber={clickedRowNumber}
                      setClickedRowNumber={setClickedRowNumber}
                      setClickedElement={setClickedElement}
                      Data={Data}
                    ></Table>
                  </div>
                  <div className="elementDetails">
                    <ElementDetails
                      clickedElement={clickedElement}
                      setClickedElement={setClickedElement}
                      setClickedRowNumber={setClickedRowNumber}
                    ></ElementDetails>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
