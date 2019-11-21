import React from "react";
import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Sensores</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
    </Head>

    <div className="tab-content">
      <div className="row">
        <div
          className="card bg-light shadow-sm mt-2 p-0 col-12 col-md-8 ml-0 mx-md-auto mb-5 shadow rounded tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="gestor-tab"
        >
          <div className="card-header shadow-sm bg-white">
            <h1 className="h1 card-title text-center text-primary my-2">
              Sensores
            </h1>
          </div>
          <div className="container p-5">
            <table className="table" id="tblEncuestas">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Clave</th>
                  <th>Nombre sensor</th>
                </tr>
              </thead>
              <tbody>
                <td>1</td>
                <td>456896</td>
                <td>Temperatura</td>
                <div className="container">
                  <td>
                    <button
                      type="button"
                      className="btn btn-success"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Editar"
                    >
                      <span className="icon icon-pencil-1" />
                      Editar
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Eliminar"
                    >
                      <span className=" icon icon-trash" />
                      Eliminar
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Eliminar"
                    >
                      <span className=" icon icon-trash" />
                      Ver
                    </button>
                  </td>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
