import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class table extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const tableStyle = {
            marginTop : 20+'px',
            fontSize : 13+'px'
        }
      
        return (
            <div className="container-fluid">
                <Table striped bordered hover style={tableStyle}>
                    <thead>
                        <tr>
                            <th>Id</th><th>UserId</th><th>Title</th><th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items ? this.props.items.map((item) => ( 
                                <tr key={item.id} style={item.userId === 2 ? { backgroundColor: "#FF0000"}:{}}  >
                                     <td>{item.id}</td>     
                                     <td>{item.userId}</td>
                                     <td>{item.title}</td>
                                     <td>{item.body}</td>
                                    </tr>                
                        ))
                            :
                            'Loading ...'
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
