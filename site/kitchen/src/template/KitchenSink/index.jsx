import React from 'react';
import {BrowserRouter,Route,Switch } from "react-router-dom"
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/icon/style';
import PageA from './PageA.jsx';
import PageB from './PageB.jsx';
import PageC from './PageC.jsx';
import PageD from './PageD.jsx';
import PageIndex from './PageIndex.jsx'
import TabBar from 'antd-mobile/lib/tab-bar'
import '../../static/style';
import '../../static/antd-mobile.css';
import fun from '../../util/index'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedTab : 'blueTab'
    }
  }

  componentDidMount() {
    fun('13')
  }
  render() {
    return (
      <div>
        <PageIndex {...this.props} />
      </div>
    );
  }
}
