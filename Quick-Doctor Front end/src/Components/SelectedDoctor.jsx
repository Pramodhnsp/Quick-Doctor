import UserNavbar from "./UserNavbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector  } from 'react-redux' 
import '../CssComponents/SelectedDoctor.css'


const SelectedDoctor = () => {

    const [date, setDate] = useState(); 
    const [time, setTime] = useState();
    const [endtime, setEndtime] = useState(); 
    const NavigateToAppointmenst = useNavigate();
    
   

    let doctor= useSelector((state)=>{return state.doctor})
    let user=useSelector((state)=>{return state.user})

    let dispatch = useDispatch();
   

    let u_id=user.id;
    let d_id=doctor.d_id;
    let u_email_id=user.email;
    let d_email_id=doctor.d_e_mail;
    let date_reserved = date;
    let timeReservedStart = time;
    let timeReservedEnd = time ;
    
   const Schedule = ()=>{

    let scheduleDetails = {u_id, d_id, u_email_id , d_email_id , date_reserved, timeReservedStart, timeReservedEnd }
    console.log(scheduleDetails);

    

    if(date && time === undefined) 
    {
        alert("Please select a date and time")
    }
    else
    {

        dispatch({
            type : "add_doctor",
            payload : scheduleDetails
        })
            fetch("http://localhost:7071/AddSchedule" , {
            method : "POST",
            headers : {"content-type":'application/json', "Accept":'application/json'},
            body: JSON.stringify(scheduleDetails)

            })
            .then(()=>{console.log("Schedule added")})
            NavigateToAppointmenst('/Appointments')

    }

   }




    return (
        
        <div>
            <UserNavbar/>
            <div className="selected-wrap">
                <div className='card'>
                    <div id='top'>
                        <img src="https://img.freepik.com/premium-vector/profile-flat-blue-simple-icon-with-long-shadowxa_159242-10066.jpg"  height={150} width={150}/>
                    </div>
                    <hr />

                    <div id='middle'>
                        <p> Name : {doctor.d_name} </p>
                        <p> Email : {doctor.d_e_mail} </p>
                        <p> Speciality : {doctor.d_spec}  </p>
                        <label> choose Date : <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}  />  </label> 
                        {/* <label> choose time : <select value={time} onChange={(e)=>{setTime(e.target.value)}}>
                            <option >--:--:-- </option>
                            <option >09:00 AM</option>
                            <option >10:00 AM</option>
                            <option >11:00 AM</option>
                            <option >12:00 PM</option>
                            <option >02:00 PM</option>
                            <option >03:00 PM</option>
                            <option >04:00 PM</option>
                            </select>  </label>     */}
                        <label> choose time : <input type="time" value={time} onChange={(e)=>{setTime(e.target.value)}}  />   </label> 

                    </div>

                    <div id='bottom'>
                        <button onClick={Schedule} >Book an appointment</button> 
                    </div>          
                </div>

                <div className="selected-container">
                    <p id="heading"> {doctor.D_name} is one of the most esteemed Neurosurgeon,Neurospine Surgeon,Neurointerventional Surgery,Neurologist in Bangalore </p>
                    <p id="qualif">Academic Qualifications</p>
                    <li>FINR (Interventional Neruo-radiology)</li>
                    <li>MBBS </li>
                    <li>MS - General Surgery</li>
                    <li>MRCS (UK)</li>
                    <li>MCh - Neuro Surgery</li>
                    <li>FV&SBNs</li>
                    <p></p>

                    <p id="exp">Experiences</p>
                    <li>Senior Registrar : KEM Hospital, Seth GS Medical College, Mumbai 2010 - 2011</li>
                    <li>Registrar and Fellow : Department of Neurosurgery and Endovascular Neurosurgery 2011 - 2012</li>
                    <li>Fellow: Fellowship In Endoscopic and Minimally Invasive Neurosurgery - 2012</li>
                    
                </div> 

            </div>
            
        </div>
        
     );
}
 
export default SelectedDoctor;