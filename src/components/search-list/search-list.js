import SearchComponent from '../search/search-component';
import { useSelector, useDispatch } from 'react-redux';
import { getUserStreetID, getUserBuildingID, getStreets, getBuildingsSelector, getFlatsSelector} from '../../store/selectors';
import { getUserStreetIDAction, getUserBuildingIDAction, getUserFlatIDAction } from '../../store/action'
import { fetchBuildingsAction, fetchFlatsAction, fetchClients } from '../../store/api-actions';
import { useCallback, memo } from 'react';

export const SearchFields = {
  STREET: 'Улица',
  BUILDING: 'Дом',
  FLAT: 'Кв./офис',
}

function SearchList() {

  // Получаем список улиц из хранилица
  const streets = useSelector(getStreets);

  const dispatch = useDispatch();

  // При выборе улицы, сохраняем ID улицы в хранилище и отпавляем запрос на список домов
  const handleStreetSelect = useCallback((id) => {
    dispatch(getUserStreetIDAction(id));
    dispatch(fetchBuildingsAction(id));
  }, [dispatch])

  // При выборе дома, сохраняем ID дома в хранилище и отпавляем запрос на список квартир
  const handleBuildingSelect = useCallback((id) => {
    dispatch(getUserBuildingIDAction(id));
    dispatch(fetchFlatsAction(id));
  }, [dispatch])

  // При выборе квартиры, сохраняем ID квартиры в хранилище и отпавляем запрос на список клиентов
  const handleFlatSelect = useCallback((id) => {
    dispatch(getUserFlatIDAction(id));
    dispatch(fetchClients(id));
  }, [dispatch])

  // Получаем список домов и квартир из хранилища
  const buildings = useSelector(getBuildingsSelector);
  const flats = useSelector(getFlatsSelector);

  // Если улица и дом выбраны, то разблокируем соответствующие поля
  const isBuildingSelectDisabled = useSelector(getUserStreetID) === undefined;
  const isFlatSelectDisabled = useSelector(getUserBuildingID) === undefined;

  return (
    <div className="search-list">
      <SearchComponent type={SearchFields.STREET} data={streets} handleSelect={handleStreetSelect}/>
      <SearchComponent type={SearchFields.BUILDING} isDisabled={isBuildingSelectDisabled} data={buildings} handleSelect={handleBuildingSelect}/>
      <SearchComponent type={SearchFields.FLAT} isDisabled={isFlatSelectDisabled} data={flats} handleSelect={handleFlatSelect}/>
    </div>
  );
}

export default memo(SearchList);
