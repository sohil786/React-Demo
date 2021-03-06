import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { USER_DETAILS, USER_SERVICE_URL } from '../common';
import { store } from '../redux';
class UserList extends React.Component {

    state = {
        data: []
    }
    componentWillMount() {
        this.getUserList();
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
                            <th>Action</th>
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
                                        <td>
                                            <a data-toggle="tooltip" title="Edit" onClick={() => { alert() }}> <i class="fa fa-edit" style={{ color: 'blue', fontSize: 25 }}></i></a>
                                            <a data-toggle="tooltip" title="Delete" onClick={() => { this.deleteObject(obj.id) }}><i class="fa fa-remove" style={{ color: 'red', fontSize: 25, marginLeft: 10 }}></i></a>
                                        </td>
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