import { useRef, useState } from "react";
import Navbar from "./Navbar";
import '../CssComponents/AddProduct.css'
import { useNavigate } from "react-router-dom";


const AddProduct = () => {

    let productName = useRef();
    let price = useRef();
    let rating = useRef();
    let pic = useRef();
    let licence = useRef();
    let description = useRef();
    let quantity = useRef();
    let merchantId = useRef();
    let navigate=useNavigate();

    console.log(merchantId);
    
    const [file, setFile] = useState();

    let handlepic = (e)=>{
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    let handleAddProduct = (e)=>{
        e.preventDefault();
        var formdata = new FormData();
        formdata.append("file" , file )
        formdata.append("product_name" , productName.current.value );
        formdata.append("product_price", price.current.value);
        formdata.append("product_rating", rating.current.value);
        formdata.append("product_lic", licence.current.value);
        formdata.append("product_Desc", description.current.value);
        formdata.append("product_qty", quantity.current.value);
        formdata.append("mid", merchantId.current.value);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          };
          
          fetch("http://localhost:7071/addProduct", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            navigate('/MerchantHome')

            
            
    }

    return ( 
        <> 
        <Navbar/>

        <div className="outer-wrap">
            <div className="product-container">
                <form onSubmit={handleAddProduct}>
                    <div className="product-form">
                        <label>Product Name </label> <input type="text" ref={productName} required  />
                        <label>Product Price</label> <input type="number" ref={price} min="0" required />
                        <label>Product License</label> <input type="number" ref={licence} min="0" required />
                        <label>Product Description</label> <input id="desc" type="text" ref={description} required />
                        <label>Product Quantity</label> <input type="text" ref={quantity}  required />
                        <label>Product Rating</label> <input id="ratg" type="number" ref={rating} max={5} min={0} step={0.1} required />
                        <label>Merchant ID</label> <input type="number" ref={merchantId} required />
                        <label>Product Pic</label> <input type="file" ref={pic} onChange={handlepic} required />
                    </div>
                    <div>
                        <button id="addbutton" >Add Product</button>
                    </div>
                </form>
            </div>
        </div>
         
        </>
     );
}
 
export default AddProduct;