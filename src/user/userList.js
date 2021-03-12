import React from 'react';
import { store } from '../redux';
import Badge from 'react-bootstrap/Badge';
import { Container, Table } from 'react-bootstrap';
import { USER_DETAILS, USER_SERVICE_URL } from '../common';

class UserList extends React.Component {

    state = {
        data: [],
        userDetails: {},
    }

    componentWillMount() {
        this.getUserList();
        store.subscribe(() => {
            let data = store.getState();
            this.setState({ userDetails: data.USER_DETAILS })
        })
    }

    componentDidMount() {

    }

    logout() {
        window.localStorage['auth_token'] = '';
        store.dispatch({ type: USER_DETAILS, value: {}, key: USER_DETAILS })
        store.subscribe(() => {
            this.setState({ userDetails: store.getState() })
        })
    }

    getUserList() {
        const res = fetch(`${USER_SERVICE_URL}/users`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Token ' + window.localStorage['auth_token'],
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("data", responseJson);
                if (responseJson && responseJson.length > 0) {
                    this.setState({ data: responseJson })
                } else {
                    this.logout();
                    return (this.props.history.push("/home"));
                }
            })
            .catch((error) => {
                return (this.props.history.push("/home"));
                console.error(error);
            });
    }

    render() {
        return (
            <Container >
                <h4 style={{ margin: 20 }}>User List</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            {this.state.userDetails && this.state.userDetails.role_id == 1 ? (<><th>Action</th></>) : (<></>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((obj, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{obj?.name}</td>
                                        <td>{obj?.email}</td>
                                        <td><h5>
                                            {obj?.role_id == 1 ? <>
                                                <Badge pill variant="primary" style={{ color: 'green' }} >Admin</Badge>
                                            </> : <>
                                                <Badge pill variant="success" style={{ color: 'blue' }}>Employee </Badge>
                                            </>}
                                        </h5>
                                        </td>
                                        {this.state.userDetails?.role_id == 1 ? (<>
                                            <td>
                                                <a data-toggle="tooltip" title="Edit" onClick={() => { alert() }}> <i class="fa fa-edit" style={{ color: 'blue', fontSize: 25 }}></i></a>
                                                <a data-toggle="tooltip" title="Delete" onClick={() => { this.deleteObject(obj.id) }}><i class="fa fa-remove" style={{ color: 'red', fontSize: 25, marginLeft: 10 }}></i></a>
                                            </td>
                                        </>) : (<></>)}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }

    deleteObject(id) {
        const res = fetch(`${USER_SERVICE_URL}/users/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Token ' + window.localStorage['auth_token'],
            }
        })
            .then((response) => this.getUserList())
            .catch((error) => {
                console.error(error);
            });
    }
}
export default UserList