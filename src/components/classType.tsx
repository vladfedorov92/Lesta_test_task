import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { changeFilterTypes } from "../slices/filterSlice";

const ClassType = () => {
  const dispatch = useAppDispatch();
  const addFilterType = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    target.innerText ? (target.innerText = "") : (target.innerText = "✔");
    dispatch(changeFilterTypes(target.title));
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
