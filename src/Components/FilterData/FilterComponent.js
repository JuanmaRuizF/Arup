import React, { useEffect, useState } from "react";
import FilterElement from "./FilterElement";
import "../../Styles/Filter.css";

export default function FilterComponent(props) {
  const [values, setValues] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [filteredElements, setFilteredElements] = useState([]); //array used to filter the data with the unwanted fields

  const countRepeatedElements = (object, valueToCheck) => {
    props.immutableData.map((element) => {
      //mapping through the immutable data to obtain all possible elements for a filter type
      if (object[element[valueToCheck]] === undefined) {
        object[element[valueToCheck]] = 0;
      }
    });

    props.Data.map((element) => {
      //now mapping through the current data to check the number of each of the elements
      if (object[element[valueToCheck]] !== undefined) {
        object[element[valueToCheck]] += 1;
      }
    });

    return object;
  };

  useEffect(() => {
    //count the number of elements for each of the filter types and set it to the values hook to display the information
    let tempValues = { discipline: {}, status: {}, critical: {}, regDate: {} };

    tempValues.discipline = countRepeatedElements(
      tempValues.discipline,
      "discipline"
    );
    tempValues.status = countRepeatedElements(tempValues.status, "status");
    tempValues.critical = countRepeatedElements(
      tempValues.critical,
      "critical"
    );
    tempValues.regDate = countRepeatedElements(tempValues.regDate, "regDate");

    setValues(tempValues);
    setLoaded(true);
  }, [props.Data]); // loads every time the mapped table data has been altered -> have to do the recount

  return (
    <div>
      {loaded ? (
        <>
          <div>Filters</div>
          <hr className="filter-row"></hr>
          <h4>Disciplines</h4>
          {Object.keys(values.discipline).map((element, key) => {
            //mapping through each of the filter elements to display them
            return (
              <FilterElement
                Data={props.Data} // actual displayed table data
                element={element} //current element
                key={key}
                values={values.discipline} //discipline object values
                immutableData={props.immutableData} //immutable data to make the filtering
                setData={props.setData} // setData method to update the table
                filteredElements={filteredElements} //array of filtered/unwanted elements
                setFilteredElements={setFilteredElements} //method to modify the filtered array
                type="discipline" //type of element
              ></FilterElement>
            );
          })}

          <hr className="filter-row"></hr>
          <h4>Status</h4>
          {Object.keys(values.status).map((element, key) => {
            return (
              <FilterElement
                Data={props.Data}
                element={element}
                key={key}
                values={values.status}
                immutableData={props.immutableData}
                setData={props.setData}
                filteredElements={filteredElements}
                setFilteredElements={setFilteredElements}
                type="status"
              ></FilterElement>
            );
          })}

          <hr className="filter-row"></hr>
          <h4>Criticality</h4>
          {Object.keys(values.critical).map((element, key) => {
            return (
              <FilterElement
                Data={props.Data}
                element={element}
                key={key}
                values={values.critical}
                immutableData={props.immutableData}
                setData={props.setData}
                filteredElements={filteredElements}
                setFilteredElements={setFilteredElements}
                type="critical"
              ></FilterElement>
            );
          })}

          <hr className="filter-row"></hr>
          <h4>Registration Date</h4>
          {Object.keys(values.regDate).map((element, key) => {
            return (
              <FilterElement
                Data={props.Data}
                element={element}
                key={key}
                values={values.regDate}
                immutableData={props.immutableData}
                setData={props.setData}
                filteredElements={filteredElements}
                setFilteredElements={setFilteredElements}
                type="regDate"
              ></FilterElement>
            );
          })}
        </>
      ) : null}
    </div>
  );
}
