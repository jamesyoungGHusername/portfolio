import React, { useState } from 'react';
import "./Contact.css";

function Contact(){
    const [contact,setContact] = useState({
            email:"",
            name:"",
            message:""
    });
    const [showMsg,setShowMsg] = useState(false);
    const handleChange = (e) => {
        setContact({...contact,[e.target.name]: e.target.value })
    };
    const displayInfoRequired = (e) => {
        if(e.target.value == ""){
            console.log(e.target.name + " is blank");
            if(e.target.name != "message"){
                e.target.className = "red";
            }
        }else{
            e.target.className = "";
        }
    };
    const handleSubmit = (e) => {
        if(contact.email && contact.name){
            e.preventDefault();
            console.log(e.target);
            //this is the true, correct email validation
            if(contact.email.toLowerCase().match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
            )){
                console.log("valid email");
                setContact({email:"" ,name:"",message:""})
            }else{
                console.log("invalid email");
                alert('Invalid Email');
            }
        }else{
            alert("Email and name required");
        }
        
    };
    return (
        <section id="contact">
            <h1>
            Contact
            </h1>
            <h2>
                <a href="mailto: jamesyoungwrites@gmail.com">Click this to email me.</a>
            </h2>
            <form id="form" action="" onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' value={contact.name} onChange={handleChange} onMouseLeave={displayInfoRequired} autoComplete="off" />
                <br></br>
                <input type="text" name='email' placeholder='Email' value={contact.email} onChange={handleChange} onMouseLeave={displayInfoRequired} autoComplete="off" />
                <br></br>
                <textarea type="textArea" name='message' placeholder="Message" value={contact.message} onChange={handleChange} onMouseLeave={displayInfoRequired} autoComplete="off" />
                <br></br>
                <button>Send</button>
            </form>
        </section>
    );
}
export default Contact;