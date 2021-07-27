import {Section, PageProps} from '../lib/types'
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss'
import { useForm } from '../lib/useForm';
import { toast, ToastContainer } from 'react-toastify';


export const Contact = ({pageMethod, pageState}: PageProps) => {    

    const submitMessage = async () => {
      const rawResponse = await fetch('https://api.droniu.pl/contact/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (rawResponse.status == 201) {
        toast.success('📧 Message sent!')
      } else if (rawResponse.status == 403) {
        toast.warning('🥺 Please use a different browser!')
      }
      else {
        toast.error('😢 An error ocurred!')
      }

    }
  
    const {data, handleChange, handleSubmit, errors} = useForm({
      initialValues: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      onSubmit: submitMessage
    })
  

    return <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-inner">
            <h1>Contact me!</h1>
            <input 
            type="text" 
            placeholder="Name"
            onChange={handleChange('name')}
            value={data.name}
            required/>
            <input
            type="email"
            placeholder="Email"
            onChange={handleChange('email')} 
            value={data.email || ''}
            required/>
            {/* Anti-spam field */}
                <input type="text"
                placeholder="Phone"
                onChange={handleChange('phone')}
                value={data.phone || ''}
                className="phone"
                name="phone"
                tabIndex={-1}
                autoComplete="off"/>
            <textarea 
            placeholder="Message..."
            onChange={handleChange('message')}
            value={data.message || ''}
            rows={10}
            required/>
            <button 
            type="submit" 
            className="submit">Submit</button>
        </div>
      </form>
      <ToastContainer 
        position="bottom-right"
        autoClose={50000}
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