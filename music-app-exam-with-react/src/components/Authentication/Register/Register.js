import { register } from '../../../services/authService.js';
import { saveUserDataToStorage } from '../../../utils.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({
    onRegister,
}) {
    let navigate = useNavigate();

    const formOnSubmitHandler = (e) => {
        e.preventDefault();

        let formElement = e.target;

        let formData = new FormData(formElement);

        let email = formData.get('email');
        let password = formData.get('password');
        let rePassword = formData.get('conf-pass');

        if (password != rePassword) {
            alert('Passwords aren\'t matching');
            return;
        }

        let userData = {
            email,
            password,
        }

        register(userData)
        .then(userInfo => {
            onRegister(userInfo);
            saveUserDataToStorage(userInfo);
            navigate('/');
        })
        
    }

    return (
        <section id="registerPage">
    <form onSubmit={formOnSubmitHandler}>
        <fieldset>
            <legend>Register</legend>

            <label htmlFor="email" className="vhide">Email</label>
            <input id="email" className="email" name="email" type="text" placeholder="Email" />
            <label htmlFor="password" className="vhide">Password</label>
            <input id="password" className="password" name="password" type="password" placeholder="Password" />
            <label htmlFor="conf-pass" className="vhide">Confirm Password:</label>
            <input id="conf-pass" className="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password" />
            <button type="submit" className="register">Register</button>

            <p className="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
    )
}

export default Register;