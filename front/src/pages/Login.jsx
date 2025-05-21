import Form from "../components/LoginForm";
import '../styles/loginForm.css'

export default function Login() {

    const loginInputs = [
        {
            label: 'Email',
            type: 'Email',
            placeHolder: 'Email',
            ariaLabel: 'Email',
        },
        {
            label: 'Senha',
            type: 'Senha',
            placeHolder: 'Senha',
            ariaLabel: 'Senha',
        }
    ];

    return (
        <>
            <div className="login-form">
                <div className="login-form-wrapper">
                    <h1>Login</h1>
                    <Form inputs={loginInputs} className="login-form"></Form>
                </div>
            </div>
        </>
    )

}