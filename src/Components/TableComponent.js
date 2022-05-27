import React from "react";
import { IoWarning } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import "../Styles/TableComponent.css";

export default function TableComponent(props) {
  const clickedRow = (row, element) => {
    //when a row has been clicked, set these values to rerender the App component with the changes selected
    props.setClickedRowNumber(row);
    props.setClickedElement(element);
  };

  return (
    <>
      <h4>Total number of elements: {props.Data.length}</h4>
      <table>
        <thead>
          <tr>
            <th>Num</th>
            <th>Discipline</th>
            <th>Reg Date</th>
            <th>Sent to</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Critical</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping through the data to display the fields in the table */}
          {props.Data.map((element, key) => (
            <tr key={key} onClick={() => clickedRow(key, element)}>
              {props.clickedRowNumber === key ? (
                <td className="selected-row">{element.num}</td>
              ) : (
                <td>{element.num}</td>
              )}
              <td>{element.discipline}</td>
              <td>{element.regDate}</td>
              <td>{element.sentTo.name}</td>
              <td>{element.subject}</td>

              {element.status === "answered" ? (
                <td>
                  <GiConfirmed className="answered-icon"></GiConfirmed>
                </td>
              ) : element.status === "closed" ? (
                <td>
                  <GiConfirmed className="closed-icon"></GiConfirmed>
                </td>
              ) : (
                <td></td>
              )}

              {element.critical ? (
                <td>
                  <IoWarning className="warning-icon"></IoWarning>
                </td>
              ) : (
                <td></td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
