import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { changeFilterLevels } from "../slices/filterSlice";

const Level811 = () => {
  const dispatch = useAppDispatch();
  const addFilterLevel = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    target.innerText ? (target.innerText = "") : (target.innerText = "✔");
    dispatch(changeFilterLevels(target.title));
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
