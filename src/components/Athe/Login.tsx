import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Here you would typically make an API call to authenticate the user
        console.log('Login attempt with:', { email, password });

        // On successful login
        alert('Login successful!');
        // You would typically redirect the user or update app state here
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow">
      <div className="flex border-b mb-6">
        <button className="flex-1 py-2 font-semibold border-b-2 border-black">Login</button>
        <button className="flex-1 py-2 text-gray-500">Register</button>
      </div>
      <h1 className="text-2xl font-bold mb-2">Login</h1>
      <p className="text-gray-500 mb-6">Enter your credentials to access your account</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full border rounded px-3 py-2 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border rounded px-3 py-2 pr-10 ${errors.password ? 'border-red-500' : ''}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye h-4 w-4"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}

export default Login;
