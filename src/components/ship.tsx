import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Description from "./description";

const Ship = (props: {
    ship: {
        icons: { medium: string };
        nation: { icons: { large: string }; title: any; };
        title: any;
        description: any;
        level: number;
        type: { title: any; };
    };
}) => {
    const [showDescription, setShowDescription] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleMouseEnter = (e: React.MouseEvent) => {
        console.log("x= " + e.clientX);
        console.log("y= " + e.clientY);
        setShowDescription(true);
        // if (e.clientX > 500) {
        //     if (e.clientX > 500 && e.clientY > 500) {
        //         setPosition({x: e.clientX - 500, y: e.clientY - 500});
        //     } else {
        //         setPosition({x: e.clientX - 500, y: e.clientY - 200});
        //     }
        // } else if (e.clientY > 500) {
        //     setPosition({x: e.clientX + 100, y: e.clientY - 500});
        // } else setPosition({x: e.clientX + 100, y: e.clientY + 20});
    };
    const handleMouseLeave = () => {
        setShowDescription(false);
    };
    const handleMouseMove = (e: React.MouseEvent) => {
        if (e.clientX > 500) {
            if (e.clientX > 500 && e.clientY > 500) {
                setPosition({x: e.clientX - 500, y: e.clientY - 500});
            } else {
                setPosition({x: e.clientX - 500, y: e.clientY - 200});
            }
        } else if (e.clientY > 500) {
            setPosition({x: e.clientX + 100, y: e.clientY - 500});
        } else setPosition({x: e.clientX + 100, y: e.clientY + 20});
    }

    return (
        <div className={"box"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
            <div className={"shipImages"}>
                <div className={"vehicleBox"}>
                    <div className={"vehicleTitle"}>{props.ship.title}</div>
                    <img className={"imageFlag"} src={props.ship.nation.icons.large}
                         alt="flag"/>
                </div>
                <div><img src={props.ship.icons.medium} alt=""/></div>
            </div>
            {showDescription && (
                <Description
                    title={props.ship.title}
                    description={props.ship.description}
                    nationName={props.ship.nation.title}
                    typeName={props.ship.type.title}
                    level={props.ship.level}
                    vehicleImage={props.ship.icons.medium}
                    position={position}
                />
            )}
        </div>
    );
};

Ship.propTypes = {
    ship: PropTypes.object,
    index: PropTypes.number,
};

export default Ship;