import {Section, PageProps} from '../lib/types'
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss'
import { useForm } from '../lib/useForm';
import { toast, ToastContainer } from 'react-toastify';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

// in the future there might be a back arrow so I'm giving pageprops anyway

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
      if (rawResponse.status === 201) {
        toast.success('📧 Message sent!')
        setData(emptyForm)

      } else if (rawResponse.status === 403) {
        // phone (anti-spam field) was filled in. this shouldn't happen
        // for users, only for bots
        toast.warning('🥺 Please use a different browser!')
      }
      else {
        toast.error('😢 An error ocurred!')
        //console.log(errors) // disable in production
      }

    }
  
    const {data, setData, handleChange, handleSubmit, errors} = useForm({
      initialValues: emptyForm,
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