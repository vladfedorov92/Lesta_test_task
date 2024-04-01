import React from "react";
import Level_16 from "./level_1-6";
import Level811 from "./level_7-11";
import Nation16 from "./nation_1-6";
import Nation712 from "./nation_7-12";
import Nation13 from "./nation_13";
import ClassType from "./classType";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { addVehicles, filterVehicles } from "../slices/vehicleSlice";
import { Vehicle } from "../constants/constants";
import { PayloadAction } from "@reduxjs/toolkit";
import Levels from "./levels";
import Nations from "./nations";
import Types from "./types";

type ActionFunction = (arg: string | number) => PayloadAction<string | number>;

const FilterBox = (props: { resetFilter: () => void }) => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);
  const storedData = localStorage.getItem("myData");
  const submitFilter = (e: React.FormEvent) => {
    e.preventDefault();
    if (storedData) {
      const parsedData: Vehicle[] = JSON.parse(storedData);
      dispatch(addVehicles(parsedData));
    }
    if (filter.levels.length || filter.nations.length || filter.types.length)
      dispatch(filterVehicles(filter));
  };
  const resetFilter = () => {
    if (storedData) {
      const parsedData: Vehicle[] = JSON.parse(storedData);
      dispatch(addVehicles(parsedData));
    }
    props.resetFilter();
  };
  const changeFilter = (
    value: number | string,
    action: ActionFunction,
  ) => {
    dispatch(action(value));
  };
  return (
    <div className={"filterTitleContainer"}>
      {/*<div className={"filterTitle"}>*/}
      {/*  <h4>Уровень</h4>*/}
      {/*  <h4>Нация</h4>*/}
      {/*  <h4>Класс</h4>*/}
      {/*</div>*/}
      <form onSubmit={submitFilter} onReset={resetFilter}>
        <div className={"filterContainer"}>
          {/*<Level_16 changeFilter={changeFilter} />*/}
          {/*<Level811 changeFilter={changeFilter} />*/}
          {/*<Nation16 changeFilter={changeFilter} />*/}
          {/*<Nation712 changeFilter={changeFilter} />*/}
          {/*<Nation13 changeFilter={changeFilter} />*/}
          {/*<ClassType changeFilter={changeFilter} />*/}
          <Levels changeFilter={changeFilter} />
          <Nations changeFilter={changeFilter} />
          <Types changeFilter={changeFilter} />
          <div className={"filterColumn"}>
            <button className={"filterButtonApply"} type={"submit"}>
              Применить
            </button>
            <button className={"filterButtonReset"} type={"reset"}>
              Сбросить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterBox;
