import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import executeGraphqlQuery from "../schema/requests";
import { FilterPayload, GET_VEHICLES, Vehicle } from "../constants/constants";

const initialState: Vehicle[] = [];
export const fetchVehicles = createAsyncThunk<
  Vehicle[],
  void,
  { state: RootState }
>("vehicle/fetchVehicles", async () => {
  try {
    const data = await executeGraphqlQuery<{ vehicles: Vehicle[] }>(
      GET_VEHICLES,
    );
    localStorage.setItem("myData", JSON.stringify(data.vehicles));
    console.log(data.vehicles);
    return data.vehicles;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw new Error("Failed to fetch data from GraphQL API");
  }
});

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    addVehicles: (state, action: PayloadAction<Vehicle[]>) => {
      state.splice(0, state.length, ...action.payload);
    },
    filterVehicles: (state, action: PayloadAction<FilterPayload>) => {
      const { levels, nations, types } = action.payload;
      state = state.filter((elem) => {
        const isLevelMatch = levels.length === 0 || levels.includes(elem.level);
        const isNationMatch =
          nations.length === 0 || nations.includes(elem.nation.name);
        const isTypeMatch =
          types.length === 0 || types.includes(elem.type.name);

        return isLevelMatch && isNationMatch && isTypeMatch;
      });
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchVehicles.fulfilled,
      (state, action: PayloadAction<Vehicle[]>) => {
        state.splice(0, state.length, ...action.payload);
      },
    );
  },
});
export const { addVehicles, filterVehicles } = vehicleSlice.actions;
export default vehicleSlice.reducer;
