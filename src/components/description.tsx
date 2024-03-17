import React from 'react';


interface DescriptionProps {
    title: string;
    description: string;
    nationName: string;
    typeName: string;
    level: number;
    vehicleImage: string;
    // position: { x: number, y: number };
    }

const Description: React.FC<DescriptionProps> = props => {

    return (
        <div className={"shipDescription"}
             // style={{position:"absolute", top: props.position.y, left: props.position.x}}
        >

            <div className={"shipDescriptionProps"}><img src={props.vehicleImage} alt="vehicle" className={"vehicleImageInDescription"}/></div>
            <br/>

            <div className={"shipDescriptionPropsTitle"}>{props.title}</div>

            <div className={"shipDescriptionPropsDescription"}>{props.description}</div>

            <div className={"shipDescriptionProps"}>Нация: {props.nationName}</div>

            <div className={"shipDescriptionProps"}>Тип: {props.typeName}</div>

            <div className={"shipDescriptionProps"}>Уровень: {props.level}</div>

        </div>
    );
};


export default Description;