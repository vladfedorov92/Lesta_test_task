import React, { useState } from "react";
import FilterBox from "./filterBox";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { resetFilters } from "../slices/filterSlice";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type JustifyContent = "center" | "space-between";
const Header = () => {
  const [filter, setFilter] = useState(false);
  const dispatch = useAppDispatch();
  const shipsAmount = useAppSelector((state) => state.vehicle.length);
  const [flexDirection, setFlexDirection] = useState<FlexDirection>("column");
  const [justifyContent, setJustifyContent] =
    useState<JustifyContent>("space-between");
  const handleClick = () => {
    filter ? setFilter(false) : setFilter(true);
    if (filter) dispatch(resetFilters());
    setFlexDirection(filter ? "column" : "row");
    setJustifyContent(filter ? "space-between" : "center");
  };
  return (
    <header
      style={{ flexDirection: flexDirection, justifyContent: justifyContent }}
    >
      <h1 className={"mainTitle"}>Мир Кораблей</h1>
      {!filter && (
        <button className={"filterButton"} onClick={handleClick}>
          Фильтры отображения кораблей
        </button>
      )}
      {filter && <FilterBox resetFilter={handleClick} />}
      <h3>Всего кораблей: {shipsAmount}</h3>
    </header>
  );
};

export default Header;
