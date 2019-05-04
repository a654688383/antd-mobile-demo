import React from 'react';
import PageA from './PageA.jsx';
export default class PageB extends React.Component{
   render(){
     return(<PageA id={this.props.id}/>)
   }
}
