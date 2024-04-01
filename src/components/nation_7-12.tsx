import React from "react";
import {
  commonwealth,
  europe,
  italy,
  netherlands,
  pan_america,
  pan_asia,
} from "../constants/constants";
import { changeFilterNations } from "../slices/filterSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const Nation712 = (props: {
  changeFilter: (
    arg1: React.MouseEvent<HTMLDivElement>,
    arg2: ActionCreatorWithPayload<
      string | number,
      "filter/changeFilterNations"
    >,
  ) => void;
}) => {
  const filterVehicleByNation = (event: React.MouseEvent<HTMLDivElement>) => {
    props.changeFilter(event, changeFilterNations);
  };
  return (
    <div className={"filterColumn"}>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={filterVehicleByNation}
          title={"pan_asia"}
        ></div>
        <div className={"filterOption"}>
          <img
            className={"filterFlag"}
            src={pan_asia}
            alt="pan_asia"
            title={"Пан-Азия"}
          />
        </div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={filterVehicleByNation}
          title={"italy"}
        ></div>
        <div className={"filterOption"}>
          <img
            className={"filterFlag"}
            src={italy}
            alt="italy"
            title={"Италия"}
          />
        </div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={filterVehicleByNation}
          title={"commonwealth"}
        ></div>
        <div className={"filterOption"}>
          <img
            className={"filterFlag"}
            src={commonwealth}
            alt="commonwealth"
            title={"Содружество"}
          />
        </div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={filterVehicleByNation}
          title={"pan_america"}
        ></div>
        <div className={"filterOption"}>
          <img
            className={"filterFlag"}
            src={pan_america}
            alt="pan_america"
            title={"Пан-Америка"}
          />
        </div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={filterVehicleByNation}
          title={"europe"}
        ></div>
        <div className={"filterOption"}>
          <img
            className={"filterFlag"}
            src={europe}
            alt="europe"
            title={"Европа"}
          />
        </div>
      </div>
      <div className={"filterBox"}>
        <div
          className={"filterOptionBox"}
          onClick={filterVehicleByNation}
          title={"netherlands"}
        ></div>
        <div className={"filterOption"}>
          <img
            className={"filterFlag"}
            src={netherlands}
            alt="netherlands"
            title={"Нидерланды"}
          />
        </div>
      </div>
    </div>
  );
};

export default Nation712;
