import React from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import PageA from "./PageA";

class PageD extends React.Component{
  render(){
    const tabs = [
      { title: <Badge text={'3'}>First Tab</Badge> },
      { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
      { title: <Badge dot>Third Tab</Badge> },
    ];
    return(<div style={{width:'100%',height:'100%'}}>
      <Tabs tabs={tabs}
            style={{width:'100%',height:'100%'}}
            initialPage={0}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <PageA id='ee'/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          Content of second tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          Content of third tab
        </div>
      </Tabs>
    </div>)
  }
}

export default  PageD
