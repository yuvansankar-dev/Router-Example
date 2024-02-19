import React from "react";
import Card from "./component/Card/Card";

const DataScience = ({ dataSet }) => {
  return (
    <>
      {dataSet.map((info, ind) => {
        if (info.course === "Data science") {
          return <Card info={info} key={ind} />;
        }
      })}
    </>
  );
};

export default DataScience;
