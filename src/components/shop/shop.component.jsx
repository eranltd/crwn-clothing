import React from 'react';
import SHOP_DATA from './shop.data.js'



class ShopPage extends React.Component{

    constructor(props){
        super(props);


        this.state = {
            Collection: SHOP_DATA
        }
    }

    render(){
        return <div>SHOP PAGE</div>
    }

}

export default ShopPage;