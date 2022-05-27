import React from 'react';

import { Input } from 'antd';

const SearchComponent = () => {
    
    const { Search } = Input;
    
    const onSearch = (value: string) => console.log(value);

    return (
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 300 }} />
    )
}

export default SearchComponent;