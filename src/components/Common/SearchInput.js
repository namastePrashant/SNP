import React, { useState } from 'react';
import { Input, Form } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
import {FiSearch} from 'react-icons/fi'


const SearchInput = ({ searchService }) => {

    const [search, setSearch]=useState('')
    const onSearch = (values) => {
        let  key = values.search
        searchService(values.search,key)
    }
    const onChange = e => {
      
        setSearch(e.target.value)
   
      };

      const onSubmit=(e)=>{
        e.preventDefault();
        let  key = search
        searchService(search,key)
      }

   
    return (
        <Form
            onFinish={onSearch}
        >
            <Form.Item
                name="search">
                <Input className='search' placeholder="Search for artists, bands , tracks , podcasts..." allowClear onChange={onChange} prefix={<FiSearch style={{fontSize:"18px"}} onClick={onSubmit}/>} />
            </Form.Item>
        </Form>
    );
};

export default SearchInput;