import React, {Component} from 'react';
import axios from 'axios'
import { Table, Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon, Button } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Menu from '../Menu/Menu'
import { Link } from 'react-router';

export default class Connection extends Component {
  constructor(props){
     super(props)
     this.state = {
      allrecords: [],
      saleschannel:'sales',
      partnerchannel:'payment',
      shippingchannel:'shipping',
      marketingpartner:'marketing'
    };
  }  
  getData() {
    var self = this;
    return axios.get('../APIS/connections.json')
      .then(function(response){
        self.setState({ allrecords: response.data });
      }).catch(function (error) {
        console.log(error);
      }); 
  }
  componentWillMount(){
    this.getData();
  }
  render() {
    
    const salespartner = this.state.allrecords.filter((item, i) => {
      return item.type.indexOf(this.state.saleschannel) !== -1
    })
   
    const paymentpartner = this.state.allrecords.filter((item, i) => {
      return item.type.indexOf(this.state.partnerchannel) !== -1
    })

    const shippingpartner = this.state.allrecords.filter((item, i) => {
      return item.type.indexOf(this.state.shippingchannel) !== -1
    })
    
    const marketingpartner = this.state.allrecords.filter((item, i) => {
      return item.type.indexOf(this.state.marketingpartner) !== -1
    })
    
    console.log(paymentpartner+"paymentpartner")

    const salesPartner = salespartner.map((partner, i) => {
        return <div key={i} className="col-xs-18 col-sm-4 col-md-3">
          <div className="productbox">
            <div className="imgthumb img-responsive">
              <img height="120" width="150" src={partner.image}/>
            </div>
            <div className="caption">
              <h5>{partner.name}</h5>
              <Link to={`connection`} >Edit connection</Link><br/>
              <Link to={`connection`}>Order settings</Link>
            </div>
          </div>
        </div>
        });

    const paymentPartner = paymentpartner.map((partner, i) => {
        return <div key={i} className="col-xs-18 col-sm-4 col-md-3">
          <div className="productbox">
            <div className="imgthumb img-responsive">
              <img height="120" width="150" src={partner.image}/>
            </div>
            <div className="caption">
              <h5>{partner.name}</h5>
              <Link to={`connection`} >Edit connection</Link><br/>
              <Link to={`connection`}>Order settings</Link>
            </div>
          </div>
        </div>
        });
    //console.log(paymentPartner,"paymentPartner");
    const shippingPartner = shippingpartner.map((partner, i) => {
        return <div key={i} className="col-xs-18 col-sm-4 col-md-3">
          <div className="productbox">
            <div className="imgthumb img-responsive">
              <img height="120" width="150" src={partner.image}/>
            </div>
            <div className="caption">
              <h5>{partner.name}</h5>
              <Link to={`connection`} >Edit connection</Link><br/>
              <Link to={`connection`}>Order settings</Link>
            </div>
          </div>
        </div>
        });
    
    const marketingPartner = marketingpartner.map((partner, i) => {
        return <div key={i} className="col-xs-18 col-sm-4 col-md-3">
          <div className="productbox">
            <div className="imgthumb img-responsive">
              <img height="120" width="150" src={partner.image}/>
            </div>
            <div className="caption">
              <h5>{partner.name}</h5>
              <Link to={`connection`} >Edit connection</Link><br/>
              <Link to={`connection`}>Order settings</Link>
            </div>
          </div>
        </div>
        });
    return (
       <div className="container">
        <div className="row">
         <h5>Sales Channel</h5>
         {salesPartner}
        </div>
        <div className="row">
         <h5>Payment </h5>
         {paymentPartner}
        </div>
        <div className="row">
         <h5>Shipping </h5>
         {shippingPartner}
        </div>
        <div className="row">
         <h5>Marketing </h5>
         {marketingPartner}
        </div>  
       </div>
    );
  }
}

Connection.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
