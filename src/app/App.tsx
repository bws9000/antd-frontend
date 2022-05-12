import React from 'react';
import { Button, DatePicker } from 'antd';

const App = () => {

    console.log(JSON.stringify(process.env.ENV_MODE));

    return(
        <>
        <Button type="primary">HOWDY</Button>
        <DatePicker placeholder="select date" />
        </>
    )
}
export default App;