import React, {Component} from 'react';
import { Link } from 'react-router';
import Menu from '../Menu/Menu'

export default class Layouthome extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      sidebarWidth:"0"
     }
  }
  render() {
   return (
      <div> <Menu/> {this.props.children}</div>
    );
  }
}

Layouthome.contextTypes = {
  router: React.PropTypes.object.isRequired,
}