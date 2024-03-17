import React from 'react';
import {useAppDispatch} from "../hooks/hooks";
import {changeFilterLevels} from "../slices/filterSlice";

const Level811 = () => {
    const dispatch = useAppDispatch();
    let addFilterLevel = (event: any) => {
        event.target.innerText ? event.target.innerText = "" : event.target.innerText = "✔";
        dispatch(changeFilterLevels(event.target.title));
        }
    return (
        <div className={"filterColumn"}>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterLevel} title={"8"}></div>
                <div className={"filterOption"}>VIII</div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterLevel} title={"9"}></div>
                <div className={"filterOption"}>IX</div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterLevel} title={"10"}></div>
                <div className={"filterOption"}>X</div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterLevel} title={"11"}></div>
                <div className={"filterOption"}>XI</div>
            </div>
        </div>
    );
};

export default Level811;