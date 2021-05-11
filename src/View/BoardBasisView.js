import React, { useState } from "react";
import { YesSvg, NoSvg } from "../Assets/svg";
import "./index.css";

const ShowMoreSection = ({ boardData }) => {
  const [showMore, setshowMore] = useState(false);
  return (
    <>
      {showMore ? (
        <>
          <div id="boardDetails">
            {boardData.features.map((item) => (
              <div id="boardList">
                {[item.available ? <YesSvg /> : <NoSvg />, item.title]}
              </div>
            ))}
          </div>
          <div id="boardDescription">{boardData.description}</div>
        </>
      ) : null}
      <a onClick={() => setshowMore(!showMore)}>
        {showMore ? (
          <div id="showText"> {boardData.showLessText} </div>
        ) : (
          <div id="showText">{boardData.showMoreText}</div>
        )}
      </a>
    </>
  );
};

const MoreDetailsSection = ({ boardData }) => {
  const [moreDetails, setMoreDetails] = useState(false);
  return (
    <div>
      {moreDetails ? (
        <div id="moreDetailsPopUp">
          <div className="close">
            <span>
              <strong>{boardData.moreDetailsTitle}</strong>
            </span>
            <span onClick={() => setMoreDetails(!moreDetails)}>&times;</span>
          </div>
          {boardData.features.map((item) => (
            <div id="boardList">
              {[item.available ? <YesSvg /> : <NoSvg />, item.title]}
            </div>
          ))}
          <div id="boardDescription">{boardData.description}</div>
        </div>
      ) : null}
      <div id="moreDetailsText">
        <a id="moreText" href="#" onClick={() => setMoreDetails(!moreDetails)}>
          {boardData.moreDetailsText}
        </a>
      </div>
    </div>
  );
};

const PriceAndButtonView = ({ boardData, boardBasisSelected }) => (
  <div>
    <span id="mainPrice">
      <b>{boardData.totalPrice}</b>
    </span>
    <span id="pricePerPerson">{boardData.perPersonPrice}</span>
    <button onClick={() => boardBasisSelected(boardData.id)}>
      {boardData.buttonText}
    </button>
  </div>
);

const BoxComponent = ({ boardData, boardBasisSelected }) => (
  <div>
    <div id="border">
      <div id="boardTitle">
        <span>
          <b>{boardData.boardName}</b>
        </span>
        <span id="boardText">:{boardData.boardText}</span>
        <ShowMoreSection boardData={boardData} />
        <MoreDetailsSection boardData={boardData} />
      </div>
      <div id="pricePanel">
        <div id="price">
          {boardData.selected ? (
            boardData.includedText
          ) : (
            <PriceAndButtonView
              boardData={boardData}
              boardBasisSelected={boardBasisSelected}
            />
          )}
        </div>
      </div>
    </div>
  </div>
);

export const BoardView = ({ boardBasis, boardBasisSelected }) => (
  <div>
    <h2>YOUR BOARD</h2>
    <div id="box">
      {boardBasis.map((board) => (
        <BoxComponent
          boardBasisSelected={boardBasisSelected}
          boardData={board}
        />
      ))}
    </div>
  </div>
)
