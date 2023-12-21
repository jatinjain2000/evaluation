import React, { useState } from 'react';

const Login = () => {
    const [isSignUpActive, setSignUpActive] = useState(true);

    const handleToggle = () => {
        setSignUpActive(!isSignUpActive);
    };

    return (
        <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
            <div className={`form-container ${isSignUpActive ? 'sign-up' : 'sign-in'}`}>
                {isSignUpActive ? (
                    <form>
                        <h1>Create Account</h1>
                        <span>User for Email for Verification</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign up</button>
                    </form>
                ) : (
                    <form>
                        <h1>Sign In</h1>
                        {/* <span>Enter email and password</span> */}
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password</a>
                        <button>Sign In</button>
                    </form>
                )}
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className={`toggle-panel ${isSignUpActive ? 'toggle-left' : 'toggle-right'}`}>
                        {isSignUpActive ? (
                            <>
                                <h1>Welcome Back!</h1>
                                <p>Enter your email and password to login</p>
                                <button onClick={handleToggle}>Sign In</button>
                            </>
                        ) : (
                            <>
                                <h1>Hello, Friend!</h1>
                                <p>Register with your email</p>
                                <button onClick={handleToggle}>Sign Up</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
