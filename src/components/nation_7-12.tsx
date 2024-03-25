import React from 'react';
import {useAppDispatch} from "../hooks/hooks";
import {commonwealth, europe, italy, netherlands, pan_america, pan_asia} from "../constants/constants";
import {changeFilterNations} from "../slices/filterSlice";

const Nation712 = () => {
    const dispatch = useAppDispatch();

    const filterVehicleByNation = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        target.innerText ? target.innerText="" : target.innerText="✔";
        dispatch(changeFilterNations(target.title));
    }

    return (
        <div className={"filterColumn"}>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"pan_asia"}></div>
                <div className={"filterOption"}><img className={"filterFlag"}
                                                     src={pan_asia}
                                                     alt="pan_asia" title={"Пан-Азия"}/></div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"italy"}></div>
                <div className={"filterOption"}><img className={"filterFlag"}
                                                     src={italy}
                                                     alt="italy" title={"Италия"}/></div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"commonwealth"}></div>
                <div className={"filterOption"}><img className={"filterFlag"}
                                                     src={commonwealth}
                                                     alt="commonwealth" title={"Содружество"}/></div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"pan_america"}></div>
                <div className={"filterOption"}><img className={"filterFlag"}
                                                     src={pan_america}
                                                     alt="pan_america" title={"Пан-Америка"}/></div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"europe"}></div>
                <div className={"filterOption"}><img className={"filterFlag"}
                                                     src={europe}
                                                     alt="europe" title={"Европа"}/></div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"netherlands"}></div>
                <div className={"filterOption"}><img className={"filterFlag"}
                                                     src={netherlands}
                                                     alt="netherlands" title={"Нидерланды"}/></div>
            </div>
        </div>
    );
};

export default Nation712;