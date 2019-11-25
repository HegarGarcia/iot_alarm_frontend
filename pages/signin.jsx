import React, { useState } from "react";
import Head from "next/head";

const Signin = () => {
  // const { signIn } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setMessage] = useState("");

  const authenticate = e => {
    e.preventDefault();
    if (username !== "" || password !== "") {
      // signIn(username, password);
    } else {
      setMessage("Please enter your username and password");
    }
  };

  return (
    <div className="inicio" id="inicio">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
      </Head>
      <div className="container-all col-md-12" id="form">
        <div className="row">
          <div className="container-form shadow-lg p-3 rounded text-white ">
            <img src="/man-user.png" className="imagen" alt="User" />

            <h1 className="text-center">Login</h1>
            <form className="">
              <div className="form-group">
                <label forhtml="">Username</label>
                <input
                  className="formcontrol"
                  autoComplete="off"
                  type="text"
                  id="email"
                  placeholder="Username"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label forhtml=""> Password</label>
                <input
                  className="formcontrol"
                  type="password"
                  id="password"
                  placeholder="**********"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <input
                type="submit"
                className="btn btn-primary mb-5 d-flex justify-content-center"
                value="SIGN IN"
                onClick={e => authenticate(e)}
              />
            </form>

            <span className="text-footer">
              ¿Aún no te has registrado?
              <a href="/registro">Registrate</a>
            </span>
          </div>
        </div>
        <div className="piepagina">
          <p>Universidad de colima</p>
        </div>
      </div>

      <style global jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Libre+Franklin&display=swap");
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            font-family: "Libre Franklin", sans-serif;
          }
          .imagen {
            width: 100px;
            heigth: 100px;
            margin-left: 104px;
            padding: 0.25rem;
            /* background-color: #fff; */
            /* border: 1px solid #dee2e6; */
            border-radius: 0.25rem;
            max-width: 100%;
            height: auto;
          }
          .name {
            width: 411px;
          }
          .inicio {
            background-image: url(/circuit-sensor-background-1.jpg);
            backgroundcolor: black;
            margin-top: -84px;
          }
          .btn {
            width: 239px;
            height: 42px;
            margin-left: 40px;
            border-radius: 4.25rem;
            background-color: #38a1a4;
          }
          .container-form {
            margin-top: 100px;
            margin-bottom: 89px;
            width: 358px;
            background-color: #607d8b85;
          }
          input {
            border-radius: 4.25rem;
          }
          .formcontrol {
            display: block;
            width: 100%;
            height: calc(1.5em + 0.75rem + 2px);
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #f5f3f3;
            background-color: #3a383999;
            background-clip: padding-box;
            border: 1px solid #3a383999;
            border-radius: 6.25rem;
            -webkit-transition: border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
            transition: border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
          }
          piepagina {
            background-color: black;
          }
        `}
      </style>
    </div>
  );
};
export default Signin;
