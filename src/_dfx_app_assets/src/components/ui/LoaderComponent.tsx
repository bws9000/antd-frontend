import React, { FC } from 'react';

import { Spin } from 'antd';

const LoaderComponent: FC = () => {

    return (

        <div className="loaderComponent">
            <div>
                <Spin size="large" />
            </div>
        </div>
        
    )
}
export default LoaderComponent;