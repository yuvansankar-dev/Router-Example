import React from "react";
import Card from "./component/Card/Card";

const FullStack = ({ dataSet }) => {
  return (
    <>
      {dataSet.map((info, ind) => {
        if (info.course === "Full stack") {
          return <Card info={info} key={ind} />;
        }
      })}
    </>
  );
};

export default FullStack;
