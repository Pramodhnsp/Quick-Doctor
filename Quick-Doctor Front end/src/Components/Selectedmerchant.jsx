import { useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Selectedmerchant = () => {

    const NaviagteToCart = useNavigate();
    const [products, setProducts] = useState();
    const [selectedproduct, setSelectedproduct] = useState();
    // const [blobUrl, setBlobUrl] = useState(null);

    let merchant= useSelector((state)=>{return state.merchant})
    let dispatch = useDispatch();

    useEffect(()=>{
        fetch("http://localhost:7071/getallProducts" , {
            method:"GET",
            header:{"content-type" : "application/json"}
        }).then(res=>res.json())
        .then(data=>{setProducts(data)})
        .catch(err=>{console.log(err);})
    },[])

    if(products!= null)
    {
        var results = products.filter((spdt)=> spdt.mid === merchant.m_id)
        console.log(results);
    }
    
    const Buy = ()=>{

        if(selectedproduct!= null)
        {
            dispatch(
                {
                    type:"add_product",
                    payload : selectedproduct
                }
            )
           NaviagteToCart('/MerchantgCart')
        }    
}

    return ( 

        <div>
            <UserNavbar/>
            {/* <div className="p-header">
                <p>All Available Products from the Vendor {merchant.m_name} </p>
            </div> */}

            <div>
                { results && <div className="forms">
                    {results.map((plist)=> {

                        return(
                            <>
                                <div className='card'>
                                    <div id='top'>
                                       
                                        <img src={`data:;base64,${plist.product_pic}`}  />
                                    </div>
                                    <hr />

                                    <div id='middle'>
                                        <p> Product Name  : {plist.product_name} </p>
                                        <p> Product Price : {plist.product_price }</p>
                                        <p> Product Details : {plist.product_Desc}  </p>
                                        <p> Available quantity : {plist.product_qty}  </p>
                                        <p> UserRating : {plist.product_rating}/10 </p>
                                    </div>

                                    <div id='bottom'>
                                    <button onClick={()=>{Buy(setSelectedproduct(plist))}}>Buy now</button> 
                                    </div> 
                                
                                </div>
                               
                            </>
                        )

                    })}
                </div>}              
            </div>
        </div>
     );
}
 
export default Selectedmerchant;

