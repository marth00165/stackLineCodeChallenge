import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {connect} from "react-redux";
import {Line} from 'react-chartjs-2'
import { Table } from 'antd';








class Chart extends Component {
  state = {
    sales: this.props.nitrobullet.sales,
    chartData:{
      labels:["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets:[
        {
          label:"Retail Sales",
          data: [ ...this.props.nitrobullet.sales.map(sale => (sale.retailSales))
          ]
        }

      ]
    }

  }

  componentDidMount(){
    console.log(this.state.chartData)
  }


  render(){



    const columns = [
      {
        title: 'Week Ending',
        dataIndex: 'weekEnding',
        key:'Week Ending',
        render: text => <p>{text}</p>
      },
      {
        title: 'Retail Sales',
        dataIndex: 'retailSales',
        key:'Retail Sales',
        render: text => <p>{text}</p>
      },
      {
        title: 'Whole Sale Sales',
        dataIndex: 'wholesaleSales',
        key:'Whole Sale Sales',
        render: text => <p>{text}</p>
      },
      {
        title: 'Units Sold',
        dataIndex: 'unitsSold',
        key:'Units Sold',
        render: text => <p>{text}</p>
      },
      {
        title: 'Retailer Margin',
        dataIndex: 'retailerMargin',
        key:'Retailer Margin',
        render: text => <p>{text}</p>
      }
    ]

    const data = this.state.sales;


    return(
      <div style={{width: "fit-content", height:"200px"}}className= "chart">
      <Line
        data={this.state.chartData}
        options={{ maintainAspectRatio: false }}
      />
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
