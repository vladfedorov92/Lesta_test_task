import React from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { changeFilterNations } from "../slices/filterSlice";
import {
  commonwealth,
  europe,
  france,
  germany,
  italy,
  japan,
  netherlands,
  pan_america,
  pan_asia,
  spain,
  uk,
  usa,
  ussr,
} from "../constants/constants";

interface Nation {
  title: string;
  name: string;
  src: string;
}

const Nations = (props: {
  changeFilter: (
    arg0: string,
    arg1: ActionCreatorWithPayload<
      string | number,
      "filter/changeFilterNations"
    >,
  ) => void;
}) => {
  const nations: Nation[] = [
    {
      title: "Япония",
      name: "japan",
      src: japan,
    },
    {
      title: "США",
      name: "usa",
      src: usa,
    },
    {
      title: "СССР",
      name: "ussr",
      src: ussr,
    },
    {
      title: "Германия",
      name: "germany",
      src: germany,
    },
    {
      title: "Великобритания",
      name: "uk",
      src: uk,
    },
    {
      title: "Франция",
      name: "france",
      src: france,
    },
    {
      title: "Пан-Азия",
      name: "pan_asia",
      src: pan_asia,
    },
    {
      title: "Италия",
      name: "italy",
      src: italy,
    },
    {
      title: "Содружество",
      name: "commonwealth",
      src: commonwealth,
    },
    {
      title: "Пан-Америка",
      name: "pan_america",
      src: pan_america,
    },
    {
      title: "Европа",
      name: "europe",
      src: europe,
    },
    {
      title: "Нидерланды",
      name: "netherlands",
      src: netherlands,
    },
    {
      title: "Испания",
      name: "spain",
      src: spain,
    },
  ];
  const addFilterLevel = (nation: string) => {
    props.changeFilter(nation, changeFilterNations);
  };
  return (
    <div className={"filterColumn"}>
      <div className={"filterTitle"}>Нация</div>
      {nations.map((nation: Nation) => {
        const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
          const target = event.target as HTMLElement;
          target.innerText
            ? (target.innerText = "")
            : (target.innerText = "✔");
          addFilterLevel(nation.name);
        };
        return (
          <div className={"filterBox"} key={nation.name}>
            <div
              className={"filterOptionBox"}
              onClick={onClick}
              // title={nation.name}
            ></div>
            <div className={"filterOption"}>
              <img
                className={"filterFlag"}
                src={nation.src}
                alt={nation.name}
                title={nation.title}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Nations;
