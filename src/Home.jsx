import React from 'react'

import Layout from './Layout'

import {Helmet} from 'react-helmet'
const Home = () => {
    return (
        <Layout>
        <div className="container text-center">
            <h1 className="p-5">Home</h1>

            <hr/>
            <p className="lead">Lorem ipsum Enim distinctio, fuga corporis architecto porro sunt iur</p>
        </div>

        </Layout>
     );
}
 
export default Home;