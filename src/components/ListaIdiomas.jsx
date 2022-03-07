import React from 'react'
import { Menu, Dropdown } from 'antd';
  
class ListaIdiomas extends Component {
  constructor(props) {
    super(props);    this.state = {
      idiomas: ['Czench', 'German', 'English', 'Spanish', 'French', 'Portuguese'],
    };
  }  

  render() {
    const { tasks } = this.state;    
    return (
      <ul>
      {idiomas.map(idiomas => <li>{idiomas}</li>)}
    </ul>
      );
  }
}

export default ListaIdiomas;