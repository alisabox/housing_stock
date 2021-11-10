import { memo } from 'react';
import {  Card  } from 'antd';
import {  EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteClient } from '../../store/api-actions';
import { editClientAction } from '../../store/action';

function CardComponent ({client, selectedFlat, handleClientEdit}) {

  const dispatch = useDispatch();

  // Отправляем API-запрос на удаление клиента
  const handleClientDelete = () => {
    dispatch(deleteClient(client.bindId, selectedFlat));
  }

  // Отправляем API-запрос на удаление клиента и закрываем форму
  const onClientEdit = () =>  {
    dispatch(editClientAction(client));
    handleClientEdit();
  }

  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <DeleteOutlined key="delete" onClick={handleClientDelete}/>,
        <EditOutlined key="edit" onClick={onClientEdit}/>,
      ]}
      hoverable
    > 
      <div className="card-text">
        <h2>{client.name}</h2>
        {
          client.phone ? <div>Тел.: {client.phone}</div> : ''
        }
        {
          client.email ?  <div>Email: {client.email}</div> : ''
        }
      </div>
    </Card>
  )
}

export default memo(CardComponent);