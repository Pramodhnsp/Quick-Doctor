import { useNavigate } from 'react-router-dom';
import '../CssComponents/Doctor.css';
import UserNavbar from './UserNavbar';
import { useEffect, useState } from 'react';
import SelectedDoctor from './SelectedDoctor';
import { connect } from 'react-redux';





const Doctor = ({add_doctor}) => {

    const NavigateToSelected = useNavigate();
    const [doctors, setDoctors] = useState();
    const [selectdoctor, setSelectdoctor] = useState();
       
 
    useEffect (()=>{

        fetch("http://localhost:7071/getAllDoctors" ,{
            method:"GET",
            headers: {"conetnt-type" : "application/json" }

        }).then(res=> res.json())
          .then(data=>{setDoctors(data)})
          .catch(err =>{console.log(err);})    

    },[])

    const Bookappoint = ()=>{
        if(selectdoctor !== undefined )
        {
        // console.log(selectdoctor);
        add_doctor(selectdoctor);
        NavigateToSelected("/SelectedDoctor")
        }
    }

    return ( 

    <>
      <UserNavbar/>

      {doctors && <div className='forms'>

        { doctors.map((dlist)=>{


            return(

            <div>
              <div className='card'>
                  <div id='top'>
                     <img src="https://img.freepik.com/premium-vector/profile-flat-blue-simple-icon-with-long-shadowxa_159242-10066.jpg"  height={150} width={150}/>
                  </div>
                   <hr />

                <div id='middle'>
                    <p> Name : {dlist.d_name} </p>
                    <p> Email : {dlist.d_e_mail}  </p>
                    <p> Speciality : {dlist.d_spec} </p>
                    <p>doctor id: {dlist.d_id}</p>
                    
                    
                </div>
                  <div id='bottom'>
                     <button onClick={()=>{Bookappoint (setSelectdoctor(dlist)) (<SelectedDoctor doc={selectdoctor}/>) }}>Book an appointment</button> 
                  </div>          
               </div>

            </div> )
        })    
        }
    </div>}
    
    </>
     );
}

let mapStateToProps = (state)=>{
    return {...state};
}

let mapdispatchToProps = (dispatch)=>{
    return{
        add_doctor : (user)=>{ dispatch( {type : "add_doctor" , payload : user }  )}
    }
}
 
export default connect(mapStateToProps,mapdispatchToProps)(Doctor);