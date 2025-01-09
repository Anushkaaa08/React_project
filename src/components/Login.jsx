import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
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

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users', {
                params: {
                    username: formData.email,
                    password: formData.password,
                },
            });
            const user = response.data.find(
                (user) => user.username === formData.email && user.password === formData.password
            );
            if (user) {
                console.log('Login successful');
                setError('');

                // Store user data in local storage
                localStorage.setItem('user', JSON.stringify(user));
                setUser(user);
                setIsLoggedIn(true);

                // Redirect to products page
                navigate('/category');
            } else {
                setError('User does not exist');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred during login');
        }
    };

    const handleSignup = async () => {
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.get('http://localhost:3000/users');
            const users = response.data;
            const userExists = users.some((user) => user.username === formData.email);

            if (userExists) {
                setError('User already exists');
                return;
            }

            const newUser = {
                username: formData.email,
                password: formData.password,
            };

            await axios.post('http://localhost:3000/users', newUser);
            console.log('Signup successful');
            setError('');
            setIsLogin(true);
        } catch (error) {
            console.error('Error signing up:', error);
            setError('An error occurred during signup');
        }
    };

    const handleLogout = () => {
        // Remove user data from local storage
        localStorage.removeItem('user');
        setUser(null);
        setIsLoggedIn(false);
        // Redirect to login page
        navigate('/login');
    };

    return (
        <div style={{ backgroundColor: '#fbecea', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '400px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', borderRadius: '8px', marginTop: '70px' }}>
                {isLoggedIn ? (
                    <div>
                        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Leaving so soon, {user.username}</h2>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <button
                                onClick={handleLogout}
                                style={{ width: '100%', padding: '10px', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
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
                )}
            </div>
        </div>
    );
};

export { AuthForm };
