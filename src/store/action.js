import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  GetStreets: 'GetStreetAction',
  GetUserStreetID: 'GetUserStreetIDAction',
  GetBuildings: 'GetBuildings',
  GetUserBuildingID:  'GetUserBuildingID',
  GetFlats: 'GetFlats',
  GetClients: 'GetClients',
  PostClient: 'PostClient',
  GetUserFlatIDAction: 'GetUserFlatIDAction',
  DeleteClient: 'DeleteClient',
  EditClient: 'EditClient',
}

export const getStreets = createAction(
  ActionType.GetStreets,
  (streets) => ({
    payload: {
      streets,
    },
  }),
);

export const getUserStreetIDAction = createAction(
  ActionType.GetUserStreetID,
  (id) => ({
    payload: {
      id,
    },
  }),
);

export const getBuildings = createAction(
  ActionType.GetBuildings,
  (buildings) => ({
    payload: {
      buildings,
    },
  }),
);

export const getUserBuildingIDAction = createAction(
  ActionType.GetUserBuildingID,
  (id) => ({
    payload: {
      id,
    },
  }),
);

export const getFlats = createAction(
  ActionType.GetFlats,
  (flats) => ({
    payload: {
      flats,
    },
  }),
);

export const getUserFlatIDAction = createAction(
  ActionType.GetUserFlatIDAction,
  (id) => ({
    payload: {
      id,
    },
  }),
);

export const postClient = createAction(
  ActionType.PostClient,
  (client) => ({
    payload: {
      client,
    },
  }),
);

export const getClients = createAction(
  ActionType.GetClients,
  (clients) => ({
    payload: {
      clients,
    },
  }),
);


export const editClientAction = createAction(
  ActionType.EditClient,
  (client) => ({
    payload: {
      client,
    },
  }),
);

export const deleteClient = createAction(ActionType.DeleteClient);

