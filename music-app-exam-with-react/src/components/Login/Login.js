function Login() {
    return (
        <section id="loginPage">
    <form>
        <fieldset>
            <legend>Login</legend>

            <label for="email" className="vhide">Email</label>
            <input id="email" className="email" name="email" type="text" placeholder="Email" />
            <label for="password" className="vhide">Password</label>
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