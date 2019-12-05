import React from 'react';
import './Login.css';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import { login } from '../../redux/auth-reducer';
import { Redirect } from "react-router-dom";



const LoginForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div className = "avtorize">
            <div>
                <Field placeholder={"Email"}  name={"email"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"} type={"password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> запомнить меня
            </div>
            <div>
                <button>Войти</button>
            </div>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({form: 'login'}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        /*props.login(formData.email, formData.password, formData.rememberMe);*/
        }

if (props.isAuth) {
    return <Redirect to={"/Profile"} />
}

    return <div className="text">
        <h1>Авторизация</h1>
       <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {})(Login);



