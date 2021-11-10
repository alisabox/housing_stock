import { Button } from 'antd';
import { memo, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getClientsSelector, getUserFlatID, getUserStreet, getUserHouse, getUserFlat } from '../../store/selectors';
import CardComponent from '../card/card';
import RegistrationForm from '../registration-form/registration-form';

function CardsList () {

  // Получаем список клиентов и информацию об адресе из хранилища
  const clients = useSelector(getClientsSelector);
  const selectedFlat = useSelector(getUserFlatID);
  const street = useSelector(getUserStreet);
  const house = useSelector(getUserHouse);
  const flat = useSelector(getUserFlat);

  const [activeForm, setActiveForm] = useState(false);

  // Хук для открытия / закрытия формы
  const handleFormStateChange = useCallback(() => {
    setActiveForm((prevState) => !prevState);
  }, []);

  return (
    <>
      <div className="cards-header">
        <p>Жильцы квартиры по адресу {street?.prefix.shortName}. {street?.name}, д. {house?.name}, кв. {flat?.name}</p>
        <Button type="primary" htmlType="button" onClick={handleFormStateChange}>Добавить жильца</Button>
      </div>
      <div className="cards-list">
        {
          clients?.length > 0
            ? clients.map((client) => <CardComponent key={client.id} client={client} selectedFlat={selectedFlat} handleClientEdit={handleFormStateChange} />)
            : <p>В этой квартире пока нет жильцов</p>
        }
      </div>
      <RegistrationForm isActive={activeForm} handleFormClose={handleFormStateChange} selectedFlat={selectedFlat} />
    </>
  )
}

export default memo(CardsList);