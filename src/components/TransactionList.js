import React from "react";
export default class TransactionList extends React.Component{
    
    getAmount = products => {
        let total = 0
        products.map(it => {
            total += Number(it.price) * Number(it.qty)
        })
        return total
    }

    convertTime = time => {
        let date = new Date(time)
        return `${date.getDate()}/${Number(date.getMonth()) + 1}/${date.getFullYear()}`
    }

    render(){
        return (
            <div>
                {/* list */}
                <div className="card col-sm-12 my-1">
                    <div className="card-body row">
                        <div className="col-10">
                            <h5>Customer: {this.props.customer_name}</h5>
                            <h6>Time: { this.convertTime(this.props.time) }</h6>
                            <h6>Amount: { this.getAmount(this.props.products) }</h6>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-block btn-success" data-toggle="modal"
                            data-target={`#modalDetail${this.props.transaction_id}`}>
                                Details
                            </button>
                        </div>
                    </div>
                </div>

                {/* modal component */}
                <div className="modal fade" id={`modalDetail${this.props.transaction_id}`}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header bg-success text-white">
                                <h5>Detail of Transaction</h5>
                            </div>
                            <div className="modal-body">
                                <h5>Customer: {this.props.customer_name}</h5>
                                <h6>Time: { this.convertTime(this.props.time) }</h6>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        { this.props.products.map((item, index) => (
                                            <tr key={item.product_id}>
                                                <td>{`${index + 1}`}</td>
                                                <td>{item.product.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.qty}</td>
                                                <td>{item.price * item.qty}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <h4 className="text-bold text-danger">
                                    Total Amount: { this.getAmount(this.props.products) }
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}