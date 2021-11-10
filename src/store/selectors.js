import { createSelector } from '@reduxjs/toolkit'

export const getStreets = (state) => state.streets;
export const getUserStreetID = (state) => state.userStreetID;
export const getBuildingsSelector = (state) => state.buildings;
export const getUserBuildingID = (state) => state.userBuildingID;
export const getFlatsSelector = (state) => state.flats;
export const getUserFlatID = (state) => state.userFlatID;
export const getClientsSelector = (state) => state.clients;
export const getUserStreet = createSelector(getStreets, getUserStreetID, (streets, userStreetID) => streets?.find(street => street.id === userStreetID));
export const getUserHouse = createSelector(getBuildingsSelector, getUserBuildingID, (buildings, userBuildingID) => buildings?.find(building => building.id === userBuildingID));
export const getUserFlat = createSelector(getFlatsSelector, getUserFlatID, (flats, userFlatID) => flats?.find(flat => flat.id === userFlatID));
export const getEditClient = (state) => state.editClient;
