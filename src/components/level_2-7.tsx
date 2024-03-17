import React from 'react';
import {useAppDispatch} from "../hooks/hooks";
import {changeFilterLevels} from "../slices/filterSlice";


const Level_27 = () => {
    const dispatch = useAppDispatch();
    let addFilterLevel = (event: any) => {
        event.target.innerText ? event.target.innerText = "" : event.target.innerText = "✔";
        dispatch(changeFilterLevels(event.target.title));
        }

    return (
        <div className={"filterColumn"}>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterLevel} title={"2"}></div>
                <div className={"filterOption"}>II</div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterLevel} title={"3"}></div>
                <div className={"filterOption"}>III</div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterLevel} title={"4"}></div>
                <div className={"filterOption"}>IV</div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterLevel} title={"5"}></div>
                <div className={"filterOption"}>V</div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterLevel} title={"6"}></div>
                <div className={"filterOption"}>VI</div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterLevel} title={"7"}></div>
                <div className={"filterOption"}>VII</div>
            </div>
        </div>

    );
};

export default Level_27;