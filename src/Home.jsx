import React , {useState} from 'react';
import axios from 'axios'
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import  Layout from './Layout'

const StaticMenu = () => {
  const homeSection = useScrollSection('home');
  const aboutSection = useScrollSection('about');
  const contactameSection = useScrollSection('contactame');
  const proyectosSection = useScrollSection('proyectos');
  const estudiosSection = useScrollSection('estudios');

 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
    
        <a className="nav-item nav-link" onClick={aboutSection.onClick} selected={aboutSection.selected}>
          Skills
        </a>
        <a className="nav-item nav-link" onClick={proyectosSection.onClick} selected={proyectosSection.selected}>
          Proyectos
        </a>
        <a className="nav-item nav-link" onClick={estudiosSection.onClick} selected={estudiosSection.selected}>
          Estudios
        </a>
        <a className="nav-item nav-link" onClick={contactameSection.onClick} selected={contactameSection.selected}>
          Contactame
        </a>
      </div>
    </div>
  </nav>
  );
};


  

const Home = () => {

    const [value,setValue] = useState({
        name: '',
        email: '',
        message: '',
        buttonText: 'Enviar mensaje',
        
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
           data: {name,email,message}
       })

       .then(response => {
          console.log('respuesta',response)
          if (response.data.succes) toast.success('Thanks for your feedback');
             setValue({
              ...value,
              name: '',
              email: '',
              message: '',
              
              buttonText: 'Mensaje enviado'
              
          })
       })
       .catch(error => {
           //console.log('feedback error',error.response)

           if (error.response.data.error) toast.error('Failed! Try again!');
        })
    }


    const home = () => (

        <React.Fragment>
        
         <Section id="home">
         <div class="row">
        <div class="book">
   
            <div class="book__animate">
                <span class="span1">

                </span>
                <span class="span2">
        
                </span>
                <span class="span3">
        
                </span>
                <span class="span4">
        
                </span>
            </div>

            <div class="book__texto" >
                <h1 class="book__texto__title">Ezequiel Gallardo</h1>
                <h2 class="book__texto__title">Full stack Javascript</h2>
            </div>
            
        

        
        </div>
    </div>
        </Section>  
        
        </React.Fragment>

    )

    const sobreMi = () => (
      <React.Fragment>
<div className="sobre-mi">
      <div className="row justify-content-center">
           <div className="col-12">
              <h5 className="text-center">Hola soy Ezequiel! Programador javascript . Utilizo para desarrollo MERN STACK y wordpress , me divierte programar , como tambien actualizarme y ver tendencias que me mejoran como desarrollador</h5>
          </div>
          <a href="https://res.cloudinary.com/developer-gallardo/image/upload/v1603757304/Ezequiel_Gallardo_-_javascript_fullstack_zfvq2n.pdf" target="_blank">ver mi cv</a>
      </div>
      </div>
      </React.Fragment>
    )

      const about = () => (

        <React.Fragment>
        
         <Section id="about" className="container-fluid text-center p-5">
           <div className="row justify-content-center">
           <div className="col-12">
           <h2> Skills </h2>
            <ul>
              <li>
                <p>html</p>
              </li>
              <li>
                <p>css</p>
              </li>
              <li>
                <p>sass</p>
              </li>
              <li>
                <p>bootstrap 4</p>
              </li>
             <li>
                <p>javascript</p>
              </li>
                <li>
                <p>typescript</p>
              </li>
              <li>
                <p>nodejs</p>
              </li>
              <li>
                <p>jquery</p>
              </li>
              <li>
                <p>react</p>
              </li>
              <li>
                <p>wordpress themes</p>
              </li>
              <li>
                <p>wordpress plugin</p>
              </li>
              <li>
                <p>mongodb</p>
              </li>
              <li>
                <p>firebase</p>
              </li>
              <li>
              <p>mysql</p>

              </li>
              <li>
                <p>java</p>
              </li>
              <li>
                <p>photoshop</p>
              </li>
            </ul>
           </div>
           </div>
            
        </Section>


        </React.Fragment>

    )

    const proyecto = () => (

      <React.Fragment>
      
       <Section id="proyectos" className=" text-center p-5">
         <div className="row mb-5">
         <div className="col-12">
           <h2>Proyectos</h2>

        </div>
      
        </div>
        <div className="row ">
          <div className="container ">
            <div className="col-12 d-flex flex-wrap justify-content-between">
            <div  className="card  col-md-3 ">
            <a href="http://peliculas999.surge.sh/" target="_blank">
          <img className="card-img-top " src="https://75rjea.bn.files.1drv.com/y4pRoyCeaQbGpxvAbAR3O1BSi7sGk04pvvLpXfOErpyeFlInWMeGNjvgVc6UlhyAFM0Ux_PAroIzN95bZbfHT-kHfWJn4MPTmJDFoyIER5qX1IkdqVdKNR6aH7nJnTLtXYRFUsDq_vxrEUgFonCgQd17ca2cvubO7tuj236gJqCF3YaFBPWET-8-2-_25aAKLqt0oSs_PwMhcJbFtNkRtYbLRreNXIbWcfW5sy6L5wdzr4?encodeFailures=1&width=1366&height=648" alt="Card image cap"/>
          <div className="card-body">En esta aplicacion web pobras buscar peliculas gracias a la api IMDB desplegado en SURGE
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
            <span class="badge badge-info mt-2 mr-2">React</span>
            <span class="badge badge-danger mt-2">Bulma.css</span>

           </div>
           </a>
        </div>

        <div  className="card  col-md-3">
            <a href="https://ezexedge.github.io/css-grid-responsive/" target="_blank">
          <img className="card-img-top " src="https://nolfra.bn.files.1drv.com/y4m8Y8m85VDJ8goSkTwASDPr_A97MeUTOZPT8HLJaHF502AsMhC8koSkBc35JesR-4Y7X3MI3dnd9wgsCY2jTgV9GrjQjjb2cufmQmwJMRy5QE6uhJGb9_PHq45eOwMG5px8LewOcIaMvKo-eqUrjHtBAp5hRp6TKS-4KkyF-1k6bQccoj9YfbhXMh7QWWLLuXVu0r89Izj5RWF0nxMfrHVPA?width=256&height=190&cropmode=none" alt="Card image cap"/>
          <div className="card-body">Sitio web responsive realizado con css GRID
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
            
            <span class="badge badge-danger mt-2">SASS</span>

           </div>
           </a>
        </div>


        <div  className="card  col-md-3 ">
            <a href="https://ezexedge.github.io/daftPunk3/" target="_blank">
          <img className="card-img-top " src="https://ofegtw.bn.files.1drv.com/y4mSNJp8f3geXNAdoM1EtpXwcz-Fu_FXdQWwZPBWlhREH6N9O0JDs-kjj2o2G_L2oRWRd9Y5nyQ-ymQlvLlXUdS6xRA-WcFS9naKw8GwqefGg9a3EhGXRb20vj0E82iVyqNl1r0R0A13Zup7aq0YbidAPD7FAvOT3zZyxZTSD5yy2X63UTKqZTVGDwESxF7ISetIRJYXVHrO8Go_CE2Gk8dRw?width=256&height=200&cropmode=none" alt="Card image cap"/>
          <div className="card-body p-5">Sitio web realizado solicitado como trabajo en coderhouse
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
        
            <span class="badge badge-danger mt-2">Bootstrap</span>

           </div>
           </a>
        </div>

        
            </div>

            
          </div>
        </div>
      
      
        
        <div className="row mt-5 ">
          <div className="container ">
            <div className="col-12 d-flex flex-wrap justify-content-between">
            <div  className="card  col-md-3">
            <a href="https://ezexedge.github.io/workshop-vanilla-js/" target="_blank">
          <img className="card-img-top " src="https://qmby3a.bn.files.1drv.com/y4mq4gke_83qTZOAVwWaAIy6ssZF334D66kADXZsCT_JnUHdexiR6Y3BZinzYyYkP77DOBw8lnsTDO6vsJwUvJuAC5lv4H4ciGqiT8-n3xUBfB8pDu1RbqEbDt13x6_gBr4xpQW6YUg6qyBLeBoZ6KPCv4xyW5DBrMRnqT0KtTpmS7qb4csRY8YWWQwxmwWtSZc1axSEa4GDQIU1-KQytqoUg?width=660&height=353&cropmode=none" alt="Card image cap"/>
          <div className="card-body">CRUD para un registro de alumnos echo en javascript y utilzando como base de datos a Localstorage
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
            <span class="badge badge-warning mr-2">Javascript</span>
            <span class="badge badge-danger mt-2">Bootstrap</span>

           </div>
           </a>
        </div>

        <div  className="card  col-md-3 ">
            <a href="https://socket-555.herokuapp.com/" target="_blank">
          <img className="card-img-top " src="https://lzuafw.bn.files.1drv.com/y4mrtyKW7Biwx1QvFkoL0DSFuy_KtfutaCZ0Y8nuyJ-YYGCxwtXM8v5xdmiZNkldgr93UaQmupoGA7LbQBtkr7gvcE3autJMZv2Um1XtZ2N8CkblFAqsaBGcVTBFYR_c1nE1_7KkEpwTN2h3rF74L7CXU3awC48hUXePZhhY5k43hkih9Z1QryzmUGjKgq5-VSfXH5krc4QLM0w28sSMEw4vA?width=683&height=438&cropmode=none" alt="Card image cap"/>
          <div className="card-body">Esta app es un chat en el cual se podra crear una sala y conectar muchos usuarios
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
            
            <span class="badge badge-danger mt-2 ">SASS</span>
            <span class="badge badge-success mt-2 mr-2 ml-2">NODEJS</span>
            <span class="badge badge-dark mt-2  ">SOCKET</span>

           </div>
           </a>
        </div>


        <div  className="card  col-md-3">
            <a href="https://hidden-garden-45879.herokuapp.com/" target="_blank">
          <img className="card-img-top " src="https://mrbbig.bn.files.1drv.com/y4mZ32LxZdpIP1R_ENWBEow7UrsGYNKRd1IfCFThVmawPe16soHw36SPrLTbrITdgDFkDDggA2jzKtXjUTR14c6T9FowCVA3Bj7OXUjR4zXv62l_bekO-zM4fFZl8NVIGBp2SkVDewLA9zkHniXCbA5ZyihFhL60nnZreisdwvMgY_mIxqHMqD1OwnIAyxInbKpA5WpanWUapO60bjKMMlqIg?width=660&height=328&cropmode=none" alt="Card image cap"/>
          <div className="card-body ">Como admin subo libros y los guardo en mi base de datos para que sean descargado
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
        
            <span class="badge badge-danger mt-2">Bootstrap</span>
            <span class="badge badge-success mt-2 mr-2 ml-2">NODEJS</span>
            <span class="badge badge-info mt-2 mr-2">MYSQL</span>
            <span class="badge badge-warning mt-2">PUG</span>


           </div>
           </a>
        </div>

        
            </div>

            
          </div>
        </div>


           
        <div className="row mt-5 ">
          <div className="container ">
            <div className="col-12 d-flex flex-wrap justify-content-between">
            <div  className="card  col-md-3">
            <a href="https://sleepy-dusk-42101.herokuapp.com/iniciar-sesion" target="_blank">
          <img className="card-img-top " src="https://zstpxa.bn.files.1drv.com/y4mRV4f8wQsHnElLRqypYVu0O7fj7HYA7cjlAhvkKPumpsNXnFMZRvtg2mQkd2kn2MIG7Hkw-RCfB5l8ZEV2Iafo9u65at-mIkOHzLHet1lM6UB0ZUNqrMHvd6LYssLmSS3AcvlRMCUc8Yn_NQq5lLl4I3JzXQZITHZpzOOaGnFlXvA4SSuN_KlKKWwH5dZBdJtC8hv9KJaAcQbdcpc7WMyGQ?width=660&height=431&cropmode=none" alt="Card image cap"/>
          <div className="card-body">En esta app deberas registrarte  , crear proyectos y dentro esos proyectos tareas 
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
            <span class="badge badge-success mt-2 mr-2 ml-2">NODEJS</span>
            <span class="badge badge-info mt-2 mr-2">MYSQL</span>
            <span class="badge badge-warning mt-2 mr-2">PUG</span>
            <span class="badge badge-secondary mt-2">WEBPACK</span>

           </div>
           </a>
        </div>

        <div  className="card  col-md-3">
            <a href="http://206.189.227.59/" target="_blank">
          <img className="card-img-top " src="https://qd7mfa.bn.files.1drv.com/y4mT8l---iDPqpCoJJ7GD6MYzOoRQ24HwALnzaqUU5qU6ROF9WTNbNmsc0WGvb73RMhD0OTQgf7f5LlRQL7wQZAsgkGD6INHBmm8SPWD__QyUuGR-jHHJo_BvpxipPmpLpQqgprvLTVbEo8NSdbZRLidCeoI6Q6KQjp0BVskR0PYGmlsdjZ6FpWUTwihrlu0rb4llQ099lMEI_AQxONFpzaag?width=660&height=451&cropmode=none" alt="Card image cap"/>
          <div className="card-body">El usuario podra registrarse , recibir un mail de validacion y luego modificar sus datos almacenados
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
            
            <span class="badge badge-info mt-2">REACT</span>
            <span class="badge badge-success mt-2 mr-2 ml-2">NODEJS</span>
            <span class="badge badge-dark mt-2  ">MONGODB</span>

           </div>
           </a>
        </div>


        <div  className="card  col-md-3">
            <a href="http://206.81.5.205/" target="_blank">
          <img className="card-img-top " src="https://27jzhw.bn.files.1drv.com/y4m263L0ossS-9ARA-SUz1_IanQRBuZ-uCxi37SpjfzVMF7v3YxpxCdsqLgC18GVRKAonxF5bHnid2W6tc3xACaWKAUFTwLTHuhgiv4e-4kG9nzAVMTBr1ZoEB6DGoJfToJtAZFR3Gvjrc01M_foNpEEU1peTiaQk-0T7as2hND3ucfq-jUBGHrhGnRdOZU5_oDJLerRm7p7yDjpx5uppX6Pw?width=660&height=352&cropmode=none" alt="Card image cap"/>
          <div className="card-body ">Tienda online para comprar deberas crar una cuenta , usando la api de braintree y paypal podes pagar usando una tarjeta false de braintree
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
        
            <span class="badge badge-info mt-2">REACT</span>
            <span class="badge badge-success mt-2 mr-2 ml-2">NODEJS</span>
            <span class="badge badge-dark mt-2  ">MONGODB</span>


           </div>
           </a>
        </div>

        
            </div>

            
          </div>
        </div>

        <div className="row mt-5 ">
          <div className="container ">
            <div className="col-12 d-flex flex-wrap justify-content-between">
            <div  className="card  col-md-3">
            <a href="https://sleepy-dusk-42101.herokuapp.com/iniciar-sesion" target="_blank">
          <img className="card-img-top " src="https://bn1303files.storage.live.com/y4maYQqFxhtFh1adJ09xl0bdCAY_EvnZQSuIPuYAZUu8SLqOjA1C_XhS_ciCJV3lA3AJQ-lZAQsps0nxIocmmI5Eb2s67X7zlrFITLSfKKlJirzvMFcZRxeFa2e13_grwdLO5Vhn1l5FvQsDieS8J2H6xUy7gTK9ceyy5CQxgGgApioXlYEMF9SciUjmuomdIWE?width=660&height=319&cropmode=none" alt="Card image cap"/>
          <div className="card-body">En clone de hackers news usando la base de datos firebase, podras registrarte , agregar link, y comentar
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
           
            <span class="badge badge-info mt-2 mr-2">REACT</span>
            <span class="badge badge-warning mt-2 mr-2">FIREBASE</span>

           </div>
           </a>
        </div>

        <div  className="card  col-md-3">
            <a href="http://157.230.87.53/" target="_blank">
          <img className="card-img-top " src="https://bn1303files.storage.live.com/y4mOt1k6ClmsNwnJ_AijjMsThaAp-OUK1asJKhJoxH3wWsGX_lV9r390E-hiD0hUM810A9fk-cqqpB-XKSs96yUOTaG1YCsJG0sJ1GYyI9qzwpbFNMsedDgyakSNeG6OzKSKDdI3yorhA3dv-X3Lyp8r_o3w8D6EMGdgQi1K1v9VQJfInukEwlaiWiyriPfxscD?width=660&height=357&cropmode=none" alt="Card image cap"/>
          <div className="card-body">Red social en la que el usuario se podra registrar y crear un post , seguir a los usuarios y darle me gusta a los post
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
            
            <span class="badge badge-info mt-2">REACT</span>
            <span class="badge badge-success mt-2 mr-2 ml-2">NODEJS</span>
            <span class="badge badge-dark mt-2  ">MONGODB</span>

           </div>
           </a>
        </div>


        <div  className="card  col-md-3">
            <a href="http://cocina777.atwebpages.com/" target="_blank">
          <img className="card-img-top " src="https://bn1303files.storage.live.com/y4mrQu2AWsnUe3QAPcSpZMFavFZK0divogmBFhRgbzrARlV9txgeNTZ1WaK6lz9YIO_NWkyGuL2Q0a0DUKbHW6qeqwqeIEuD8x03F1UXLltIdH9g4yDnRGyBfJUEdts95qCm1y6f5h45RBMBOYrhFRoIFQSUScMzIFfIZU4JH9ZqYhjkYU4bfBbGNWff-Wn3qK9?width=660&height=363&cropmode=none"   alt="Card image cap"/>
          <div className="card-body ">Tema de wordpress para un gimnasio , creando plugins con post type y custom post types            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
        
            <span class="badge badge-info mt-2">WORDPRESS THEME </span>


           </div>
           </a>
        </div>

        
            </div>

            
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="container ">
          <div className="col-12 d-flex flex-wrap justify-content-between">

          <div  className="card  col-md-3">
            <a href="http://cocina999.atwebpages.com/" target="_blank">
          <img className="card-img-top " src="https://bn1303files.storage.live.com/y4mgPM-p9_A_RSEuWLOZ1CYPvDyCACsXQZpBTFXvjRG1gITQe-inr9hE0f-eFHUZW2z_-E6zAdUIX_6nEQrcU38tN-hWfrZJJh1Cpao7qWJ0PVg7jGMJqxofDj0v8i8ZszAgt-8SJ9RSZ6n0BWGyQbkavik83qc-m2K2ph9T5n7p-_BHUemHPiAMZ4WPRiHjJPS?width=660&height=329&cropmode=none"   alt="Card image cap"/>
          <div className="card-body ">Tema de wordpress para una escuela de cocina , utilizando wordpress , creando plugin con custom metaboxes 3(cmb2)
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
        
            <span class="badge badge-info mt-2">WORDPRESS THEME </span>
           


           </div>
           </a>
        </div>
        <div  className="card  col-md-3">
            <a href="https://boxingcrazy.com.ar/" target="_blank">
          <img className="card-img-top " src="https://bn1303files.storage.live.com/y4mrD2N-LAbCU5prszGInfCxPrebXzbG9Q7TEi5Xed6L9QLPYB0UDN9sU3t85PIuEYyadngEc40wE9pZcdZrTniZG0ggGhrZ57PfHQn3nR4ukw6258R_KGOM3Zm68JX3sSvVJL_V6JVokLeRYBKe1_XOIVIJv53Vejssm5FS7v5T7Puu0l7C6NpGvaqAd6EBRd4?width=660&height=357&cropmode=none"   alt="Card image cap"/>
          <div className="card-body ">Tienda online utilizando woocommer y customizando el diseno para el cliente
            <hr/>
            <div className="text-center font-weight-bolder">Tecnologias</div>
        
            <span class="badge badge-info mt-2 mr-2">WORPRESS </span>
            <span class="badge badge-danger mt-2">WOOCOMMERCE </span>
           


           </div>
           </a>
        </div>
        </div>
        </div>
        </div>
        
      </Section>


      </React.Fragment>

  )

  const estudios = () => (

    <React.Fragment>
    
     <Section id="estudios" className=" text-center p-5">
       <div className="row">
       <div className="col-12">
         <h2>Estudios</h2>
         </div>
         </div>
         <div className="row justify-content-center">
           <div className="col-11  d-flex justify-content-between">
         <ul className="list-group">
           <li><a href="https://onedrive.live.com/embed?cid=D2FA5A3F602F2068&resid=D2FA5A3F602F2068%21219180&authkey=AHOyHXi9uo6ldPg&em=2"  target="_blank">-fundamento de la programacion (dictado en la utn)</a></li>
           <li><a href="https://www.coderhouse.com/certificados/5ae5c9396ebda40004e672ea" target="_blank">diseno web (dictado en coderhouse)</a></li>
           <li><a href="https://www.coderhouse.com/certificados/5ae5c9396ebda40004e672ea"target="_blank">programacion web javascript y jquery (dictado en coderhouse)</a></li>
           <li><a href="https://res.cloudinary.com/developer-gallardo/image/upload/v1602967253/certificado_ezequiel_xn6le4.png" target="_blank">-diseno de api con nodejs (plataforma appdelante)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-cca00220-280f-4ef9-9236-24d1d7522c8d.jpg?v=1602969756000" target="_blank">-wordpress: desarrollo de temas y plugins (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-5PHGRA4J.jpg?v=1573953512000" target="_blank">aprendiendo react (udemy)</a></li>
           <li><a href="#">-react: hook context redux (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-e3b4d42d-e14e-4050-874c-d59fe99bcac5.jpg?v=1581195021000" target="_blank">node: de cero a experto (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-273dbd8b-523f-4b97-a094-667a97d0221f.jpg?v=1583740544000" target="_blank">nodejs: bootcamp , mvc ,rest api (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-4c4c5909-bad3-4cb0-b8ef-f54f6cea4b69.jpg?v=1589736263000" target="_blank">-javascript moderno (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-EKA1B0NK.jpg?v=1577594057000" target="_blank">typescript (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-8c94fdd9-293b-4e33-9cb5-6623158058f2.jpg?v=1580686672000" target="_blank">-jquery: Avanzado (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-05c2fe5a-4493-4636-87f0-c2deeda55f21.jpg?v=1594921810000" target="_blank">-wordpress desarrollo de temas con bootstrap 4  (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-M4NKILJ8.jpg?v=1507496276000" target="_blank">-diseno web: html, css , javascript (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-aa0dc2c9-ae68-418c-ad99-589b9c5a6e36.jpg?v=1580687030000" target="_blank">-diseno web profesional (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-c6b119ef-1090-44e9-9d61-1e6f34f8b79f.jpg?v=1580687623000" target="_blank">-bootstrap 4: master (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-23ec91a8-d191-404b-b10e-47302ee004a2.jpg?v=1580687726000" target="_blank">-bootstrap 4: el curso completo (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-BZRO9DAT.jpg?v=1529601256000" target="_blank">-bootstrap 3 (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-BSGKE592.jpg?v=1513815824000" target="_blank">-fundamentos de la programacion (udemy)</a></li>
           <li><a href="https://udemy-certificate.s3.amazonaws.com/image/UC-873e6c61-1b9c-4a4d-91ca-e7b1f5fabe4c.jpg?v=1588539445000" target="_blank">-php y mysql (udemy)</a></li>
           <li><a href="https://codigofacilito.com/user_quizzes/104323.pdf" target="_blank">-curso profesional de go (codigo facilito)</a></li>


         </ul>
         <ul className="ml-4">
           <li>
             <p className="font-weight-bolder">-Instuto seminario franciscano (moreno)</p>
             <p><span className="span-sub">secundario</span></p>
             <p><span className="span-sub">2011</span></p>
           </li>
         
           <li>
             <p className="mt-2 font-weight-bolder">-universidad nacional del oeste</p>
             <p><span className="span-sub">Analista en informatica</span></p>
             <p><span className="span-sub">2017 - en curso</span></p>

           </li>
         
         </ul>
         </div>
         </div>
      
    </Section>


    </React.Fragment>

)

  
const footer = () => {

  const year = new Date()
  const newYear = year.getFullYear()
  return ( 
      <>
      <footer className="footer">
        <div className="hijo-footer d-flex flex-wrap justify-content-center  ">
          <a href="https://github.com/ezexedge" target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://www.codewars.com/users/gallardoEzequiel" target="_blank" className="ml-4"><img src="https://www.codewars.com/users/gallardoEzequiel/badges/micro" alt=""/></a>
        </div>
        <p className="texto-footer text-center">Ezequiel Gallardo  {newYear}  echo con MERN + HEROKU 💪  </p>
      </footer>
      </>
   );
}

  

    const feedbackForm = () => (
        <React.Fragment>
       
            <form  onSubmit={handleSubmit}>
                  <label  className="text-muted">Ingresa tu Nombre</label>

                    <input className="form-control" type="text" onChange={handleChange('name')} value={name}  required/>
                

                <div className="form-group">
                <label  className="text-muted">Ingresa tu Email</label>

                    <input className="form-control" type="email" onChange={handleChange('email')} value={email}  required/>
                </div>

                <div className="form-group">
                    <label  className="text-muted">Mensaje</label>
                    <textarea onChange={handleChange('message')} className="form-control" value={message} required></textarea>
                </div>

              

              

    <button className="btn btn-outline-primary btn-block">{buttonText}</button>

            </form>
            </React.Fragment>
    )

    return ( 
        <ScrollingProvider>
        <ToastContainer/>
        <StaticMenu/>

        <div >{home()}</div>
    <div>{sobreMi()}</div>
             <div>{about()}</div>

        <div>{proyecto()}</div>
    <div>{estudios()}</div>
        <Section id="contactame" className="container text-center">
            <h2 className="p-5">Contactame</h2>
        </Section>
        <div className="container col-md-8">{feedbackForm()}</div>
        <br />
        <br />
        <br />
      {footer()}
    </ScrollingProvider>
     );
}
 
export default Home;