import React from 'react'
import { Button, Form, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bicicleta from '../../assets/images/bi.jpg'
import './FormLogin.css'

export const FormLogin = () => {
    return (
        <div>
            <Container className = "login-container">
                <Row>

                    <Col xs={8}>
                        <Image src={bicicleta} rounded fluid />
                    </Col>
                    <Col xs={4}>
                        <h1> Bienvenido </h1>
                        <br/>
                        <Form   className="text-start">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                            </Form.Group>
                            <Link to={'/home'} className="link">Olvidaste tu contraseña</Link>
                            <br/>
                            <br/>
                            
                        </Form>
                        
                        <Button variant="primary" type="submit">
                                Iniciar sesión
                        </Button>
                    </Col>
                </Row>

            </Container>



        </div>
    )
}
