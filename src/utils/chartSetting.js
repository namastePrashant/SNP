export function ChartSetting(xLevels, yLevels, yunit, unit,unitY='',legendText="") {
  const data = {
    labels: xLevels,
    datasets: [
      {
        label: yunit,
        data: yLevels,
        fill: true,
        backgroundColor: 'rgba(140, 97, 254,0.2)',
        borderColor: 'rgb(140, 97, 254)',
        lineTension: 0,
      },
    ],
  }

  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            fontSize: 11,
            fontFamily: 'poppins'
          },
          gridLines: {
            lineWidth: 0,
            zeroLineWidth: 1 //<- set this
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              // return value + 'k';
              // return value;
              if (value % 1 === 0) { return unitY + value; } //returns only integers

            },
            fontSize: 11,
            fontFamily: 'poppins'
          },
          gridLines: {
            lineWidth: 0,
            zeroLineWidth: 1
          },
        }
      ],
    },
    tooltips: {
      callbacks: {
        label: (tooltipItems, data) => {
          // return data.datasets[tooltipItems.datasetIndex].label +" " + tooltipItems.yLabel  + unit
          return data.datasets[tooltipItems.datasetIndex].label + " " + tooltipItems.yLabel
        }
      }
    },
    showAllToolTips: true,
    legend: {
      labels: {
        fontFamily: "poppins",
        text:legendText
      },
      text:legendText
    }
  }

  return { data, options }
}