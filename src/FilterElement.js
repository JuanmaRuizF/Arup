import React, { useState } from "react";
import "./Filter.css";

export default function FilterElement(props) {
  var element = props.element;
  const [checked, setChecked] = useState(true);

  const handleClick = () => {
    if (checked) {
      setChecked(false);
      props.setFilteredElements([...props.filteredElements, element]);

      let tempFilteredData = props.immutableData;

      if (props.type === "critical") {
        element = element === "true";
        console.log(typeof element);
      }

      tempFilteredData = tempFilteredData.filter(
        (e) => e[props.type] !== element
      );

      //   console.log(tempFilteredData);
      props.setData(tempFilteredData);
    } else {
      setChecked(true);
    }
  };

  return (
    <>
      <div className="filterRow" onClick={handleClick}>
        <input
          type="checkbox"
          id={props.key}
          value={element}
          checked={checked}
          className="checkbox"
          onChange={handleClick}
        ></input>
        <label htmlFor={props.key} className="filterRowName">
          {element}
        </label>
        {/* {console.log(props.values)} */}
        <div className="filterRowValue">{props.values[element]}</div>
      </div>
    </>
  );
}

// immutableData={props.immutableData}
// setData={props.setData}
// filteredElements={filteredElements}
// setFilteredElements={setFilteredElements}
// type = "regDate";
