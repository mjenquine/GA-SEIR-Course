import React, { Component } from 'react';
import Chart from 'chart.js'

class LineChart extends Component {
    componentDidMount () {
        this.getData(this.props.id)
    }
    async getData (id) {
      try{
        const response = await fetch(`/ice_creams/${id}`)
        const ice_cream = await response.json()
        const preparedData = await this.prepareData(ice_cream)
        await this.createChart(preparedData)
      } catch(err){
        console.log(err)
      }
    }
    prepareData (data) {
        const chartData = {
            labels: [],
            datasets: [
                {
                    label: 'Pints Sold',
                    data: []
                },
                {
              			label: 'Month',
              			data: []
              	}
            ]
        }

        data.pints.forEach((pints) => {
          chartData.labels.push(pints.month);
          chartData.datasets[0].data.push(pints.pints_sold);

        });
        return chartData
    }
    createChart (data) {
        const ctx = document.querySelector(`#ice_creams-${this.props.id}`)
        const pintsSold = new Chart(ctx, {
            type: 'line',
            data: data
                })
        return pintsSold
    }
  render () {
    return (
      <>
        <h1>Pints Sold</h1>
        <canvas id={`ice_creams-${this.props.id}`} width="300" height="100"></canvas>
      </>
    )
  }
}

export default LineChart
