import React, {useState} from 'react';
import FilterBox from "./filterBox";

const Header = () => {
    const [filter, setFilter] = useState(false);
    const handleClick = () => {
        filter ? setFilter(false) : setFilter(true);
    }

    return (
        <header>
            <h1>Мир Кораблей</h1>
            <h2>Все корабли игры за все время существования</h2>
            <button onClick={handleClick}>Фильтр</button>
            {filter &&  (<FilterBox/>)}
        </header>
    );
};

export default Header;