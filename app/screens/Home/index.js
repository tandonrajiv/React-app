import React, {Component} from 'react';
import { Link } from 'react-router';
import Menu from '../Menu/Menu'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      sidebarWidth:"0"
     }
  }
  render() {
   return (
      <section className="container home">
        Welcome to Dashboard !!
      </section>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
