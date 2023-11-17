import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} fieldType="input" component={FormControl} name={"login"} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} fieldType="input" component={FormControl} name={"password"} validate={[required]} />
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
        console.log(formData);
    }
    
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;