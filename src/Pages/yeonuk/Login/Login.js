import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  state = {
    userId: "",
    userPw: "",
    isBtnDisabled: true,
    btnStatus: "",
  };

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      this.handleBtn
    );
  };

  handleBtn = () => {
    if (this.state.userId.includes("@") && this.state.userPw.length >= 5) {
      this.setState({ isBtnDisabled: false, btnStatus: "loginBtn-active" });
    } else {
      this.setState({ isBtnDisabled: true, btnStatus: "" });
    }
  };

  goToMain = () => {
    if (true) {
      this.props.history.push("/main-yeonuk");
    } else {
      alert("잘못된 접근입니다.");
    }
  };
  //서버와 연동한 로그인 기능(인가) 구현될 경우,
  // if, elseif문 추가해서 메인페이지 이동 또는 상황별 메세지 출력기능 추가예정

  render() {
    const { userId, userPw, isBtnDisabled, btnStatus } = this.state;
    return (
      <main className="LoginY">
        <div className="loginContents">
          <section className="imageSection">
            <img
              alt="smartphone that running instagram application"
              src="/images/yeonuk/main__left.png"
            />
          </section>
          <section className="loginSection">
            <div className="logo">
              <img alt="Instagram logo" src="/images/common/textLogo.png" />
            </div>
            <form className="getId" onChange={this.handleChange}>
              <input
                id="id"
                className="receiveLogin"
                type="text"
                name="userId"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={userId}
              />
              <input
                id="password"
                className="receiveLogin"
                type="password"
                name="userPw"
                placeholder="비밀번호"
                value={userPw}
              />
              <button
                className={`loginBtn ${btnStatus}`}
                type="submit"
                onClick={this.goToMain}
                disabled={isBtnDisabled}
              >
                로그인
              </button>
            </form>
            <div className="forgetPw">비밀번호를 잊으셨나요?</div>
          </section>
        </div>
      </main>
    );
  }
}

export default withRouter(Login);
