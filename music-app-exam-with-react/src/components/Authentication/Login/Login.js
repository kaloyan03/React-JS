import { login } from '../../../services/authService.js';
import { saveUserDataToStorage } from '../../../utils.js';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 

function Login({
    onLogin,
}) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();

    const formOnSubmitHandler = (e) => {
        e.preventDefault();

        let formElement = e.target;

        let formData = new FormData(formElement);

        let email = formData.get('email');
        let password = formData.get('password');

        let userData = {
            email,
            password,
        }


        login(userData)
        .then(userInfo => {
            onLogin(userInfo);
            saveUserDataToStorage(userInfo);
            navigate('/');
        })
        
    }

    return (
        <section id="loginPage">
    <form onSubmit={formOnSubmitHandler}>
        <fieldset>
            <legend>Login</legend>

            <label htmlFor="email" className="vhide">Email</label>
            <input id="email" className="email" name="email" type="text" placeholder="Email" />
            <label htmlFor="password" className="vhide">Password</label>
            <input id="password" className="password" name="password" type="password" placeholder="Password" />
            <button type="submit" className="login">Login</button>

            <p className="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
    )
}

export default Login;