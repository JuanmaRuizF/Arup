import React, { useState, useEffect } from "react";

import "./Styles/App.css";
import { RiDownloadLine } from "react-icons/ri";

import Navbar from "./Components/Navbar";
import Table from "./Components/TableComponent";
import FilterComponent from "./Components/FilterData/FilterComponent";
import ElementDetails from "./Components/ElementDetails";

import DataValues from "./Data/mockData.json";

function App() {
  const [clickedRowNumber, setClickedRowNumber] = useState(null); //used to visually display a row as selected when clicked by user
  const [clickedElement, setClickedElement] = useState(null); //store which item has been clicked, to display it in the details component
  const [loaded, setLoaded] = useState(false); //page only loads when the data has been sorted

  const [Data, setData] = useState(DataValues);

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
    setLoaded(true); //once data is sorted, display the app components
  }, [Data]);

  return (
    <div>
      {loaded ? (
        <div className="app">
          <Navbar />
          <div className="app-container">
            <div className="app-container__subnav-container">
              <div className="subnav-container__title">
                Request for information
              </div>
              <div className="subnav-container__buttons-right">
                <div className="subnav-container__buttons-right__download-button">
                  <RiDownloadLine></RiDownloadLine>
                </div>
                <button className="subnav-container__buttons-right__add-request-button">
                  Add request
                </button>
              </div>
            </div>

            <div className="app-components">
              <div className="app-components__filter-component">
                <FilterComponent
                  Data={Data}
                  immutableData={DataValues}
                  setData={setData}
                ></FilterComponent>
              </div>

              {clickedRowNumber === null ? (
                // renders the view for only the table -> the user has not clicked an element to view details
                <div className="app-components__table-component-large">
                  <Table
                    clickedRowNumber={clickedRowNumber}
                    setClickedRowNumber={setClickedRowNumber}
                    setClickedElement={setClickedElement}
                    Data={Data}
                  ></Table>
                </div>
              ) : (
                // an element has been clicked, so display a smaller table and the selected element details component
                <>
                  <div className="app-components__table-component-small">
                    <Table
                      clickedRowNumber={clickedRowNumber}
                      setClickedRowNumber={setClickedRowNumber}
                      setClickedElement={setClickedElement}
                      Data={Data}
                    ></Table>
                  </div>
                  <div className="app-components__table-component-details">
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
