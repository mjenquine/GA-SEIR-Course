import React, { Component } from 'react';
import Chart from 'chart.js'

class BarChart extends Component {
    componentDidMount () {
        this.getData(this.props.id)
    }
    async getData (id) {
      try{
        const response = await fetch(`/locations/${id}`)
        const location = await response.json()
        const preparedData = await this.prepareData(location)
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
                    label: 'Avg high temps',
                    data: []
                },
                {
              			label: 'Avg low temps',
              			data: []
              	}
            ]
        }

        data.temperatures.forEach((temperature) => {
          chartData.labels.push(temperature.month);
          chartData.datasets[0].data.push(temperature.average_high_f);
          chartData.datasets[1].data.push(temperature.average_low_f);
        });
        return chartData
    }
    createChart (data) {
        const ctx = document.querySelector(`#temperatures-${this.props.id}`)
        const tempsChart = new Chart(ctx, {
            type: 'line',
            data: data
                })
        return tempsChart
    }
  render () {
    return (
      <>
        <h1>Temperatures</h1>
        <canvas id={`temperatures-${this.props.id}`} width="300" height="100"></canvas>
      </>
    )
  }
}

export default BarChart
