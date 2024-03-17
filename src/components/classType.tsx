import React from 'react';
import {useAppDispatch} from "../hooks/hooks";
import {changeFilterTypes} from "../slices/filterSlice";

const ClassType = () => {
    const dispatch = useAppDispatch();
    let addFilterType = (event: any) => {
        event.target.innerText ? event.target.innerText = "" : event.target.innerText = "✔";
        dispatch(changeFilterTypes(event.target.title));
    }
    return (
        <div className={"filterColumn"}>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterType} title={"submarine"}></div>
                <div className={"filterOption"}>Подводная лодка</div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterType} title={"destroyer"}></div>
                <div className={"filterOption"}>Эсминец</div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterType} title={"cruiser"}></div>
                <div className={"filterOption"}>Крейсер</div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterType} title={"battleship"}></div>
                <div className={"filterOption"}>Линкор</div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={addFilterType} title={"aircarrier"}></div>
                <div className={"filterOption"}>Авианосец</div>
            </div>
        </div>
    );
};

export default ClassType;