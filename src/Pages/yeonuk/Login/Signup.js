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
            {INPUT_CONTENTS.map((el) => {
              return (
                <input
                  name={el.name}
                  type={el.type}
                  placeholder={el.placeholder}
                />
              );
            })}
            <button type="button" onClick={this.goToLogin}>
              Submit
            </button>
          </form>
        </div>
      </main>
    );
  }
}

const INPUT_CONTENTS = [
  {
    name: "name",
    type: "text",
    placeholder: "이름을 입력해주세요",
  },
  {
    name: "phoneNumber",
    type: "text",
    placeholder: "전화번호를 입력해주세요",
  },
  {
    name: "email",
    type: "text",
    placeholder: "email을 입력해주세요",
  },
  {
    name: "password",
    type: "password",
    placeholder: "password를 입력해주세요",
  },
];

export default withRouter(Signup);
