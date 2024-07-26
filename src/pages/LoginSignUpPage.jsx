import React, { useState } from 'react';
import Login from '../components/Login/LoginForm';


const LoginSignUpPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-5 bg-zinc-900">
      <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md max-w-md w-full"> {/* Added padding */}
       <Login></Login>
      </div>
    </div>
  );
};

export default LoginSignUpPage;
