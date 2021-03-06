import React from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { USER_DETAILS, USER_SERVICE_URL } from '../../common';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '../../redux';
import { Link, Redirect } from 'react-router-dom';
toast.configure()

class Registration extends React.Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        // toastr.success('Success Message', 'Title', { displayDuration: 3000 })
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1>Registration</h1>
                        <Form style={{ marginTop: 20 }} onSubmit={(e) => { e.preventDefault(); this.onSubmit(); }} >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" value={this.state.name}
                                    onChange={(val) => { this.setState({ name: val.target.value }) }}
                                    required />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={this.state.email}
                                    onChange={(val) => { this.setState({ email: val.target.value }) }}
                                    required />
                                <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                    value={this.state.password}
                                    onChange={(val) => {
                                        this.setState({ password: val.target.value })
                                    }} placeholder="Password" required />
                            </Form.Group>
                            <Button style={{ marginTop: 10 }} variant="primary" type="submit" >Submit</Button>
                            <br />
                            <Link to="/login">Login</Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

    onSubmit() {
        if (this.state.email && this.state.password && this.state.name) {
            // alert(`${this.state.email}\n${this.state.password}`)

            let data = {
                name: this.state.name.toString(),
                email: this.state.email.toString(),
                password: this.state.password.toString(),
            }
            const res = fetch(`${USER_SERVICE_URL}/register`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("responseJson", responseJson);
                    if (responseJson.registered) {
                        window.localStorage['auth_token'] = responseJson?.token;
                        this.getProfile();
                        toast('Registration Successfully')
                        return (this.props.history.push("/home"));
                        // store.dispatch({ type: USER_DETAILS, value: responseJson?.data?.User, key: USER_DETAILS })
                    }
                })
                .catch((error) => {
                    console.error(error);
                });

        }
    }

    getProfile() {
        const res = fetch(`${USER_SERVICE_URL}/profile`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Token ' + window.localStorage['auth_token'],
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("Profile", responseJson);
                if (responseJson.success) {
                    // window.localStorage['auth_token'] = responseJson?.data?.Token;
                    store.dispatch({ type: USER_DETAILS, value: responseJson?.data, key: USER_DETAILS })
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
export default Registration


