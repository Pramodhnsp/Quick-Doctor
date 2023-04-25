import { useState, useEffect } from 'react';
import'../CssComponents/MerchantHome.css'
import MerchnatNavbar from './MerchnatNavbar';
import { useSelector } from 'react-redux';

const MerchantHome = () => {

   const [products, setProducts] = useState();

   let user = useSelector((state)=>{return state.user});


   useEffect(()=>{
      fetch("http://localhost:7071/getallProducts" , {
          method:"GET",
          header:{"content-type" : "application/json"}
      }).then(res=>res.json())
      .then(data=>{setProducts(data)})
      .catch(err=>{console.log(err);})

  },[products])

  if(products!=null)
  {
    var results = products.filter(newprd=>newprd.mid===user.id);
  }
   

 let deleteProduct=(pid)=>{

        let requestOptions = {
            method: 'DELETE',
            headers: {pid}
        };

    fetch("http://localhost:7071/DeleteProduct", requestOptions)
    .then(response => response.json())
   
    .catch(error => console.log('error', error));
    console.log("product deleted");
 }
 

 
    return ( 
        <>

        <MerchnatNavbar/>

        <div>
                { results && <div className="forms">

                    {results.map((plist)=>{

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
                                      <button  >Edit Item</button> 
                                    </div> 

                                    <div id='bottom'>
                                      <button onClick={()=>{deleteProduct(plist.pid)}} >Delete Item</button> 
                                    </div>
                                
                                </div>
                               
                            </>
                        )

                    })}
                    

                </div>}
               

            </div>
        </>
     );
}
 
export default MerchantHome;