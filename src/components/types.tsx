import React from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { changeFilterTypes } from "../slices/filterSlice";

type Type = {
  title: string;
  name: string;
};
const Types = (props: {
  changeFilter: (
    arg0: string,
    arg1: ActionCreatorWithPayload<string | number, "filter/changeFilterTypes">,
  ) => void;
}) => {
  const types: Type[] = [
    {
      title: "submarine",
      name: "Подводная лодка",
    },
    {
      title: "destroyer",
      name: "Эсминец",
    },
    {
      title: "cruiser",
      name: "Крейсер",
    },
    {
      title: "battleship",
      name: "Линкор",
    },
    {
      title: "aircarrier",
      name: "Авианосец",
    },
  ];
  const addFilterLevel = (type: string) => {
    props.changeFilter(type, changeFilterTypes);
  };
  return (
    <div className={"filterColumn"}>
      <div className={"filterTitle"}>
        Класс
      </div>
      {types.map((type: Type) => {
        const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
          const target = event.target as HTMLElement;
          target.innerText
            ? (target.innerText = "")
            : (target.innerText = "✔");
          addFilterLevel(type.title);
        };
        return (
          <div className={"filterBox"} key={type.title}>
            <div
              className={"filterOptionBox"}
              onClick={onClick}
              // title={type.title}
            ></div>
            <div className={"filterOption"}>{type.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Types;
