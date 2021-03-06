import React from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';
import { USER_DETAILS, USER_SERVICE_URL } from '../../common';
import { store } from '../../redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>Login</h1>
            <Form style={{ marginTop: 20 }} onSubmit={(e) => { e.preventDefault(); this.onLogin(); }} >
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
              <Link to="/registration">Create New User</Link>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }

  onLogin() {
    if (this.state.email && this.state.password) {
      let data = {
        email: this.state.email.toString(),
        password: this.state.password.toString()
      }
      const res = fetch(`${USER_SERVICE_URL}/login`, {
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
          if (responseJson.success) {
            toast('login successfully' + '  ' + String(responseJson?.data?.User?.name).toUpperCase());
            window.localStorage['auth_token'] = responseJson?.data?.Token;
            store.dispatch({ type: USER_DETAILS, value: responseJson?.data?.User, key: USER_DETAILS })
            return ( this.props.history.push("/home"));
          }else{
            toast.error(responseJson.error)
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
export default Login


