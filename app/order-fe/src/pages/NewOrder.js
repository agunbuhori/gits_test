import { Component } from "react";
import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { saveOrder } from "../action/order";

class NewOrder extends Component {
    state = {
        name: "",
        price: 0,
        amount: 1,
        address: "",
        customer: "agunbuhori"
    }

    async saveOrder() {
        let { name, price, amount, address, customer } = this.state;
        
        const newOrder = await fetch("http://localhost:3000/order", {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST', 
            body: JSON.stringify({
                name, price, amount, address, customer
             })
        });

        let order = await newOrder.json();
        this.props.save(order);
        this.props.history.goBack();
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        let { name, price, amount, address, customer } = this.state;
        return (
            <Container>
               <h1>New Order</h1>
               <Table>
                   <tbody>
                       <tr>
                           <td>Customer</td>
                           <th>
                               <input name="customer" disabled defaultValue={customer} className="form-control" onChange={this.handleChange.bind(this)}/>
                           </th>
                       </tr>
                       
                       <tr>
                           <td>Name</td>
                           <th>
                               <input name="name" defaultValue={name} className="form-control" onChange={this.handleChange.bind(this)}/>
                           </th>
                       </tr>

                       
                       <tr>
                           <td>Price</td>
                           <th>
                               <input name="price" defaultValue={price} type="number" className="form-control" onChange={this.handleChange.bind(this)}/>
                           </th>
                       </tr>
                       <tr>
                           <td>Amount</td>
                           <th>
                               <input name="amount" defaultValue={amount} type="number" className="form-control" onChange={this.handleChange.bind(this)}/>
                           </th>
                       </tr>
                       <tr>
                           <td>Address</td>
                           <th>
                               <textarea defaultValue={address} name="address" className="form-control" onChange={this.handleChange.bind(this)}></textarea>
                           </th>
                       </tr>
                        <tr>
                            <td></td>
                            <td><button className="btn btn-success" onClick={this.saveOrder.bind(this)}>Save</button></td>
                        </tr>
                   </tbody>
               </Table>
            </Container>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    save: (data) => {
        dispatch(saveOrder(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder);