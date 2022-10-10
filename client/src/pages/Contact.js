import React, { useState } from 'react';
function handleSubmit(name,email,message){

}

function Contact(){
    const [contact,setContact] = useState({
        email:"",
        name:"",
        message:""
    });
    const [showMsg,setShowMsg] = useState(false);
    const handleChange = (e) => {
        setContact({...contact,[e.target.name]: e.target.value })
    }
    const displayInfoRequired = (e) => {
        if(e.target.value == ""){
            console.log(e.target.name + " is blank");
        }
    }
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
                <input type="text" name='email' placeholder='Email' value={contact.name} onChange={handleChange} onMouseLeave={displayInfoRequired} autoComplete="off" />
                <br></br>
                <textarea type="textArea" name='message' placeholder="Message" value={contact.name} onChange={handleChange} onMouseLeave={displayInfoRequired} autoComplete="off" />
                <br></br>
                <button>Send</button>
            </form>
        </section>
    );
}
export default Contact;