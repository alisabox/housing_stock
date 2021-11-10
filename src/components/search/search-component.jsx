import { memo } from 'react';
import {  Select  } from 'antd';
const { Option } = Select;

function SearchComponent (props) {
  const {type, isDisabled, data, handleSelect } = props;

  return (
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder={type}
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
    disabled={isDisabled}
    onChange={handleSelect}
    defaultValue={''}
    >
      {
        data?.map((item) => <Option value={item.id} key={item.id}>{item.name}</Option>)
      }
    </Select>
  )
}

export default memo(SearchComponent);
