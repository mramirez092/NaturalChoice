import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import styles from "../../styles/register.css";

export const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/usuario", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (response.ok) {
            console.log("User created");
            setMessage('¡Usuario creado con éxito!')
          } else {
            console.error("Error creating user. Maybe you are using an existing email?");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

  return (
    <>
    <div className="container-register">
          <div className="form-head">
              <h1>Registrate</h1>
          </div>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="InputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                  <spam id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                  </spam>
              </div>

              <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="InputPassword1"
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
              </div>
              <button type="submit" className="btn btn-primary">
                  Submit
              </button>

          </form>
    </div>
    
    <div className="container-login">
        <div className="form-head">
            <h1>Login</h1>
        </div>
          <form>
              <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="InputEmail2"
                        aria-describedby="emailHelp"
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
              </div>
              <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                      type="password"
                      className="form-control"
                      id="InputPassword2"
                      placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">
                  Submit
              </button>
          </form>
    </div>
    </>
  );
};
