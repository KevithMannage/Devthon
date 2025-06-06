// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import axios from 'axios'; // Import axios for making HTTP requests
// import './Login.css';
// import googleIcon from '/images/google.png';
// import { ToastContainer, toast } from 'react-toastify';

// const LoginPage = () => {

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Initialize navigation

//   // Handle click for Profession signup
//   const handleClickProfession = () => {
//     navigate('/professionsignup');
//   };

//   // Handle click for User signup
//   const handleClickUser = () => {
//     navigate('/usersignup');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate input fields
//     if (!username || !password) {
//       toast.error('Please fill in all fields!');
//       return;
//     }

//     try {
//       // Send a POST request to login the user
//       const response = await axios.post('http://localhost:3000/user/loginuser', {
//         username,
//         password,
//       });

//       // Handle the response
//       if (response.data.status) {
//         localStorage.setItem("userid",response.data.id);
//         console.log('Login successful');
//         localStorage.setItem("username",username);
//         navigate('/dashboard'); // Redirect to Dashboard
//       } else {
//         toast.error('Invalid username or password!');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       toast.error('Invalid username or password!');
//     }
//   };

//   return (
//     <div className="login-container">
//       <ToastContainer position="bottom-left" pauseOnHover/>
//       <div className="left-section">
//         <div className="logo">
//           <img src="/images/3.png" alt="Professional" className="logo-icon" />
//           <span className="logo-text">
//             <h1>Sign in to</h1>
//             <h2>GuidelineX is simply (user)</h2>
//             <p>
//               GuidelineX is a user-friendly platform that provides individuals across various fields, helping them achieve success in their future endeavors.
//             </p>
//           </span>        
//         </div>
       
//         <div className="user-section">
//           <p className ="give_de"> If you dont have an account please Signup</p>
//               <button className="account-button" onClick={handleClickProfession}>
//                 <span>👨🏻‍💼 Signup as Professional</span>
//               </button>
//               <button className="account-button" onClick={handleClickUser}>
//                 <span>👨🏻‍💻 Signup as User</span>
//               </button>
//         </div>
//       </div>

//       <div className="right-section">
//         <h3><span className="welcome-text">Welcome to</span> <span className="guidelinex-text">GuidelineX</span></h3>
//         <h4>Sign in</h4>
//         <button className="google-signin">
//           <img src={googleIcon} alt="Google Icon" />
//           Sign in with Google
//         </button>
//         <div className="divider">or</div>
//         <form onSubmit={handleSubmit}>
//           <label>Username or email address</label>
//           <input
//             type="text"
//             placeholder="Enter your username or email address"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <a href="/forgetpassword" className="forgot-password">Forgot Password</a>
//           <a href="/professional_login" className="forgot-password">Profession Login</a>
//           <button type="submit" className="signin-btn">Sign in</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios for making HTTP requests
import './Login.css';
import googleIcon from '/images/google.png';
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigation

  // Handle click for Profession signup
  const handleClickProfession = () => {
    navigate('/professionsignup');
  };

  // Handle click for User signup
  const handleClickUser = () => {
    navigate('/usersignup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!username || !password) {
      toast.error('Please fill in all fields!');
      return;
    }

    try {
      // Send a POST request to login the user
      const response = await axios.post('https://devthonbackend-production.up.railway.app/user/loginuser', {
        username,
        password,
      });

      // Handle the response
      if (response.data.status) {
        localStorage.setItem("userid",response.data.id);
        localStorage.setItem("role",response.data.role);
        localStorage.setItem("username",response.data.username);
        localStorage.setItem("profileimage",response.data.profileImage);
        console.log('Login successful');
        navigate('/dashboard'); // Redirect to Dashboard
      } else {
        toast.error('Invalid username or password!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Invalid username or password!');
    }
  };

  return (
    <div className="login-container">
      <ToastContainer position="bottom-left" pauseOnHover/>
      <div className="left-section">
        <div className="logo">
          <img src="/images/3.png" alt="Professional" className="logo-icon" />
          <span className="logo-text">
            <h1>Sign in to</h1>
            <h2>GuidelineX is simply (user)</h2>
            <p>
              GuidelineX is a user-friendly platform that provides individuals across various fields, helping them achieve success in their future endeavors.
            </p>
          </span>        
        </div>
       
        <div className="user-section">
          <p className ="give_de"> If you dont have an account please Signup</p>
              <button className="account-button" onClick={handleClickProfession}>
                <span>👨🏻‍💼 Signup as Professional</span>
              </button>
              <button className="account-button" onClick={handleClickUser}>
                <span>👨🏻‍💻 Signup as User</span>
              </button>
        </div>
      </div>

      <div className="right-section">
        <h3><span className="welcome-text">Welcome to</span> <span className="guidelinex-text">GuidelineX</span></h3>
        <h4>Sign in</h4>
        <button className="google-signin">
          <img src={googleIcon} alt="Google Icon" />
          Sign in with Google
        </button>
        <div className="divider">or</div>
        <form onSubmit={handleSubmit}>
          <label>Username or email address</label>
          <input
            type="text"
            placeholder="Enter your username or email address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="/forgetpassword" className="forgot-password">Forgot Password</a>
          <a href="/professional_login" className="forgot-password">Profession Login</a>
          <button type="submit" className="signin-btn">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;