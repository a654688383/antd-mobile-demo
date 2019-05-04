import React from 'react';
import PageA from './PageA.jsx';
export default class PageC extends React.Component{
  render(){
    return(<PageA id={this.props.id} />)
  }
}
