import React from 'react';
import {useAppDispatch} from "../hooks/hooks";
import {france, germany, japan, uk, usa, ussr} from "../constants/constants";
import {changeFilterNations} from "../slices/filterSlice";

const Nation16 = () => {
    const dispatch = useAppDispatch();

    const filterVehicleByNation = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        target.innerText ? target.innerText="" : target.innerText="✔";
        dispatch(changeFilterNations(target.title));
        }

    return (
        <div className={"filterColumn"}>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"japan"}></div>
                <div className={"filterOption"}><img className={"filterFlag"} src={japan} alt="japan" title={"Япония"}/>
                </div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"usa"}></div>
                <div className={"filterOption"}><img className={"filterFlag"} src={usa} alt="usa" title={"США"}/></div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"ussr"}></div>
                <div className={"filterOption"}><img className={"filterFlag"} src={ussr} alt="ussr" title={"СССР"}/>
                </div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"germany"}></div>
                <div className={"filterOption"}><img className={"filterFlag"} src={germany} alt="germany"
                                                     title={"Германия"}/></div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"uk"}></div>
                <div className={"filterOption"}><img className={"filterFlag"} src={uk} alt="uk"
                                                     title={"Великобритания"}/></div>
            </div>
            <div className={"filterBox"}>
                <div className={"filterOptionBox"} onClick={filterVehicleByNation} title={"france"}></div>
                <div className={"filterOption"}><img className={"filterFlag"} src={france} alt="france"
                                                     title={"Франция"}/></div>
            </div>
        </div>
    );
};

export default Nation16;