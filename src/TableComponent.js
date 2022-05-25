import React, { useState } from "react";
import { IoWarning } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import Data from "./Data/mockData.json";

export default function TableComponent(props) {
  // const [clickedRowNumber, setClickedRowNumber] = useState(null);

  const clickedRow = (row, element) => {
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
          {props.Data.map((element, key) => (
            <tr key={key} onClick={() => clickedRow(key, element)}>
              {props.clickedRowNumber === key ? (
                <td className="selectedRow">{element.num}</td>
              ) : (
                <td>{element.num}</td>
              )}
              <td>{element.discipline}</td>
              <td>{element.regDate}</td>
              <td>{element.sentTo.name}</td>
              <td>{element.subject}</td>

              {element.status === "answered" ? (
                <td>
                  <GiConfirmed className="answeredIcon"></GiConfirmed>
                </td>
              ) : element.status === "closed" ? (
                <td>
                  <GiConfirmed className="closedIcon"></GiConfirmed>
                </td>
              ) : (
                <td></td>
              )}

              {element.critical ? (
                <td>
                  <IoWarning className="warningIcon"></IoWarning>
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
