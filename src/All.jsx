import React from "react";
import Card from "./component/Card/Card";

const All = ({ dataSet }) => {
  return (
    <>
      {dataSet.map((info, ind) => (
        <Card info={info} key={ind} />
      ))}
    </>
  );
};

export default All;
