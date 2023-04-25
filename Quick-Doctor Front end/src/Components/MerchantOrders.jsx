import { useEffect, useState } from "react";
import MerchnatNavbar from "./MerchnatNavbar";
import { useSelector } from "react-redux";


const MerchantOrders = () => {

    let [orders, setOrders]=useState();

   let user= useSelector((state)=>{return state.user})

    useEffect(()=>{

        fetch("http://localhost:7071/GetItems",{
            method:"GET",
            headers:{"content-type":"application/json"},
        
        }).then(res=>res.json())
        .then(data=>{setOrders(data)})
        .catch(err=>console.log(err))

    },[])


    if(orders != null)
    {
        var userOrders = orders.filter((uorder)=>uorder.mid===user.id)
    }


    return ( 
        <>
        <MerchnatNavbar/>
        {userOrders && <div className='forms'>

            {userOrders.map((cart)=>{
                return(
                    <>
                            <div className='card'>
                                <div id='top'>
                                <img src=""  height={150} width={150}/>
                                </div>

                                <hr />

                                <div id='middle'>
                                    <p>Item Name :{cart.product_Name}</p>
                                    <p>Item Quantity :{cart.quantity}</p>
                                    <p>Item Price :{cart.product_price} Rupees</p>
                                    <p>Shipping Address :{cart.b_address}</p>
                                    <p>Seller Name :{cart.m_name}</p>                   
                                </div>

                                <div id='bottom'>
                                    <button >Cancel Order</button> 
                                </div>          
                            </div>
                    

                    </>
                )
            })

            }
    </div>}

    <div>
        <h1>No Orders placed yet</h1>
    </div>


    </>
     );
}
 
export default MerchantOrders;