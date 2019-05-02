import React from 'react';
import {BrowserRouter,Route,Switch } from "react-router-dom"
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/icon/style';
import PageA from './PageA.jsx';
import PageB from './PageB.jsx';
import TabBar from 'antd-mobile/lib/tab-bar'
import '../../static/style';
import '../../static/antd-mobile.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  render() {
    return (
        <div  className='div-fixed-bottom'>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
                  <TabBar.Item
                    title="Life"
                    key="Life"
                    icon={<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selectedIcon={<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selected={this.state.selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'blueTab',
                      });
                     // this.props.router.push('/pagea')
                     // this.props.history.push('/pagea')
                    }}
                    data-seed="logId"
                  >
                    111
                  </TabBar.Item>
                  <TabBar.Item
                    icon={
                      <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                      />
                    }
                    selectedIcon={
                      <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                      />
                    }
                    title="Koubei"
                    key="Koubei"
                    badge={'new'}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'redTab',
                      });
                    }}
                    data-seed="logId1"
                  >
                    <PageB/>
                  </TabBar.Item>
                  <TabBar.Item
                    icon={
                      <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                      />
                    }
                    selectedIcon={
                      <div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                      />
                    }
                    title="Friend"
                    key="Friend"
                    dot
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'greenTab',
                      });
                    }}
                  >
                    <PageA/>
                  </TabBar.Item>
          </TabBar>
        </div>

    );
  }
}
