import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetClinicList } from "../../../services/ClinicList";
import { GetClinicDetail } from "../../../services/ClinicDetail";

export const getClinicListThunk = createAsyncThunk(
  "clinic/getClinicListThunk",
  async (data, { rejectWithValue }) => {
    try {
      const response = await GetClinicList(data);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getClinicDetailThunk = createAsyncThunk(
  "clinic/getClinicDetailThunk",
  async (data, { rejectWithValue }) => {
    try {
      const response = await GetClinicDetail(data);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
