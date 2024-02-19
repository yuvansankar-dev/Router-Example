import React from "react";
import Card from "./component/Card/Card";

const CyberSecurity = ({ dataSet }) => {
  return (
    <>
      {dataSet.map((info, ind) => {
        if (info.course === "Cyber security") {
          return <Card info={info} key={ind} />;
        }
      })}
    </>
  );
};

export default CyberSecurity;
