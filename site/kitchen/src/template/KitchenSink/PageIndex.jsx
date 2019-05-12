import React from 'react';
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/icon/style';
import PageA from './PageA.jsx';
import PageB from './PageB.jsx';
import PageC from './PageC.jsx';
import PageD from './PageD.jsx';
import TabBar from 'antd-mobile/lib/tab-bar'
import '../../static/style';
import '../../static/antd-mobile.css';
import fun from '../../util/index'

window.list={
    'pagea':'blueTab',
    'pageb':'redTab',
    'paged':'greenTab',
}
function filterStr(str) {
  return str.replace(/\//g, "")
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedTab : window.list[filterStr(this.props.location.pathname)]?window.list[filterStr(this.props.location.pathname)]:'blueTab',
    }
  }

  componentDidMount() {

    let that = this;
    window.addEventListener('popstate', function() {
      // 监听回退按钮
      let sec = window.list[filterStr(that.props.location.pathname)]
       that.setState({selectedTab:sec ? sec :'blueTab'})
      fun(filterStr(that.props.location.pathname))
    },false);


  }

  // componentDidUpdate(){
  //   let a = this.state.list[this.props.location.pathname]
  //   this.setState('selectedTab':a)
  // }
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
              this.props.router.push('/pagea');
              fun('14')
              // this.props.router.push('/pagea')
              // this.props.history.push('/pagea')
            }}
            data-seed="logId"
          >
            <PageA id={"name"}/>
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
              this.props.router.push('/pageb');
              fun('15')
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
              this.props.router.push('/paged');
              fun('16')
            }}
          >
            <PageD/>
          </TabBar.Item>
        </TabBar>
        <div>
          {}
        </div>

      </div>

    );
  }
}
