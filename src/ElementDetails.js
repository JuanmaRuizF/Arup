import React from "react";
import "./elementDetails.css";
import { IoWarning } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";

export default function ElementDetails(props) {
  var elementData = props.clickedElement;
  console.log(props.clickedElement);
  return (
    <>
      <div className="detailsContainer">
        <div className="environmentalTitle">Environmental</div>
        <div
          className="closeButton"
          onClick={() => {
            props.setClickedElement(null);
            props.setClickedRowNumber(null);
          }}
        >
          X
        </div>
        <div className="subjectElement">{elementData.subject}</div>
        <div className="sentMsg">Sent to: {elementData.sentTo.name}</div>

        {elementData.status === "answered" ? (
          <div>
            <GiConfirmed className="answeredIcon"></GiConfirmed>
          </div>
        ) : elementData.status === "closed" ? (
          <div>
            <GiConfirmed className="closedIcon"></GiConfirmed>
          </div>
        ) : (
          <div></div>
        )}

        {elementData.critical ? (
          <div>
            <IoWarning className="warningIcon"></IoWarning>
          </div>
        ) : (
          <div></div>
        )}
        <hr className="detailsHR"></hr>
        <div className="requestTitle">Request</div>
        <div className="requestName">
          {elementData.sentTo.name} ({elementData.sentTo.company} )
        </div>
        <div className="date">{elementData.regDate}</div>
        <div className="detailsMessage">{elementData.message}</div>

        <hr className="detailsHR"></hr>

        <button className="answer-request-button">Answer request</button>
      </div>
    </>
  );
}
