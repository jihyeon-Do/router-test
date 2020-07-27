import React from "react";
import { withRouter } from "react-router-dom";

function LoginButton({ history }) {
  return <button onClick={click}>로그인</button>;

  function click() {
    // 호이스팅됨 그래서 가장 아래에 작성하는 경우가 많음
    setTimeout(() => {
      // 이동
      console.log("이동");
      // location은 eslint에서 권장하지 않는다.
      history.push("/");
    }, 1000);
  }
}

export default withRouter(LoginButton);
