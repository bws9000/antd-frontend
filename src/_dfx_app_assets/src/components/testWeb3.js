import React, {useEffect} from 'react';

import web3 from '../lib/web3';

const testWeb3 = () => {

    useEffect(()=>{
        console.log(web3);
    })

    return(
        <div></div>
    )
    
}
export default testWeb3;
