function Register() {
    return (
        <section id="registerPage">
    <form>
        <fieldset>
            <legend>Register</legend>

            <label for="email" className="vhide">Email</label>
            <input id="email" className="email" name="email" type="text" placeholder="Email" />
            <label for="password" className="vhide">Password</label>
            <input id="password" className="password" name="password" type="password" placeholder="Password" />
            <label for="conf-pass" className="vhide">Confirm Password:</label>
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