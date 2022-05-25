import React, { useEffect, useState } from "react";
import FilterElement from "./FilterElement";
import "./Filter.css";

export default function FilterComponent(props) {
  const [values, setValues] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [filteredElements, setFilteredElements] = useState([]);

  const countRepeatedElements = (object, valueToCheck) => {
    props.immutableData.map((element) => {
      if (object[element[valueToCheck]] === undefined) {
        object[element[valueToCheck]] = 0;
      }
    });
    // console.log(props.Data);

    props.Data.map((element) => {
      if (object[element[valueToCheck]] !== undefined) {
        object[element[valueToCheck]] += 1;
      }
    });

    // props.Data.map((element) => {
    //   if (object[element[valueToCheck]] === undefined) {
    //     object[element[valueToCheck]] = 1;
    //   } else {
    //     object[element[valueToCheck]] += 1;
    //   }
    // });

    // console.log(object);
    return object;
  };

  useEffect(() => {
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
  }, [props.Data]);

  // console.log(filteredElements);

  return (
    <div>
      {loaded ? (
        <>
          <div>Filters</div>
          <hr className="filterBar"></hr>
          <h4>Disciplines</h4>
          {Object.keys(values.discipline).map((element, key) => {
            return (
              <FilterElement
                Data={props.Data}
                element={element}
                key={key}
                values={values.discipline}
                immutableData={props.immutableData}
                setData={props.setData}
                filteredElements={filteredElements}
                setFilteredElements={setFilteredElements}
                type="discipline"
              ></FilterElement>
            );
          })}

          <hr className="filterBar"></hr>
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

          <hr className="filterBar"></hr>
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

          <hr className="filterBar"></hr>
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
