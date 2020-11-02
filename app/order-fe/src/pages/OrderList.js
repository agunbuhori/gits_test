import { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class OrderList extends Component {
    state = {
        lists: []
    }

    componentDidMount() {
        this.fetchOrders();
    }

    async fetchOrders() {
        const lists = await fetch("http://localhost:3000/order");
        const response = await lists.json();
        this.setState({lists: response})
    }
    async cancelOrder(id, that) {
        await fetch("http://localhost:3000/order/cancel/"+id, {method: 'PUT'});
    }
    render() {
        const { lists } = this.state;
        return (
            <Container>
                <Link className="btn btn-primary mb-3" to="/new">New Order</Link>
                <Table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Amoun</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        lists.map((item, index) => 
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td><Link to={"/detail/"+item.id}>{item.name}</Link></td>
                                <td>{item.amount}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <td>
                                    <Button className="btn btn-danger btn-sm" onClick={() => this.cancelOrder(item.id, this)}>Cancel</Button>
                                </td>
                            </tr>
                        )
                    }
                        
                    </tbody>
                </Table>
            </Container>
        )
    }
}


const mapStateToProps = state => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);