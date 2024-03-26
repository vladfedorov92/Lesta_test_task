import React from "react";
import { changeFilterLevels } from "../slices/filterSlice";

const Level811 = (props: {
  changeFilter: (
    arg1: React.MouseEvent<HTMLDivElement>,
    arg2: Function,
  ) => void;
}) => {
  const addFilterLevel = (event: React.MouseEvent<HTMLDivElement>) => {
    props.changeFilter(event, changeFilterLevels);
  };
  return (
    <div className={"filterColumn"}>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterLevel}
          title={"7"}
        ></div>
        <div className={"filterOption"}>VII</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterLevel}
          title={"8"}
        ></div>
        <div className={"filterOption"}>VIII</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterLevel}
          title={"9"}
        ></div>
        <div className={"filterOption"}>IX</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterLevel}
          title={"10"}
        ></div>
        <div className={"filterOption"}>X</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterLevel}
          title={"11"}
        ></div>
        <div className={"filterOption"}>XI</div>
      </div>
    </div>
  );
};

export default Level811;
