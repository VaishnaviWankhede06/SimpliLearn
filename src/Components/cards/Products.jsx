import React, {Component} from 'react';
import JSON from './Cards.json';
import Cards from './Cards.jsx';

class Products extends Component{
    constructor(){
        super();
        this.state ={                    
                  
            Products: JSON              
        }
    }

    render(){
        return(
            <div className=''>
                
                <Cards prodlist={this.state.Products}/>
            </div>
        )
    }
}
export default Products;