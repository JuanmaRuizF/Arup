import React from "react";
import "../Styles/elementDetails.css";
import { IoWarning } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";

export default function ElementDetails(props) {
  var elementData = props.clickedElement;
  console.log(props.clickedElement);
  return (
    <>
      <div className="details-container">
        <div className="details-container__environmental-title">
          Environmental
        </div>
        <div
          className="details-container__close-button"
          onClick={() => {
            props.setClickedElement(null);
            props.setClickedRowNumber(null);
          }}
        >
          X
        </div>
        <div className="details-container__subject-element">
          {elementData.subject}
        </div>
        <div className="details-container__sent-msg">
          Sent to: {elementData.sentTo.name}
        </div>

        {elementData.status === "answered" ? (
          <div>
            <GiConfirmed className="details-container__answered-icon"></GiConfirmed>
          </div>
        ) : elementData.status === "closed" ? (
          <div>
            <GiConfirmed className="details-container__closed-icon"></GiConfirmed>
          </div>
        ) : (
          <div></div>
        )}

        {elementData.critical ? (
          <div>
            <IoWarning className="details-container__warning-icon"></IoWarning>
          </div>
        ) : (
          <div></div>
        )}
        <hr className="details-container__hr"></hr>
        <div className="details-container__title">Request</div>
        <div className="details-container__request-name">
          {elementData.sentTo.name} ({elementData.sentTo.company} )
        </div>
        <div className="details-container__date">{elementData.regDate}</div>
        <div className="details-container__message">{elementData.message}</div>

        <hr className="details-container__hr"></hr>

        <button className="details-container__answer-request">
          Answer request
        </button>
      </div>
    </>
  );
}
