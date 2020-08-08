import React from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  state = {
    userId: "",
    userPw: "",
    isBtnDisabled: true,
    btnStatus: "loginBtn",
  };

  handleChange = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    this.handleBtn();
  };

  handleBtn = () => {
    if (this.state.userId.includes("@") && this.state.userPw.length >= 5) {
      this.setState({ isBtnDisabled: false, btnStatus: "loginBtn-active" });
    } else {
      this.setState({ isBtnDisabled: true, btnStatus: "loginBtn" });
    }
  };

  goToMain = () => {
    if (true) {
      this.props.history.push("/main-yeonuk");
    } else {
      alert("잘못된 접근입니다.");
    }
  };

  render() {
    return (
      <div className="LoginY">
        <main>
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
            <form
              className="getId"
              onChange={(e) => {
                this.handleChange(e);
              }}
            >
              <input
                id="id"
                className="receiveLogin"
                type="text"
                name="userId"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={this.state.userId}
              />
              <input
                id="password"
                className="receiveLogin"
                type="password"
                name="userPw"
                placeholder="비밀번호"
                value={this.state.userPw}
              />
              <button
                className={this.state.btnStatus}
                type="submit"
                onClick={this.goToMain}
                disabled={this.state.isBtnDisabled}
              >
                로그인
              </button>
            </form>
            <div className="forgetPw">비밀번호를 잊으셨나요?</div>
          </section>
        </main>
      </div>
    );
  }
}

export default withRouter(Login);
