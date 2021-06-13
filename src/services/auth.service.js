import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(cin, password) {
    return axios
      .post(API_URL + "signinEtudiant", {
        cin,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("etudiant", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("etudiant");
  }

  register(cin,nom,prenom,tel,pays,type_bac,moyenne_bac,code_fac, email, password) {
    return axios.post(API_URL + "signupEtudiant", {
      cin,
      nom,
      prenom,
      tel,
      pays,
      type_bac,
      moyenne_bac,
      code_fac,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('etudiant'));;
  }
}

export default new AuthService();
