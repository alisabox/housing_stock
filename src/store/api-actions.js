import { getStreets, getBuildings, getFlats, getClients } from './action';

export const fetchStreetsAction = () =>
  async (dispatch, _getState, api) => {
    api.get('/Request/streets')
      .then(({data}) => data.filter((item) => item.cityId === 1))
      .then((filteredData) => dispatch(getStreets(filteredData)))
      .catch((err) => console.log(err))
  };

export const fetchBuildingsAction = (id) =>
  async (dispatch, _getState, api) => {
    api.get(`/Request/houses/${id}`)
      .then(({data}) => dispatch(getBuildings(data)))
      .catch((err) => console.log(err))
  };

export const fetchFlatsAction = (id) =>
  async (dispatch, _getState, api) => {
    api.get(`/Request/house_flats/${id}`)
      .then(({data}) => dispatch(getFlats(data)))
      .catch((err) => console.log(err))
  };

export const fetchClients = (id) =>
  async (dispatch, _getState, api) => {
    api.get(`/HousingStock/clients?addressId=${id}`)
      .then(({data}) => dispatch(getClients(data)))
      .catch((err) => console.log(err))
  };

export const postClient = ({Name, Phone, Email}, selectedFlat) =>
  async (dispatch, _getState, api) => {
    api.post('/HousingStock/client', {Name, Phone, Email})
      .then(({status, data}) =>  {
        if (status === 200) {
          api.put('/HousingStock/bind_client', {AddressId: selectedFlat, ClientId: data.id})
            .then((response) =>  {
              if (response.status === 200)
                dispatch(fetchClients(selectedFlat));
            })
        }
      })
  };

export const deleteClient = (id, selectedFlat) =>
  async (dispatch, _getState, api) => {
    api.delete(`/HousingStock/bind_client/${id}`)
      .then((response) =>  {
        if (response.status === 200)
          dispatch(fetchClients(selectedFlat));
      })
  };