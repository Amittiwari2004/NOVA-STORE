import React, { useState } from 'react';
import { login, signup } from '../../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Spinner = () => (
  <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
  </div>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [signState, setSignState] = useState('Sign In');
  const [loading, setLoading] = useState(false);

  const toggleSignState = () => {
    setSignState(signState === 'Sign In' ? 'Sign Up' : 'Sign In');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const userAuth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (signState === 'Sign In') {
        await login(email, password);
        toast.success('Logged in successfully!');
      } else {
        await signup(username, email, password);
        toast.success('Signed up successfully!');
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-black">
      {loading && <Spinner />}
      <form onSubmit={userAuth} className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">{signState}</h1>
        {signState === 'Sign Up' && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 mb-4 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-gray-500"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 mb-4 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 mb-6 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-gray-500"
        />
        <button type="submit" className="w-full p-3 bg-gray-600 text-white rounded font-bold hover:bg-gray-700 transition duration-200">
          {signState}
        </button>
      </form>
      <p className="mt-4 text-center text-black">
        {signState === 'Sign In' ? "Don't have an account? " : "Already have an account? "}
        <button onClick={toggleSignState} className="text-black hover:underline">
          {signState === 'Sign In' ? 'Sign Up' : 'Sign In'}
        </button>
      </p>
    </div>
  );
};

export default Login;