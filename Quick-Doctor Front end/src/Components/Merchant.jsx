import '../CssComponents/Doctor.css';
import UserNavbar from './UserNavbar';
import { useEffect, useState } from 'react';
import '../CssComponents/Merchant.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';





const Merchant = () => {

    const NavigateToSelected = useNavigate();
    const [merchantdetails, setMerchant] = useState();
    const [selectmerchant, setSelectmerchant] = useState();

    
    let dispatch = useDispatch();

    
 
    useEffect (()=>{

        fetch("http://localhost:7071/getAllmarchants" ,{
            method:"GET",
            headers: {"conetnt-type" : "application/json" }

        }).then(res=> res.json())
          .then(data=>{setMerchant(data)})
          .catch(err =>{console.log(err);})    

    },[])

    const Explore = ()=>{
        if(selectmerchant !== undefined )
        {
        
        dispatch(
            {
                type : "add_merchant",
                payload : selectmerchant
            }
        )
        
        NavigateToSelected("/Selectedmerchant")
        
        // console.log(selectmerchant);
       
        }
    }

    return ( 

    <>
      <UserNavbar/>

      {merchantdetails && <div className='forms'>

        { merchantdetails.map((mlist)=>{


            return(

                <div>
                    <div className='card'>
                        <div id='top'>
                            <img src="https://img.freepik.com/premium-vector/profile-flat-blue-simple-icon-with-long-shadowxa_159242-10066.jpg"  height={150} width={150}/>
                        </div>
                        <hr />

                        <div id='middle'>
                            <p> Name : {mlist.m_name} </p>
                            <p> Email : {mlist.m_email_id}  </p>
                            <p> phone : {mlist.m_ph_no} </p>
                            <p> Merchant id: {mlist.m_id}</p>
                            
                            
                        </div>

                    <div id='bottom'>
                  
                     <button onClick={()=>{Explore(setSelectmerchant(mlist))}}>Explore Products</button> 
                    </div>          
                 </div>

                </div>
            )
        })

            
        }

    </div>}

    </>
     );
}


 
export default Merchant;