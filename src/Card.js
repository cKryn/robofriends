import React, { Fragment } from "react";

function Card({ name, email, id }) {
  return (
    <Fragment>
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
        <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
