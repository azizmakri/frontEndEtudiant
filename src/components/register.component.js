import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";
import './register.component.css'
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        This field is required!
      </div>
    );
  }
};
const FormItem = Form.Item;
const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vcin = value => {
  if (value.length < 8 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        cin must be between 8 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
const vnom = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        nom must be between 3 and 20 characters.
      </div>
    );
  }
};
const vprenom = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        prenom must be between 3 and 40 characters.
      </div>
    );
  }
};


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeCin = this.onChangeCin.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangePays = this.onChangePays.bind(this);
    this.onChangeType_bac = this.onChangeType_bac.bind(this);
    this.onChangeMoyenne_bac= this.onChangeMoyenne_bac.bind(this);
    this.onChangeCode_fac = this.onChangeCode_fac.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    

    this.state = {
      cin: "",
      nom: "",
      prenom: "",
      tel: "",
      pays: "",
      type_bac: "",
      moyenne_bac: "",
      code_fac: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeCin(e) {
    this.setState({
      cin: e.target.value
    });
  }
  onChangeNom(e) {
    this.setState({
      nom: e.target.value
    });
  }
  onChangePrenom(e) {
    this.setState({
      prenom: e.target.value
    });
  }
  onChangeTel(e) {
    this.setState({
      tel: e.target.value
    });
  }
  onChangePays(e) {
    this.setState({
      pays: e.target.value
    });
  }
  onChangeType_bac(e) {
    this.setState({
      type_bac: e.target.value
    });
  }
  onChangeMoyenne_bac(e) {
    this.setState({
      moyenne_bac: e.target.value
    });
  }
  onChangeCode_fac(e) {
    this.setState({
      code_fac: e.target.value
    });
  }



  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.cin,
        this.state.nom,
        this.state.prenom,
        this.state.tel,
        this.state.pays,
        this.state.type_bac,
        this.state.moyenne_bac,
        this.state.code_fac,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render(){
    return (
      
     
      <div class="container">
      <div class="d-flex justify-content-center h-100">
      <div class="card2">
      
      <div class="card-header">
    <h3>SignUp</h3>
    
  </div>
  <div class="card-body">

  <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}>
        
          
            {!this.state.successful && (
              <div>
               
                <div class="input-group form-group">

                  <Input
                    type="text"
                    className="form-control"
                    name="cin"
                    placeholder="Cin"
                    value={this.state.cin}
                    onChange={this.onChangeCin}
                    validations={[required, vcin]}
                  />
                 </div>
               <div class="input-group form-group">

                  <Input
                    type="text"
                    className="form-control"
                    name="nom"
                    placeholder="Nom"
                    value={this.state.nom}
                    onChange={this.onChangeNom}
                    validations={[required, vnom]}
                  />
                 </div>
               <div class="input-group form-group">

                  <Input
                    type="text"
                    className="form-control"
                    name="prenom"
                    placeholder="Prenom"
                    value={this.state.prenom}
                    onChange={this.onChangePrenom}
                    validations={[required, vprenom]}
                  />
                 </div>
                <div class="input-group form-group">

                  <Input
                    type="text"
                    className="form-control"
                    name="tel"
                    placeholder="Telephone"
                    value={this.state.tel}
                    onChange={this.onChangeTel}
                    
                  />
                 </div>
                 <div class="input-group form-group">

                  <Input
                    type="text"
                    className="form-control"
                    name="pays"
                    placeholder="Pays"
                    value={this.state.pays}
                    onChange={this.onChangePays}
                    
                  />
                 </div>
                <div class="input-group form-group">

                  <Input
                    type="text"
                    className="form-control"
                    name="type_bac"
                    placeholder="Type du bachalaureat"
                    value={this.state.type_bac}
                    onChange={this.onChangeType_bac}
                    
                  />
                   </div>
                 <div class="input-group form-group">

                  <Input
                    type="text"
                    className="form-control"
                    name="moyenne_bac"
                    placeholder="Moyenne du bachalaureat"
                    value={this.state.moyenne_bac}
                    onChange={this.onChangeMoyenne_bac}
                    
                  />
                 </div>
            <div class="input-group form-group">

                  <Input
                    type="text"
                    className="form-control"
                    name="code_fac"
                    placeholder="Code du faculte"
                    value={this.state.code_fac}
                    onChange={this.onChangeCode_fac}
                    
                  />
                 </div>
                
                <div className="form-group">
               
                  <Input
                    type="text"
                    className="form-control" 
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
            
                </div>
            
                <div class="input-group form-group">
 
                  <Input
                    type="password"
                    className="form-control" 
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
               
                </div>

                <div className="form-group">
                  <button class="btn btn-warning">Sign Up</button>
                </div>
            
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
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
  <div class="card-footer">
    <div class="d-flex justify-content-center links">
      You have already an account?<a href="/login"  >SignIn</a>
    </div>

  </div>
</div>
</div>
</div>

    )}
}
