export default {

  colors: [
    '#a66e25',
    '#846571',
    '#788a6d',
    '#565e69',
    '#496793',
    '#6f8443',
    '#7e6c3c',
    '#974637',
    '#a690ab',
    '#ffac9f',
    '#67a5e5',
    '#7a71e9',
    '#e58100',
    '#d2002d',
    '#827565',
  ],
  chart: {
    backgroundColor: null,
    style: {
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
    }
  },
  title: {
    style: {
      color: 'black',
      fontSize: '18px',
      fontWeight: 'bold'
    }
  },
  subtitle: {
    style: {
      color: 'black',
      fontSize: '14px',
    }
  },
  tooltip: {
    borderWidth: 0,
    style: {
      fontSize: '16px'
    }
  },
  legend: {
    itemStyle: {
      fontWeight: 'bold',
      fontSize: '14px'
    }
  },
  xAxis: {
    labels: {
      style: {
        color: '#6e6e70',
        fontSize: '16px'
      }
    },
    title: {
      style: {
        fontSize: '14px'
      }
    }
  },
  yAxis: {
    labels: {
      style: {
        color: '#6e6e70',
        fontSize: '16px'
      }
    },
    title: {
      style: {
        fontSize: '14px'
      }
    }
  },
  plotOptions: {
    series: {
      shadow: true
    },
    candlestick: {
      lineColor: '#404048'
    }
  },
  navigator: {
    xAxis: {
      gridLineColor: '#D0D0D8'
    }
  },
  rangeSelector: {
    buttonTheme: {
      fill: 'white',
      stroke: '#C0C0C8',
      'stroke-width': 1,
      states: {
        select: {
          fill: '#D0D0D8'
        }
      }
    }
  },
  scrollbar: {
    trackBorderColor: '#C0C0C8'
  },
  background2: '#E0E0E8',
  global: {
    timezoneOffset: new Date().getTimezoneOffset()
  },
  credits: {
    enabled: false
  }
};