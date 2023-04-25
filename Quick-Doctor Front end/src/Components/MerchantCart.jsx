import { useDispatch, useSelector } from "react-redux";
import UserNavbar from "./UserNavbar";
import { Navigate, useNavigate } from "react-router-dom";
import'../CssComponents/MerchantCart.css';
import { useState } from "react";

const MerchantgCart = () => {

    let [quantity, setQuantity] = useState();

    let Navigate = useNavigate();
    let product = useSelector((state)=>{return(state.product)});
    let dispatch = useDispatch()

   
const Buynow = ()=>{

    if(quantity === undefined)
    {
        alert("please choose number of items")
    }
    else{

        product["quantity"] = quantity;

        dispatch(
            {
                type:"add_product",
                payload:product
            }
        )
        Navigate('/Payment')
    }

    
}

    return ( 

        <>
        <UserNavbar/>

        <div className='forms'>

                <div>
                    <div className='card'>
                        <div id='top'>
                          <img src=""  height={150} width={150}/>
                        </div>

                        <hr />

                        <div id='middle'>
                            <p> Product Name : {product.product_name} </p>
                            <p> Product Price : {product.product_price}  </p>
                            <p> Product Description : {product.product_Desc} </p>                    
                        </div>

                        <div id="qnty">
                            <label>Quantity : <input type="number" min={0} max={5} value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} required /> </label>
                        </div>

                        <div id='bottom'>
                            <button onClick={Buynow} >Buy now</button> 
                        </div>          
                    </div>

                </div>
        </div>

        </>
     );
}
 
export default MerchantgCart;