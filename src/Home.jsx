import React , {useState} from 'react';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import  Layout from './Layout'
const Home = () => {

    const [value,setValue] = useState({
        name: '',
        email: '',
        message: '',
        buttonText: 'submit',
        
    })
    
    const {name,email,message,buttonText} = value

   // const {REACT_APP_API, REACT_APP_CLOUDINARY_CLOUD_NAME,REACT_APP_CLOUDINARY_UPLOAD_SECRET} = process.env
 const { REACT_APP_API} = process.env;
    const  handleChange = name => event => {
        setValue({...value , [name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        setValue({...value,buttonText: '...enviando'})

       // console.table({name,email,message,phone,uploadedFiles,uploadPhotosButtonText})

       axios({
           method: 'POST',
           url: `${REACT_APP_API}/feedback`,
           data: {name,email,message,uploadPhotosButtonText}
       })

       .then(response => {
          console.log('respuesta',response)
          if (response.data.succes) toast.success('Thanks for your feedback');
             setValue({
              ...value,
              name: '',
              email: '',
              message: '',
              
              buttonText: 'submitted'
              
          })
       })
       .catch(error => {
           //console.log('feedback error',error.response)

           if (error.response.data.error) toast.error('Failed! Try again!');
        })
    }





    const feedbackForm = () => (
        <React.Fragment>
       
            <form  onSubmit={handleSubmit}>
                  <label  className="text-muted">Your name</label>

                    <input className="form-control" type="text" onChange={handleChange('name')} value={name}  required/>
                </div>

                <div className="form-group">
                <label  className="text-muted">Your email</label>

                    <input className="form-control" type="email" onChange={handleChange('email')} value={email}  required/>
                </div>

                <div className="form-group">
                    <label  className="text-muted">Description</label>
                    <textarea onChange={handleChange('message')} className="form-control" value={message} required></textarea>
                </div>

                <div className="form-group">
              

              

    <button className="btn btn-outline-primary btn-block">{buttonText}</button>

            </form>
            </React.Fragment>
    )

    return ( 
        <Layout>
        <ToastContainer />
        <div className="container text-center">
            <h1 className="p-5">Feedback Online</h1>
        </div>
        <div className="container col-md-8 offset-md-2">{feedbackForm()}</div>
        <br />
        <br />
        <br />
    </Layout>
     );
}
 
export default Home;