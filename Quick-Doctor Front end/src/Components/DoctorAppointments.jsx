import UserNavbar from "./UserNavbar";
import { useSelector } from "react-redux";
import '../CssComponents/Appointment.css'
import { useEffect, useState } from "react";
import DoctorNavbar from "./DoctorNavbar";
  



const DoctorAppointments = () => {

    let [appointments, setAppointments] = useState(null);

    let user = useSelector((state)=>{return state.user});
    
   
    let doctor= useSelector((state)=>{return state.doctor});
   

    useEffect(()=>{
 
    fetch("http://localhost:7071/GetAllAppointments" , 
    {
        method:"GET",
        headers:{"content-type" :"application/json"}
    }).then(res=>res.json())
    .then(data =>{setAppointments(data);})
    .catch(err=>{console.log(err);})

    },[])


    if(appointments!=null){
        var result = appointments.filter(newemail=>  newemail.d_email_id===user.email);
    }


  
    return (
        <>
        <DoctorNavbar/>
        
        <u><h2>All your Appointments</h2></u>

        { result && <div>
        {result.map((appt)=>{
                return (
                    <>
                        <div className="header">
                       
                        </div>
                        <div className="notify">
                            <div className="body">
                                <p> Dear {user.username} you have an appointment with {appt.u_email_id} on {appt.date_reserved} at {appt.timeReservedStart}  </p>
                            </div>
                        </div>
                    </>

                )
            })
        }
        </div>}

        
        </>

      );
}
 
export default DoctorAppointments;