import React from "react";
import { withRouter } from "react-router-dom";
import "./Signup.scss";

class Signup extends React.Component {
  state = {
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    url: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  goToLogin = () => {
    alert("회원가입이 성공적으로 완료되었습니다.");
    this.props.history.push("/login-yeonuk");
  };

  submit = () => {
    const { name, phoneNumber, email, password, url } = this.state;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((res) => {
        if (res === "success") {
          this.goToLogin();
        }
      });
  };

  render() {
    return (
      <main className="SignupY">
        <div className="signupContents">
          <img
            className="logo"
            alt="Instagram text logo"
            src="/images/common/textLogo.png"
          />
          <form className="signupInputArea" onChange={this.handleChange}>
            <input
              className="input name"
              name="name"
              placeholder="이름을 입력해주세요"
            ></input>
            <input
              className="input name"
              name="phoneNumber"
              placeholder="전화번호를 입력해주세요"
            ></input>
            <input
              className="input email"
              name="email"
              placeholder="email을 입력해주세요"
            ></input>
            <input
              className="input pw"
              name="password"
              placeholder="password를 입력해주세요"
            ></input>
            <button type="button" onClick={this.goToLogin}>
              Submit
            </button>
          </form>
        </div>
      </main>
    );
  }
}

export default withRouter(Signup);
