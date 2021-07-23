import React, { useEffect, useState } from 'react';
import {Section, PageProps} from '../lib/types'
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss'
import { toast, ToastContainer } from 'react-toastify';
import { eventNames } from 'process';


interface InputField {
    name: string,
    email: string,
    message: string
}

export const Contact = ({pageMethod, pageState}: PageProps) => {    

const [inputField, setInputField] = useState<InputField>()

    const handleSubmit = (e: any) => {

    }
    
    const notify = () => toast.success(' ✉️ Message sent!');
    return <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-inner">
            <h1>Contact me!</h1>
            <input 
            type="text" 
            placeholder="Name"
            onChange={handleSubmit}
            value={inputField?.name}
            required/>
            <input
            type="email"
            placeholder="Email"
            onChange={handleSubmit} 
            value={inputField?.email}
            required/>
            {/* Anti-spam field */}
                <input type="text"
                placeholder="Phone"
                onChange={handleSubmit}
                className="phone"
                name="phone"
                tabIndex={-1}
                autoComplete="off"/>
            <textarea 
            placeholder="Message..."
            onChange={handleSubmit}
            value={inputField?.message}
            rows={10}
            required/>
            <button 
            onClick={notify} 
            type="submit" 
            className="submit">Submit</button>
        </div>
      </form>
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
}