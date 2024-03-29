import React from "react";

const CharactersList = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-5">
          <div className="card" style={{ minWidth: "200px" }}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-tittle">{item.name}</h5>
              <hr />
              <p>Species: {item.species}</p>
              <p>Location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="colum"></div>
    </div>
  );
};
export default CharactersList;
