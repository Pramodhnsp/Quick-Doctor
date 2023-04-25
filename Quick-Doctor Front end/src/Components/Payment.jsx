import React,{useState} from 'react'
import '../CssComponents/Payment.css'
import UserNavbar from './UserNavbar'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Payment = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAdress] = useState();
    const [city, setCity] = useState();
    const [pincode, setPincode] = useState();
    const [cardnumber, setcardnumber] = useState();
    const [month, setMonth] = useState();
    const [cvv, setcvv] = useState();
    const [year, setyear] = useState();

    let navigate = useNavigate();

    let product = useSelector((state)=>{return(state.product)});
    let user = useSelector((state)=>{return(state.user)});
    let merchant = useSelector((state)=>{return(state.merchant)})

    let u_user_name =user.username;
    let u_id = user.id;
    let quantity = product.quantity;
    let product_Name=product.product_name;
    let product_price=product.product_price;
    let pid=product.pid;
    let mid=merchant.m_id;
    let m_name=merchant.m_name;
    let b_address=address;
   
    let total = product.product_price*product.quantity
      

    const handleSubmit = (e)=>{
        e.preventDefault();
          

       let items={u_user_name,u_id, quantity, product_Name, product_price , pid, mid, m_name , b_address}  
       
        

            fetch("http://localhost:7071/AddToCart" , {
            method : "POST",
            headers : {"content-type":'application/json', "Accept":'application/json'},
            body: JSON.stringify(items)

           })
        .then(res=> res.json())
        .then(data=> data)
        .catch(error=> console.log(error))
        navigate('/UserCart')


    }

  return (
    <div>
        <UserNavbar/>
        <div className="payment">
        <section>
        <div className="paymentcontainer">
            <div className="paymentleft">
                <div className='header'>
                    <h3>Billing Address</h3>
                </div>
                
                <form >
                    Full Name:
                    <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}} required />
                    Email:
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                    Address
                    <input type="text" value={address}  onChange={(e)=>{setAdress(e.target.value)}} required />
                    City:
                    <input type="text" value={city}  onChange={(e)=>{setCity(e.target.value)}} required />

                    <div id='zip'>
                        <label >State :  
                            <select >
                                <option value="">Select</option>
                                <option value="">Andhra Pradesh</option>
                                <option value="">Hyderabad</option>
                                <option value="">Karnataka</option>
                                <option value="">Maharashtra</option>
                                <option value="">Madhya Pradesh</option>
                                <option value="">Kerala</option>
                                <option value="">Chennai</option>
                                <option value="">Gujarath</option>
                                <option value="">Punjab</option>
                                <option value="">Orrisa</option>
                                <option value="">WestBengal</option>
                                <option value="">Jammu&Kashmir</option>
                            </select>
                        </label>
                        
                        <label>PinCode:<input type="number" value={pincode} onChange={(e)=>{setPincode(e.target.value)}} required /> </label>   
                    </div>

                    <div className='total'>
                        <p>Order Total =  {total} rupees </p>
                    </div>
                </form>
            </div>
            
            <div className="paymentright">
                <div className='header'>
                    <h3>Payment</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="cards">
                        Accepted Cards:
                        <img src="https://logolook.net/wp-content/uploads/2021/07/Mastercard-Logo-2016.png" alt="" width={50} height={50} />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGr9AcLuUqACywyLswCOwQDMMCFM3_cs4nQ&usqp=CAU" alt="logo" width={50} height={50}   />
                    </div>
                    <br />
                    Credit Card Number
                    <input type="text" value={cardnumber} placeholder='******' onChange={(e)=>{setcardnumber(e.target.value)}} required />
                    Expire Moth 
                    <input type="text" value={month} placeholder='Enter month' onChange={(e)=>{setMonth(e.target.value)}} required />
                    <div id='zip'>
                        <label >
                            exp year
                            <input type="number" placeholder='Year' value={year} min={2023} onChange={(e)=>{setyear(e.target.value)}}/>
                        </label>
                        <label >
                            CVV 
                            <input type="number" placeholder='***' value={cvv} onChange={(e)=>{setcvv(e.target.value)}}/>
                        </label>
                    </div>
                    
                    <input type="submit" name="" id="sbutton" value="Proceed to Checkout" />
                    

                </form>
            </div>
        </div>

</section>

        </div>
       
        
    </div>
  )
}

export default Payment