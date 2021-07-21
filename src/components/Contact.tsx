import React, { useEffect, useState } from 'react';
import {Section, PageProps} from '../types'
import './Contact.scss'

export const Contact = ({pageMethod, pageState}: PageProps) => {

    return <>
    <div className="container">
        <form action="/" className="decor">
        <div className="form-inner">
        <h1>Contact me!</h1>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <textarea placeholder="Message..." rows={10}></textarea>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div> 
    </>
}