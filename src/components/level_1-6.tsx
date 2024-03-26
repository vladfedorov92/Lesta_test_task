import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { changeFilterLevels } from "../slices/filterSlice";

const Level_16 = () => {
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
