import React from "react";
import Card from "./component/Card/Card";

const Career = ({ dataSet }) => {
  return (
    <>
      {dataSet.map((info, ind) => {
        if (info.course === "Career") {
          return <Card info={info} key={ind} />;
        }
      })}
    </>
  );
};

export default Career;
