import React, { useState } from "react";
import AuthUser1 from "./AuthUser1";

const Login1 = () => {
  const { http, setToken } = AuthUser1();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    http
      .post("/admin-login", { email: username, password: password })
      .then((res) =>
        setToken(res?.data?.data?.firstName, res?.data?.access_token)
      );
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Login Page</h2>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
};

export default Login1;
