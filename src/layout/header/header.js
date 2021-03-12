import React from 'react';
import { store } from '../../redux';
import Badge from 'react-bootstrap/Badge';
import { USER_DETAILS } from '../../common';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, Form, Button, Modal, Table } from "react-bootstrap";

class Header extends React.Component {

  state = {
    userDetails: {},
    show: false
  }

  componentDidMount() {
    store.subscribe(() => {
      let data = store.getState();
      this.setState({ userDetails: data.USER_DETAILS })
    })
  }

  render() {

    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Link className='nav-link' to="/home">
            <Navbar.Brand >Grassroots</Navbar.Brand></Link>
          <Nav className="mr-auto">
            <Link className='nav-link' to="/home">Home<Nav.Link ></Nav.Link></Link>
            <Link className='nav-link' to="/about" >About<Nav.Link></Nav.Link></Link>
            {this.state.userDetails && this.state.userDetails.name ? (<>
              <Link className='nav-link' to="/user-list" >User<Nav.Link></Nav.Link></Link>
            </>) : (<></>)
            }

          </Nav>

          {this.state.userDetails && this.state.userDetails.name ? (
            <>
              <Form className="float-right" style={{ marginRight: 10 }} inline>
                <Button variant="outline-light" onClick={() => { this.setState({ show: true }) }}>Profile</Button>
              </Form>
              <Form className="float-right" inline>
                <Button variant="outline-light" onClick={() => { this.logout() }}>Logout</Button>
              </Form>
            </>
          ) : (
            <Form className="float-right" inline>
              <Link to="/login">
                <Button variant="outline-light">Login</Button>
              </Link>
            </Form>
          )}
        </Navbar>



        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {`welcome back...${this.state.userDetails.name}`}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <td>{this.state.userDetails.name}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Email</th>
                  <td>{this.state.userDetails.email}</td>
                </tr>

                <tr>
                  <td>Role</td>
                  <td>
                    {this.state.userDetails?.role_id == 1 ? <>
                      <Badge pill variant="primary" style={{ color: 'green' }} >Admin</Badge>
                    </> : <>
                      <Badge pill variant="success" style={{ color: 'blue' }}>Employee </Badge>
                    </>}
                  </td>
                </tr>

              </tbody>
            </Table>
          </Modal.Body>
        </Modal>

      </>)
  }
  logout() {
    window.localStorage['auth_token'] = '';
    store.dispatch({ type: USER_DETAILS, value: {}, key: USER_DETAILS })
    store.subscribe(() => {
      this.setState({ userDetails: store.getState() })
    })
    // console.log("this.props.", windows.location);
    // return (this.props.history.push("home"));
  }
}
export default Header
