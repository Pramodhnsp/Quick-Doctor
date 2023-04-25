let initialState =  { user : null,
                      doctor:null,
                      merchant:null,
                      product:null
                     } ;

let Reducer=(state=initialState , action)=>
{
    switch(action.type)
    {
        case "add_user" : return { ...state , user : action.payload   };
        case "delete_user" : return {...state , user : action.payload };
        case "add_doctor" : return { ...state , doctor : action.payload   };
        case "delete_doctor" : return {...state , doctor : action.payload };
        case "add_merchant" : return { ...state , merchant : action.payload   };
        case "delete_merchant" : return {...state , merchant : action.payload };
        case "add_product" : return { ...state , product : action.payload   };
        case "delete_product" : return {...state , product : action.payload };
        default : return state;
    }
}

export default Reducer;