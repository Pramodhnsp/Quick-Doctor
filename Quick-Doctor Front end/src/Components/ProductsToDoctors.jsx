import { useNavigate } from "react-router-dom";
import DoctorNavbar from "./DoctorNavbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProductsToDoctors = () => {

    const NaviagteToCart = useNavigate();
    const [products, setProducts] = useState();
    const [selectedproduct, setSelectedproduct] = useState();


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
    

    const Buy = ()=>{
    
            dispatch(
                {
                    type:"add_product",
                    payload : selectedproduct
                }
            )
            
            
            NaviagteToCart('/MerchantgCart')

        
}

    return ( 

        <div>
            <DoctorNavbar/>
            <div className="p-header">
                <p>All Available Products from the Vendor {merchant.m_name} </p>
            </div>

            <div>
                { products && <div className="forms">

                    {products.map((plist)=> {
                        

                        return(
                            <>
                                <div className='card'>
                                    <div id='top'>
                                        <img src={plist.product_pic} height={150} width={150}/>
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
                                    <button onClick={()=>{Buy(setSelectedproduct(plist))}}>View More details</button> 
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
 
export default ProductsToDoctors;