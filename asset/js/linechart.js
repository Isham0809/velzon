// Appexchart
var options = {
    series: [{
    name: 'Earnings',
    type: 'column',
    data: [89.25, 98.58, 68 ,108, 77, 84, 51, 28, 92, 42, 88, 36]
  }, {
    name: 'Orders',
    type: 'area',
    data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63,67]
  }, {
    name: 'Refunds',
    type: 'line',
    data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35]
  }],
    chart: {
    height: 350,
    type: 'line',
    foreColor:'#838fb9',
    fontFamily: 'Poppins, sans-serif',
    stacked: false,
    toolbar:{
        show:false,
      },
  },
  grid: {
    show: true,
    borderColor: '#90A4AE',
    opacity:0.5,
    strokeDashArray: 0.1,
    position: 'back',
    xaxis: {
        lines: {
            show: true,
        }
    },   
    yaxis: {
        lines: {
            show: false
        }
    },  
    row: {
        colors: undefined,
        opacity: 0.5
    },  
    column: {
        colors: undefined,
        opacity: 0.5
    },  
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },  
  },
  stroke: {
    width: [0, 2, 1],
    curve: 'straight',
  },
  plotOptions: {
    bar: {
      columnWidth: '27%'
    }
  },
  
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'text'
  },
  yaxis: {
    tickAmount: 4,
    min: 0,
    max: 120,
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
  
      }
    }
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();