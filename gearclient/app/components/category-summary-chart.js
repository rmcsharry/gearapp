import Ember from 'ember';
import defaultTheme from '../highcharts/themes/default-theme';

export default Ember.Component.extend({

  summaryData: [{
    name: 'gear',
    colorByPoint: true,
    data: [
        {y: 10, name: 'Test1'},
        {y: 12, name: 'Test2'},
        {y: 40, name: 'Test3'}
        ]
  }],

  summaryOptions: {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Total weight of gear in each category'
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b> of {series.name}'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },

    legend: {
        title: {
            text: '<span style="font-size: 14px;">Categories</span><br/><span style="font-size: 10px; color: #666; font-weight: normal">(Click to hide)</span>',
        },
        backgroundColor: 'whitesmoke',
        labelFormat: '{name} - {y:.2f}',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
        align: 'middle',
        verticalAlign: 'top',
        layout: 'vertical',
        x: 0,
        y: 100
    }        
  },

  theme: defaultTheme

});
