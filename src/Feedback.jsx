import React , {useState} from 'react';



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

    const  handleChange = name => event => {
        setValue({...value , [name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        setValue({...value,buttonText: '...enviando'})

        console.table({name,email,message,phone,uploadedFiles})
    }

    const feedbackForm = () => (
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
    )

    return ( 
        <div className="p-5" >

        {feedbackForm()}

    </div>
     );
}
 
export default Feedback;