import React from "react";
import queryString from "query-string";
import { Redirect } from "react-router-dom";

export default function About(props) {
  // console.log(props.location.search);
  // const name = new URLSearchParams(props.location.search).get("name");
  const { name } = queryString.parse(props.location.search);
  if (name === undefined) {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
  if (name === "redirect") {
    return <Redirect to="/" />;
    // 렌더되는 순간에 routing이 홈으로 바뀐다.
    // 로그인을 할때 ?
  }
  return (
    <div>
      <h1> About : {name} </h1>
    </div>
  );
}
