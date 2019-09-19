import React from 'react';
import SideBar from '../containers/SideBar'
import Sales from '../containers/Sales.js'
import Container from '@material-ui/core/Container';
import Layout from './layout.js'
import {connect} from "react-redux";


class ViewGraph extends React.Component {

  state = {
    salesdisplay: "none"
  }

  handleClick = () => {
  if (this.state.salesdisplay === "none"){
    this.setState({
      salesdisplay: "block"
    })
  }
  else {
    this.setState({
      salesdisplay: "none"
    })
  }

  }

  render(){
    return(
    <Layout>
      <Container className="SideBar"  style={{ height:"fit-content", width:"250px"}}>
        <SideBar handleClick={this.handleClick}  nutribullet={this.props.nitrobullet}/>
      </Container>
      <div style={{display:`${this.state.salesdisplay}`}} className="OverView" >
        <Sales />
      </div>
    </Layout>
    )
  }
}

function mapStateToProps(state){
  return {
    nitrobullet: state.nitrobullet
  }
};

export default connect(mapStateToProps)(ViewGraph)
