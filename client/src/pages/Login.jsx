import {Link} from "react-router-dom"
<<<<<<< HEAD
const Login = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-3">Login Your Account</h1>
      <form>
=======
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Login = ({setToken}) => {
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", e.target.email.value); // Use e.target.email.value
      formData.append("password", e.target.password.value); // Use e.target.password.value
  
      // Log form data
      for (let [key, value] of formData.entries()) {
        console.log(`${key}`, value);
      }
  
      const response = await axios.post("https://mentorship-platform-9tzl.onrender.com/api/user/login", formData, {
        headers: {
          "Content-Type": 'application/json'
        }
      });
  if(response.data.success){
    setToken(response.data.token);
    console.log(response);
    navigate('/');
  }else{
    throw new Error(response.data.msg);
  }
      
    } catch (err) {
      console.error("Error during login:", err.message); // More descriptive error logging
    }
  };
  return (
    <div className="container mt-4">
      <h1 className="mb-3">Login Your Account</h1>
      <form onSubmit={handlesubmit}>
>>>>>>> 2d644cd (files)
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
<<<<<<< HEAD
          <input type="email" className="form-control" id="email" />
=======
          <input type="email" className="form-control" id="email" name ="email"/>
>>>>>>> 2d644cd (files)
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
<<<<<<< HEAD
          <input type="password" className="form-control" id="password" />
=======
          <input type="password" className="form-control" id="password" name="password"/>
>>>>>>> 2d644cd (files)
        </div>
        <div className="mb-3">
          <p> Create an Account ? <Link to="/signup">Sign up</Link></p>
        </div>
        <button type="submit" className="btn btn-warning">
          Sign in
        </button>
      </form>
    </div>
  );
};

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> 2d644cd (files)