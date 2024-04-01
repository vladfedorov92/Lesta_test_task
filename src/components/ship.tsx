import React, { useState } from "react";
import PropTypes from "prop-types";
import ShipTooltip from "./shipTooltip";
import { createPortal } from "react-dom";

const Ship = (props: {
  ship: {
    icons: { medium: string };
    nation: { icons: { large: string }; title: string };
    title: string;
    description: string;
    level: number;
    type: { title: string };
  };
}) => {
  const [showDescription, setShowDescription] = useState(false);
  // const [position, setPosition] = useState({x: "0", y: "0"});
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const tooltipWrapper = document.querySelector(".tooltip-wrapper");

  const handleMouseEnter = () => {
    setShowDescription(true);
  };
  const handleMouseLeave = () => {
    setShowDescription(false);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const changePositionX = screenWidth * 0.31;

    if (x < screenWidth / 2 && y < screenHeight / 2) {
      setPosition({ x: e.clientX + 10, y: e.clientY + 10 });
    } else if (x < screenWidth / 2 && y > screenHeight / 2) {
      setPosition({ x: e.clientX + 10, y: e.clientY - 180 });
    } else if (x > screenWidth / 2 && y < screenHeight / 2) {
      setPosition({ x: e.clientX - changePositionX, y: e.clientY + 10 });
    } else {
      setPosition({ x: e.clientX - changePositionX, y: e.clientY - 180 });
    }
  };
  return (
    <div
      className={"box"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className={"tooltip-wrapper"}></div>
      <div className={"shipImages"}>
        <div className={"vehicleBox"}>
          <div className={"vehicleTitle"}>{props.ship.title}</div>
          <img
            className={"imageFlag"}
            src={props.ship.nation.icons.large}
            alt="flag"
          />
        </div>
        <div>
          <img src={props.ship.icons.medium} alt="" />
        </div>
      </div>
      {/*{showDescription && (*/}
      {/*  <ShipTooltip*/}
      {/*    title={props.ship.title}*/}
      {/*    description={props.ship.description}*/}
      {/*    nationName={props.ship.nation.title}*/}
      {/*    typeName={props.ship.type.title}*/}
      {/*    level={props.ship.level}*/}
      {/*    vehicleImage={props.ship.icons.medium}*/}
      {/*    position={position}*/}
      {/*  />*/}
      {/*)}*/}

      {tooltipWrapper &&
        showDescription &&
        createPortal(
          <ShipTooltip
            title={props.ship.title}
            description={props.ship.description}
            nationName={props.ship.nation.title}
            typeName={props.ship.type.title}
            level={props.ship.level}
            vehicleImage={props.ship.icons.medium}
            position={position}
          />,
          tooltipWrapper,
        )}
    </div>
  );
};

Ship.propTypes = {
  ship: PropTypes.object,
  index: PropTypes.number,
};

export default Ship;
