import { jwtDecode } from "jwt-decode";

export const isAuthentication = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  let decodToken = "";

  if(token) {
    decodToken = jwtDecode(token);
  }

  //const currentTimestamp = Math.floor(Date.now() / 1000);
  return token && decodToken.exp * 1000 > Date.now() ? true : false;

};


//import { jwtDecode } from "jwt-decode";

//const isAuthentication = () => {

//  const token = localStorage.getItem("token");
//  console.log(token);

//  const decodToken = jwtDecode(token);

//  return (
//    token && decodToken.exp * 1000 > Date.now() ? true : false
// )
//}

//export default isAuthentication;

