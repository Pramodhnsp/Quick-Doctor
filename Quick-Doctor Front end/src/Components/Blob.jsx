import React, { useState, useEffect } from "react";

function Blob() {
    const [imagedata, setImageData] = useState(null);
    let blobdata;

    useEffect(() => {
        fetch("http://localhost:7071/getallimages")
        .then(response => response.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64Data = reader.result;
            setImageData(base64Data)};
          reader.readAsDataURL(blob);
          
        });

        if(imagedata!=null)
        {
            console.log(imagedata);
        }
        
    }, []);

    return (
        <div>
            { imagedata && <div>

                {
                    imagedata.map((data)=>{

                        return(
                            <>
                            <div>
                                <h1>{data.id}</h1>
                            <img src="" alt="Uploaded" width={100} height={100} />

                            </div>
                            </>
                        )
                    })
                }


                 

            </div>}
             
        </div>
    );
}

export default Blob;

