import React from 'react';
import DataSet from "@antv/data-set";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

import $ from 'jquery';

class PageA extends React.Component{
  componentDidMount(){
    var data = [{
      name: '芳华',
      percent: 0.4,
      a: '1'
    }, {
      name: '妖猫传',
      percent: 0.2,
      a: '1'
    }, {
      name: '机器之血',
      percent: 0.18,
      a: '1'
    }, {
      name: '心理罪',
      percent: 0.15,
      a: '1'
    }, {
      name: '寻梦环游记',
      percent: 0.05,
      a: '1'
    }, {
      name: '其他',
      percent: 0.12,
      a: '1'
    }];

    var chart = new F2.Chart({
      id: this.props.id,
      pixelRatio: window.devicePixelRatio
    });
    chart.source(data, {
      percent: {
        formatter: function formatter(val) {
          return val * 100 + '%';
        }
      }
    });
    chart.legend({
      position: 'right',
      marker: 'square'
    });
    chart.tooltip(false);
    chart.coord('polar', {
      transposed: true,
      radius: 0.85,
      innerRadius: 0.618
    });
    chart.axis(false);
    chart.interval().position('a*percent').color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0']).adjust('stack').style({
      lineWidth: 1,
      stroke: '#fff',
      lineJoin: 'round',
      lineCap: 'round'
    });

    chart.guide().html({
      position: ['50%', '50%'],
      html: '<div style="text-align: center;width: 100px;height: 72px;vertical-align: middle;">' + '<p id="number" style="font-size: 28px;margin: 10px 10px 5px;font-weight: bold;"></p>' + '<p id="name" style="font-size: 12px;margin: 0;"></p>' + '</div>'
    });
    chart.render();
    console.log(chart)
    chart.interaction('pie-select', {
      animate: {
        duration: 300,
        easing: 'backOut'
      },
      defaultSelected: {
        name: '机器之血',
        percent: 0.18,
        a: '1'
      },
      onEnd: function onEnd(ev) {
        var shape = ev.shape,
          data = ev.data,
          shapeInfo = ev.shapeInfo,
          selected = ev.selected;

        if (shape) {
          if (selected) {
            $('#number').css('color', shapeInfo.color);
            $('#number').text(data.percent * 100 + '%');
            $('#name').text(data.name);
          } else {
            $('#number').text('');
            $('#name').text('');
          }
        }
      }
    });

  }
 render(){
   return(<canvas id={this.props.id} width="400" height="260"></canvas>)
 }
}

export default  PageA
