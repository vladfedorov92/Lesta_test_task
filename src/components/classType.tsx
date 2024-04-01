import React from "react";
import { changeFilterTypes } from "../slices/filterSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const ClassType = (props: {
  changeFilter: (
    arg1: React.MouseEvent<HTMLDivElement>,
    arg2: ActionCreatorWithPayload<string | number, "filter/changeFilterTypes">,
  ) => void;
}) => {
  const addFilterType = (event: React.MouseEvent<HTMLDivElement>) => {
    props.changeFilter(event, changeFilterTypes);
  };
  return (
    <div className={"filterColumn"}>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterType}
          title={"submarine"}
        ></div>
        <div className={"filterOption"}>Подводная лодка</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterType}
          title={"destroyer"}
        ></div>
        <div className={"filterOption"}>Эсминец</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterType}
          title={"cruiser"}
        ></div>
        <div className={"filterOption"}>Крейсер</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterType}
          title={"battleship"}
        ></div>
        <div className={"filterOption"}>Линкор</div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={addFilterType}
          title={"aircarrier"}
        ></div>
        <div className={"filterOption"}>Авианосец</div>
      </div>
    </div>
  );
};

export default ClassType;
