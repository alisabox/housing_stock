import { createReducer } from '@reduxjs/toolkit';
import { getStreets, getUserStreetIDAction, getBuildings, getUserBuildingIDAction, getFlats, getClients, getUserFlatIDAction, editClientAction } from './action';

export const initialState = {
  streets: [],
  userStreetID: undefined,
  buildings: [],
  userBuildingID: undefined,
  flats: [],
  userFlatID: undefined,
  clients: [],
  editClient: undefined,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getStreets, (state, action) => {
      state.streets = action.payload.streets;
      state.userBuildingID = initialState.userBuildingID;
      state.userFlatID = initialState.userFlatID;
    })
    .addCase(getUserStreetIDAction, (state, action) => {
      state.userStreetID = action.payload.id;
    })
    .addCase(getBuildings, (state, action) => {
      state.buildings = action.payload.buildings;
    })
    .addCase(getUserBuildingIDAction, (state, action) => {
      state.userBuildingID = action.payload.id;
      state.userFlatID = initialState.userFlatID;
    })
    .addCase(getFlats, (state, action) => {
      state.flats = action.payload.flats;
    })
    .addCase(getUserFlatIDAction, (state, action) => {
      state.userFlatID = action.payload.id;
    })
    .addCase(getClients, (state, action) => {
      state.clients = action.payload.clients;
    })
    .addCase(editClientAction, (state, action) => {
      state.editClient = action.payload.client;
    });
});
