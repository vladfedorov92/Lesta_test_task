import React, { useEffect } from "react";
import Ship from "./ship";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { addVehicles, fetchVehicles } from "../slices/vehicleSlice";
import { RootState } from "../store/store";
import { Vehicle } from "../constants/constants";

const ShipList: React.FC = () => {
  const storedData = localStorage.getItem("myData");
  const vehicles = useAppSelector((state: RootState) => state.vehicle);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchVehicles());
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch(addVehicles(parsedData));
    } else {
      fetchData()
        .then(() => {})
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);
  return (
    <div className={"container"}>
      {vehicles.map((item: Vehicle, index: number) => (
        <Ship key={index} index={index} ship={item} />
      ))}
    </div>
  );
};

export default ShipList;
