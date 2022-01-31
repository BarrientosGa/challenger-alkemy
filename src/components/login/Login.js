import { Formik, Form, Field, ErrorMessage } from "formik";
import getDate from "../../helpers/getDate"
import "../login/style.css"
const Login = () => {
    return (
        <div className="container-login">
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validate={(valores) => {
                    let errores = {};
                    if (!valores.email) {
                        errores.email = "Por favor ingrese un email"
                    }
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
                        errores.email = "Por favor ingrese un email valido"
                    }
                    if (!valores.password) {
                        errores.password = "Por favor ingrese una contraseña"
                    }
                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    getDate(valores)
                }}
            >
                {({ errors }) => (
                    <Form className="form-login">
                        <h1>Iniciar sesión</h1>
                        <label htmlFor="email">Email</label>
                        <Field
                            className="form-field"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingresa tu email"
                        />
                        <ErrorMessage name="email" component={() => (<p className="error">{errors.email}</p>)} />
                        <label htmlFor="password">Password</label> {/* para que elemento queremos que sea*/}
                        <Field
                            className="form-field"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                        />
                        <ErrorMessage name="password" component={() => (<p className="error">{errors.password}</p>)} />
                        <button className="form-btn">LOG IN</button>
                    </Form>
                )}

            </Formik>
        </div>

    )
};

export default Login;
