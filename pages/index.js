import React from 'react'
import Head from 'next/head'
import Registro from './registro';
import Signin from '../pages/signin';
import UserContext from '../components/UserContext'
import Time from '../components/Time'

const Index = () => (
    <div>
    <Head>
         <title>Sensores</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
    </Head>

    <div className ="tab-content">
        <div className = "row">
            <div className ="card bg-light shadow-sm mt-2 p-0 col-12 col-md-8 ml-0 mx-md-auto mb-5 shadow rounded tab-pane fade show active"
            role="tabpanel" aria-labelledby="gestor-tab" >
            <div class="card-header shadow-sm bg-white">
                <h1 class="h1 card-title text-center text-primary my-2"> Sensores </h1>
            </div>
            <div className ="container p-5">
            <table class="table" id="tblEncuestas">
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>12:20:30</td>
                        <td>Abierto</td>


                    </tbody>
                    <tbody>
                        <td>12:20:30</td>
                        <td>Abierto</td>

                    </tbody>
                </table>

            </div>

    </div>

    </div>

    </div>
    </div>

) 

export default Index;