import React from "react";
import { changeFilterLevels } from "../slices/filterSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const Level_16 = (props: {
  changeFilter: (
    arg1: React.MouseEvent<HTMLDivElement>,
    arg2: ActionCreatorWithPayload<
      string | number,
      "filter/changeFilterLevels"
    >,
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
          title={"1"}
        ></div>
        <div className={"filterOption"}>I</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterLevel}
          title={"2"}
        ></div>
        <div className={"filterOption"}>II</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterLevel}
          title={"3"}
        ></div>
        <div className={"filterOption"}>III</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterLevel}
          title={"4"}
        ></div>
        <div className={"filterOption"}>IV</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterLevel}
          title={"5"}
        ></div>
        <div className={"filterOption"}>V</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterLevel}
          title={"6"}
        ></div>
        <div className={"filterOption"}>VI</div>
      </div>
    </div>
  );
};

export default Level_16;
