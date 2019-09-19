import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import 'antd/dist/antd.css';
import {connect} from "react-redux";
import { Table, Divider, Tag } from 'antd';






class Chart extends Component {
  state = {
    sales: this.props.nitrobullet.sales
  }

  componentDidMount(){
    console.log(this.props.nitrobullet.sales)
  }


  render(){

    const columns = [
      {
        title: 'Week Ending',
        dataIndex: 'weekEnding',
        key:'Week Ending',
        render: text => <a>{text}</a>
      },
      {
        title: 'Retail Sales',
        dataIndex: 'retailSales',
        key:'Retail Sales',
        render: text => <a>{text}</a>
      },
      {
        title: 'Whole Sale Sales',
        dataIndex: 'wholesaleSales',
        key:'Whole Sale Sales',
        render: text => <a>{text}</a>
      },
      {
        title: 'Units Sold',
        dataIndex: 'unitsSold',
        key:'Units Sold',
        render: text => <a>{text}</a>
      },
      {
        title: 'Retailer Margin',
        dataIndex: 'retailerMargin',
        key:'Retailer Margin',
        render: text => <a>{text}</a>
      }
    ]

    const data = this.state.sales;


    return(
      <div className= "chart">
      <Table columns={columns} dataSource={data} />
      </div>

    )
  }
}

function mapStateToProps(state){
  return {
    nitrobullet: state.nitrobullet
  }
};


export default connect(mapStateToProps)(Chart)
