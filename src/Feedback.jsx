import React , {useState} from 'react';
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import  Layout from './Layout'
const Feedback = () => {

    const [value,setValue] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
        uploadedFiles: [],
        buttonText: 'submit',
        uploadPhotosButtonText: 'upload files' 
    })
    
    const {name,email,message,phone,uploadPhotosButtonText,uploadedFiles,buttonText} = value

   // const {REACT_APP_API, REACT_APP_CLOUDINARY_CLOUD_NAME,REACT_APP_CLOUDINARY_UPLOAD_SECRET} = process.env
 const { REACT_APP_API, REACT_APP_CLOUDINARY_CLOUD_NAME, REACT_APP_CLOUDINARY_UPLOAD_SECRET } = process.env;
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
           data: {name,email,message,phone,uploadedFiles,uploadPhotosButtonText}
       })

       .then(response => {
          console.log('respuesta',response)
          if (response.data.succes) toast.success('Thanks for your feedback');
             setValue({
              ...value,
              name: '',
              phone: '',
              email: '',
              message: '',
              uploadedFiles: [],
              buttonText: 'submitted',
              uploadPhotosButtonText: 'uploaded'
          })
       })
       .catch(error => {
           //console.log('feedback error',error.response)

           if (error.response.data.error) toast.error('Failed! Try again!');
        })
    }


    const uploadWidget = () => {
        window.cloudinary.openUploadWidget({ cloud_name: REACT_APP_CLOUDINARY_CLOUD_NAME , upload_preset: REACT_APP_CLOUDINARY_UPLOAD_SECRET  , tags:['ebooks']},
            function(error, result) {
            //    console.log(result);
                setValue({...value,uploadedFiles: result, uploadPhotosButtonText: `${result ? result.length : 0 } fotos subidas`})
            });
    }


    const feedbackForm = () => (
        <React.Fragment>
        <div className="form-group pt-5">

            <button onClick={()=> uploadWidget()} className="btn btn-outline-secondary btn-block p-5">
                {uploadPhotosButtonText}
            </button>

        </div>
            <form  onSubmit={handleSubmit}>

                <div className="form-group">
                    <label  className="text-muted">Description</label>
                    <textarea onChange={handleChange('message')} className="form-control" value={message} required></textarea>
                </div>

                <div className="form-group">
                <label  className="text-muted">Your name</label>

                    <input className="form-control" type="text" onChange={handleChange('name')} value={name}  required/>
                </div>

                <div className="form-group">
                <label  className="text-muted">Your email</label>

                    <input className="form-control" type="email" onChange={handleChange('email')} value={email}  required/>
                </div>

                <div className="form-group">
                <label  className="text-muted">Your phone</label>

                    <input className="form-control" type="number" onChange={handleChange('phone')} value={phone}  required/>
                </div>

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
 
export default Feedback;