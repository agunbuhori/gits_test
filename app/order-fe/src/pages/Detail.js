import { Component } from "react";
import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Detail extends Component {
    state = {
        id: null,
        order: {}
    }

    componentDidMount() {
        const { id } = this.props.match.params


        this.setState({id});

        if (this.state.id !== null)
        this.fetchOrders();
    }

    async fetchOrders() {
        const order = await fetch("http://localhost:3000/order/"+this.state.id);
        const response = await order.json();
        this.setState({order: response});
        console.log(response);
    }
    render() {
        const { lists } = this.state;
        return (
            <Container>
               <h1>Lorem</h1>
               <Table>
                   <tbody>
                       <tr>
                           <td>Price</td>
                           <th></th>
                       </tr>
                   </tbody>
               </Table>
            </Container>
        )
    }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);