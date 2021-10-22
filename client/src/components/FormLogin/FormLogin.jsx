import React from 'react'
import { Button, Form, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bicicleta from '../../assets/images/bi.jpg'
import './FormLogin.css'
import GoogleLogin from "react-google-login";
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';

export const FormLogin = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: 'aleja@gmail.com',
        password: '1225'
    });


    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password)
        dispatch(startLoginEmailPassword(email, password));
    }

    //Google

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <div>
            <Container className="login-container">
                <Row>

                    <Col xs={8}>
                        <Image src={bicicleta} rounded fluid />
                    </Col>
                    <Col xs={4}>
                        <h1> Bienvenido </h1>
                        <br />
                        <Form onSubmit={handleLogin} className="text-start">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu contraseña" name="password" value={password} onChange={handleInputChange} />
                            </Form.Group>
                            <Link to={'/home'} className="link">¿Has olvidado tu contraseña?</Link>
                            <br />
                            <br />
                            <Button 
                                className="login" 
                                variant="primary" 
                                type="submit"  
                                disabled={ loading }
                            >
                                Iniciar sesión
                            </Button>
                            {/* <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                // disabled={loading}
                            >
                                Login
                            </button> */}
                        </Form>
                        <br />
                        <div className="auth__social-networks">
                            <p>Login with social networks</p>

                            <div
                                className="google-btn"
                                onClick={handleGoogleLogin}
                            >
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="btn-text">
                                    <b>Sign in with google</b>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>



        </div>
    )
}
