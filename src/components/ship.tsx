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
        setShowDescription(true);
        };
    const handleMouseLeave = () => {
        setShowDescription(false);
    };
    const handleMouseMove = (e: React.MouseEvent) => {
        if (e.clientX > 350 && e.clientY < 530) {
            if (e.clientX > 850 && e.clientX < 1100) {
                setPosition({x: e.clientX / 2.2, y: e.clientY * 0.5});
            }
            else if (e.clientX < 850) {
                setPosition({x: e.clientX + 20 , y: e.clientY - 250});
            }
            else if (e.clientX > 1100){
                setPosition({x: e.clientX / 1.7, y: e.clientY * 0.5})
            }
        } else if (e.clientY > 530) {
            if (e.clientX > 800) {
                setPosition({x: e.clientX / 2.2, y: e.clientY / 3});
            }
            else {
                setPosition({x: e.clientX + 20, y: e.clientY / 3});
            }

        } else {
            setPosition({x: e.clientX * 1.1, y: e.clientY * 0.5});
        }
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