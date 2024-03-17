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
    // const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
        setShowDescription(true);
        };
    const handleMouseLeave = () => {
        setShowDescription(false);
    };

    return (
        <div className={"box"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <div>
                <div className={"shipImages"} >
                    <div><img src={props.ship.icons.medium} alt=""/></div>
                    <div className={"flagImages"}><img className={"imageFlag"} src={props.ship.nation.icons.large} alt="flag"/></div>
                    <div className={"vehicleTitle"}>{props.ship.title}</div>
                </div>
            </div>
            {showDescription && (
                <Description
                    title={props.ship.title}
                    description={props.ship.description}
                    nationName={props.ship.nation.title}
                    typeName={props.ship.type.title}
                    level={props.ship.level}
                    vehicleImage={props.ship.icons.medium}
                    // position={position}
                />
            )}
        </div>
    );
};

Ship.propTypes = {
    ship: PropTypes.any,
    index: PropTypes.number,
};

export default Ship;