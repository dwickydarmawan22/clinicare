import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetClinicList } from "../../../services/ClinicList";
import { GetClinicDetail } from "../../../services/ClinicDetail";

export const getClinicListThunk = createAsyncThunk(
  "clinic/getClinicListThunk",
  async (data, { rejectWithValue }) => {
    console.log("🚀 ~ data:", data);
    try {
      const response = await GetClinicList(data);
      console.log("🚀 ~ response:", response);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getClinicDetailThunk = createAsyncThunk(
  "clinic/getClinicDetailThunk",
  async (data, { rejectWithValue }) => {
    console.log("🚀 ~ data:", data);
    try {
      const response = await GetClinicDetail(data);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
