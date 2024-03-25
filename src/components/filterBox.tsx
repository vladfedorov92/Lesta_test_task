import React from 'react';
import Level_16 from "./level_1-6";
import Level811 from "./level_7-11";
import Nation16 from "./nation_1-6";
import Nation712 from "./nation_7-12";
import Nation13 from "./nation_13";
import ClassType from "./classType";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {addVehicles, filterVehicles} from "../slices/vehicleSlice";
import {Vehicle} from "../constants/constants";


const FilterBox = (props: { resetFilter: () => void; }) => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(state => state.filter);
    const storedData = localStorage.getItem('myData');

    const submitFilter = (e: React.FormEvent) => {
        e.preventDefault();
        if (storedData) {
            const parsedData: Vehicle[] = JSON.parse(storedData);
            dispatch(addVehicles(parsedData));
        }
        if (filter.levels.length || filter.nations.length || filter.types.length) dispatch(filterVehicles(filter));
    };
    const resetFilter = () => {
        if (storedData) {
            const parsedData: Vehicle[] = JSON.parse(storedData);
            dispatch(addVehicles(parsedData));
        }
        props.resetFilter();
    }

    return (
        <div className={"filterTitleContainer"}>
            <div className={"filterTitle"}>
                <h4>Уровень</h4>
                <h4>Нация</h4>
                <h4>Класс</h4>
            </div>
            <form onSubmit={submitFilter} onReset={resetFilter}>
                <div className={"filterContainer"}>
                    <Level_16/>
                    <Level811/>
                    <Nation16/>
                    <Nation712/>
                    <Nation13/>
                    <ClassType/>
                    <button className={"filterButtonApply"} type={"submit"}>Применить</button>
                    <button className={"filterButtonReset"} type={"reset"}>Сбросить все</button>
                </div>
            </form>
        </div>
    );
};

export default FilterBox;