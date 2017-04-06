import React, {Component} from 'react';
import { Link } from 'react-router';
import styles from './main.css';
import cookie from 'react-cookie';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sidebarWidth:0
     }
  }
  componentDidMount() {

  }
  componentWillMount() {
    this.setState({
     sidebarWidth: cookie.load('customWidth'),
    });
  }
  toggleMenu(){
    if(this.state.sidebarWidth ==0 ){
      var  customWidth = "250px"
    }else{
      var customWidth = "0"
    }
    this.setState({
     sidebarWidth: customWidth,
    });
  }
  render() {
    const styleObj ={
        width: this.state.sidebarWidth
    }
    return (
      <section className="container home">
        <div id="mySidenav" style={styleObj}  className="sidenav">
            <Link to="javascript:void(0)" onClick={this.toggleMenu.bind(this)} className="closebtn">&times;</Link>
            <Link to={`/`} >Dashboard</Link>
            <Link to={`sales`} >Sales</Link>
            <Link to={`connection`}>Connection</Link>
        </div>
        <span onClick={this.toggleMenu.bind(this)} >&#9776; open</span>
      </section>
    );
  }
}

Menu.contextTypes = {
  router: React.PropTypes.object.isRequired,
}


