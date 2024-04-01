import React from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { changeFilterLevels } from "../slices/filterSlice";

const Levels = (props: {
  changeFilter: (
    arg0: number,
    arg1: ActionCreatorWithPayload<number | string, "filter/changeFilterLevels">,
  ) => void;
}) => {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const addFilterLevel = (level: number) => {
    props.changeFilter(level, changeFilterLevels);
  };
  return (
    <div className={"filterColumn"}>
      <div className={"filterTitle"}>
        Уровень
        </div>
      {levels.map((level: number) => {
        const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
          const target = event.target as HTMLElement;
          target.innerText
            ? (target.innerText = "")
            : (target.innerText = "✔");
          addFilterLevel(level);
        };
        return (
          <div className={"filterBox"} key={`filter_level_${level}`}>
            <div
              className={"filterOptionBox"}
              onClick={onClick}
              // title={level.toString()}
            ></div>
            <div className={"filterOption"}>{level}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Levels;
