import Ember from 'ember';
import defaultTheme from '../highcharts/themes/default-theme';

export default Ember.Component.extend({

  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Total weight of gear in each category'
    },
    xAxis: {
      categories: ['Test1', 'Test2', 'Test3']
    },
    yAxis: {
      title: {
        text: 'Categories'
      }
    }
  },

  chartData: [{
    name: 'DummyA',
    data: [1, 0, 4]
  }, {
    name: 'DummyB',
    data: [5, 7, 3]
  }],

  theme: defaultTheme

});
