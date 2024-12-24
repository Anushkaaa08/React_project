import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  
    if (!emailPattern.test(formData.email)) {
      setError('Invalid email format');
      return;
    }
  
    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (user) => user.username === formData.email && user.password === formData.password
    );
    if (user) {
      console.log('Login successful');
      setError('');
      
    } else {
      setError('User does not exist');
    }
  };

  const handleSignup = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.username === formData.email);
    if (userExists) {
      setError('User already exists');
      return;
    }
    const newUser = {
      username: formData.email,
      password: formData.password,
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Signup successful');
    setError('');
    setIsLogin(true); 
  };

  return (
    <div style={{ backgroundColor: '#fbecea', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '400px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
            <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
    required
  />
</div>
{error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
              required
            />
          </div>
          {!isLogin && (
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                required
              />
            </div>
          )}
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <button
            type="submit"
            style={{ width: '100%', padding: '10px', backgroundColor: '#b0dcd1', color: '#00000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: 'gray', cursor: 'pointer' }}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export { AuthForm };
