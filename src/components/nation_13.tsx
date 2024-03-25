import React from 'react';
import {useAppDispatch} from "../hooks/hooks";
import {spain} from "../constants/constants";
import {changeFilterNations} from "../slices/filterSlice";

const Nation13 = () => {
    const dispatch = useAppDispatch();

    const filterVehicleByNation = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        target.innerText ? target.innerText="" : target.innerText="✔";
        dispatch(changeFilterNations(target.title));
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