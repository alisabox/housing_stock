import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { postClient } from '../../store/api-actions';
import { getEditClient } from '../../store/selectors';
import { editClientAction } from '../../store/action';
import { useEffect, memo } from 'react';

const RegistrationForm = ({isActive, handleFormClose, selectedFlat}) => {
  const [form] = Form.useForm();

  // Если в хранилище есть информация о редактируемом клиенте, то открываем форму в режиме редактирования
  const editableClient = useSelector(getEditClient);
  const dispatch = useDispatch();

  // При отправке формы, отправляем через axios данные на сервер и закрываем / очищаем форму и информацию о редактируемом клиенте
  const onSubmit = (values) => {
    dispatch(postClient(values, selectedFlat));
    onReset();
  };

  const onReset = () => {
    form.resetFields();
    dispatch(editClientAction(undefined));
    handleFormClose();
  }

  // Если форма в режиме редактирования, то заполняем поля формы по данным из хранилища о редактируемом клиенте
  useEffect(() => {
    form.setFieldsValue({
      Name: editableClient?.name,
      Email: editableClient?.email,
      Phone: editableClient?.phone,
    });
  }, [editableClient, form])

  return (
    <Form
      className={`form ${isActive ? 'form--active' : ''}`}
      form={form}
      name="addClient"
      onFinish={onSubmit}
      scrollToFirstError
    >

      <Form.Item name="Phone" label="Телефон"
        rules={[
          {
            required: true,
            message: 'телефон',
          },
        ]}
      >
        <Input addonBefore="+7" />
      </Form.Item>

      <Form.Item
        name="Email"
        label="E-mail"
        rules={[
          {
            required: false,
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Name"
        label="Ф.И.О."
        rules={[
          {
            required: false,
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">{editableClient ? 'Обновить' : 'Добавить'}</Button>
        <Button htmlType="button" onClick={onReset}>Отменить</Button>
      </Form.Item>
    </Form>
  );
};

export default memo(RegistrationForm);