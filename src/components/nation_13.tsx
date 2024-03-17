import React from 'react';
import {useAppDispatch} from "../hooks/hooks";
import {spain} from "../constants/constants";
import {changeFilterNations} from "../slices/filterSlice";

const Nation13 = () => {
    const dispatch = useAppDispatch();

    let filterVehicleByNation = (event: any) => {
        event.target.innerText ? event.target.innerText="" : event.target.innerText="✔";
        dispatch(changeFilterNations(event.target.title));
    }

    return (
        <div className={"filterColumn"}>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"spain"}></div>
                <div className={"filterOption"}><img className={"filterFlag"}
                                                     src={spain}
                                                     alt="spain" title={"Испания"}/></div>
            </div>
        </div>
    );
};

export default Nation13;