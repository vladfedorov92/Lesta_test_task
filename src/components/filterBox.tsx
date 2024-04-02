import React from "react";
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
  const changeFilter = (value: number | string, action: ActionFunction) => {
    dispatch(action(value));
  };
  return (
    <div className={"filterTitleContainer"}>
      <form onSubmit={submitFilter} onReset={resetFilter}>
        <div className={"filterContainer"}>
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
