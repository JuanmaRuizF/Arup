import React, { useState } from "react";
import "./Filter.css";

export default function FilterElement(props) {
  var element = props.element;
  const [checked, setChecked] = useState(true);

  const handleClick = () => {
    if (checked) {
      setChecked(false); //change the icon on the checkbox
      props.setFilteredElements([...props.filteredElements, element]); //add element to list of filtered fields
      let tempFilteredData = props.Data;

      if (props.type === "critical") {
        //changing the dtype of the critical field to be a boolean to check it afterwards
        element = element === "true";
      }

      tempFilteredData = tempFilteredData.filter(
        //filtering the dataset excluding the field selected
        (e) => e[props.type] !== element
      );

      props.setData(tempFilteredData); //updating the data state to visualise values
    } else {
      setChecked(true);
      const index = props.filteredElements.indexOf(element);
      if (index > -1) {
        props.filteredElements.splice(index, 1); //as the checkbox has been clicked, we delete it from the filtered fields variable as we want to display it
      }
      let tempFilteredData = props.immutableData;

      //   for (let i = 0; i < props.filteredElements.length; i++) {
      //     tempFilteredData = tempFilteredData.filter(
      //       (e) =>
      //         e["discipline"] !== props.filteredElements[i] ||
      //         e["status"] !== props.filteredElements[i] ||
      //         e["critical"] !== props.filteredElements[i] ||
      //         e["regDate"] !== props.filteredElements[i]
      //     );
      //     console.log(tempFilteredData.length);
      //   }

      for (let i = 0; i < props.filteredElements.length; i++) {
        tempFilteredData = tempFilteredData.filter(
          (e) =>
            e["discipline"] !== props.filteredElements[i] ||
            e["status"] !== props.filteredElements[i] ||
            e["critical"] !== props.filteredElements[i] ||
            e["regDate"] !== props.filteredElements[i]
        );
        console.log(tempFilteredData.length);
      }

      props.setData(tempFilteredData);
    }
  };

  //   console.log(props.filteredElements);
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
