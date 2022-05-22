import { register } from '../../services/authService.js';
import { saveUserDataToStorage } from '../../utils.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [rePassword, setRePassword] = useState('');
    let navigate = useNavigate();

    const emailOnChange = (e) => {
        e.preventDefault();
        let currElementValue = e.target.value;
        setEmail(currElementValue);
    }

    const passwordOnChange = (e) => {
        e.preventDefault();
        let currElementValue = e.target.value;
        setPassword(currElementValue);
    }

    const rePasswordOnChange = (e) => {
        e.preventDefault();
        let currElementValue = e.target.value;
        setRePassword(currElementValue);
    }

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
            console.log(userInfo);
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
            <input id="email" className="email" name="email" value={email} type="text" placeholder="Email" onChange={emailOnChange} />
            <label htmlFor="password" className="vhide">Password</label>
            <input id="password" className="password" name="password" value={password} type="password" onChange={passwordOnChange} placeholder="Password" />
            <label htmlFor="conf-pass" className="vhide">Confirm Password:</label>
            <input id="conf-pass" className="conf-pass" name="conf-pass" value={rePassword} type="password" onChange={rePasswordOnChange} placeholder="Confirm Password" />
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