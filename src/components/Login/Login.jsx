import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} fieldType="input" component={FormControl} name={"login"} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} fieldType="input" type="password" component={FormControl} name={"password"} validate={[required]} />
            </div>
            <div>
                <Field type={"checkbox"} fieldType="input" component={FormControl} name={"rememberMe"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
)}

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to="/profile" />
    }
    
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);