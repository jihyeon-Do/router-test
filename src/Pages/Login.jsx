import React from "react";
import LoginButton from "../components/LoginButton";

export default function Login() {
  // 이 history는 react-router-dom이 제공
  return (
    <div>
      <h1>Login</h1>
      <LoginButton />
    </div>
  );
}
