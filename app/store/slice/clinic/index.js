"use client";

import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getClinicDetailThunk, getClinicListThunk } from "../../actions/clinic";

const initialState = {
  clinicList: [],
  isLoadingClinicList: false,
  isLoadingClinicDetail: false,
  clinicDetail: {},
};

export const clinicSlice = createSlice({
  name: "clinic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClinicListThunk.pending, (state) => {
        state.isLoadingClinicList = true;
      })
      .addCase(getClinicListThunk.fulfilled, (state, action) => {
        state.isLoadingClinicList = false;
        state.clinicList = action.payload;
      })
      .addCase(getClinicListThunk.rejected, (state) => {
        state.isLoadingClinicList = false;
        state.clinicList = initialState.clinicList;
      })

      .addCase(getClinicDetailThunk.pending, (state) => {
        state.isLoadingClinicDetail = true;
      })
      .addCase(getClinicDetailThunk.fulfilled, (state, action) => {
        state.isLoadingClinicDetail = false;
        state.clinicDetail = action.payload;
      })
      .addCase(getClinicDetailThunk.rejected, (state) => {
        state.isLoadingClinicDetail = false;
        state.clinicDetail = initialState.clinicDetail;
      })

      .addCase(HYDRATE, (state, action) => ({
        ...state,
        ...action.payload.product,
      }));
  },
});

export default clinicSlice.reducer;
