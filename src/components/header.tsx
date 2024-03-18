import React, {useState} from 'react';
import FilterBox from "./filterBox";
import {useAppDispatch} from "../hooks/hooks";
import {resetFilters} from "../slices/filterSlice";


const Header = () => {
    const [filter, setFilter] = useState(false);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        filter ? setFilter(false) : setFilter(true);
        if(filter) dispatch(resetFilters());
        }

    return (
        <header>
            <h1>Мир Кораблей</h1>
            <h2>Все корабли игры за все время существования</h2>
            {!filter && <button onClick={handleClick}>Фильтр</button>}
            {filter &&  (<FilterBox resetFilter={handleClick}/>)}
        </header>
    );
};

export default Header;