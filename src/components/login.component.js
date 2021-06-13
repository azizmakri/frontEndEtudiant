import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import './login.component.css'
import AuthService from "../services/auth.service";
import CheckButton from "react-validation/build/button";
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeCin = this.onChangeCin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      cin: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeCin(e) {
    this.setState({
      cin: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.cin, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }


  render() {
    return (
    
      <html>
    
<head>


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>

</head>

<body>
  
	<div class="container h-100">
    
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div >
          <img src="./images/user.png" class="brand_logo" alt="Logo" style={{ 
            marginLeft :"42%",
            marginTop:"-15%",
            height:"150px",
            width:"150px"
           
       
          }}/>
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
        <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
						<div class="input-group mb-3">
					
							<Input  type="text"
                class="form-control" 
                placeholder="Cin"
                name="cin"
                value={this.state.cin}
                onChange={this.onChangeCin}
                validations={[required]}/>
						</div>
						<div class="input-group mb-2">
					
							<Input  type="password"
                class="form-control" 
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}/>
						</div>
			
			
            <div className="form-group">
              <button
                class="btn btn-warning" 
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
                        <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
					</Form>
				</div>
		
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="#" class="ml-2">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
    );
  }
}
