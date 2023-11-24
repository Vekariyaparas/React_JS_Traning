import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card" style={props.style}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <hr />
        <div style={props.style}>
          <p>An item</p>
          <hr />
          <p>A second item</p>
          <hr />
          <p>A third item</p>
          <hr />
        </div>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
