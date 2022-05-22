import { login } from '../../services/authService.js';
import { saveUserDataToStorage } from '../../utils.js';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 

function Login() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
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
            console.log(userInfo['accessToken']);
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
            <input id="email" onChange={emailOnChange} className="email" name="email" type="text" placeholder="Email" />
            <label htmlFor="password" className="vhide">Password</label>
            <input id="password" onChange={passwordOnChange} className="password" name="password" type="password" placeholder="Password" />
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