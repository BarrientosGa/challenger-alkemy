import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { obtenerPlatos } from '../redux/foodsDuks';
const Formulario = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <Formik
                initialValues={{ search: '' }}
                validate={(values) => {
                    let errores = {};
                    if (!values.search) {
                        errores.search = 'Por favor ingrese una búsqueda'
                    }
                    else if (values.search.length < 2) {
                        errores.search = 'Por favor ingrese una búsqueda de al menos 2 caracteres'
                    }
                    return errores;
                }}
                onSubmit={(values, { resetForm }) => {
                    dispatch(obtenerPlatos(values.search))
                    navigate("/busquedaDePlatos")
                    resetForm();
                }}
            >
                {({ errors }) => (
                    <Form className='form-search'>
                        <label htmlFor='search'></label>
                        <Field
                            className='input-search'
                            type="search"
                            id="search"
                            name="search"
                            placeholder="Buscar"
                        />
                        <button type='submit'>Buscar</button>
                        <ErrorMessage name="search" component={() => (<p>{errors.search}</p>)} />
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default Formulario;
