import React, {Component} from 'react';
import axios from 'axios'
import { Table, Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon, Button } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Menu from '../Menu/Menu'

export default class Sales extends Component {
  constructor(props){
     super(props)
     this.state = {allrecords: [],searchTerm:''};
  }  
  
  getData() {
    var self = this;
    return axios.get('../APIS/posts.json')
      .then(function(response){
        self.setState({ allrecords: response.data });
      }).catch(function (error) {
        console.log(error);
      }); 
  }

  searchUpdated (event) {
    this.setState({searchTerm: event.target.value.substr(0,20)})
  }

  componentWillMount(){
    this.getData();
  }
  render() {
    
    const persons = this.state.allrecords.filter((item, i) => {
      return item.name.indexOf(this.state.searchTerm) !== -1
    });
    
    function priceFormatter(cell, row){
      return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
    }

    return (
      <section className="container about">
        <div className="row">
        <div className="col-md-6">
           <div id="custom-search-input">
              <div className="input-group col-md-12">
                  <input type="text" value={this.state.searchTerm} onChange={this.searchUpdated.bind(this)} className="form-control input-lg" placeholder="Enter search term" />
                  <span className="input-group-btn">
                      <button className="btn btn-info btn-lg" type="button">
                          <i className="glyphicon glyphicon-search"></i>
                      </button>
                  </span>
              </div>
            </div>
          </div>
        </div>
        <br/><br/>
          <BootstrapTable data={persons} striped={true} hover={true}>
                <TableHeaderColumn dataField="date" isKey={true} dataAlign="center" dataSort={true}>Purchase_Date</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>Customer</TableHeaderColumn>
                <TableHeaderColumn dataField="payment_processor" dataSort={true}>Pay Proce.</TableHeaderColumn>
                <TableHeaderColumn dataField="payment_status" dataSort={true}>Payment Status</TableHeaderColumn>
                <TableHeaderColumn dataField="order_status" dataSort={true}>Order Status</TableHeaderColumn>
                <TableHeaderColumn dataField="net" dataFormat={priceFormatter} dataSort={true}>Net</TableHeaderColumn>
                <TableHeaderColumn dataField="total" dataFormat={priceFormatter} dataSort={true}>Total</TableHeaderColumn>
            </BootstrapTable>  
      </section>
    );
  }
}

Sales.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
