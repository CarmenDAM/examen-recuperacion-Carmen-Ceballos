import React from 'react';
import uuid from 'react-uuid';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { BASE_API_URL } from '../data/Constants';
import './table.css';

//Me he vasado en el examen anterior para este código, puesto que un
//apartado también sacaba una lista de la API
class PaginaChistes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
    };
    this.brandInput = React.createRef();
    this.changeSelected = this.changeSelected.bind(this);
    this.updateTable = this.updateTable.bind(this);
    this.updateTableAPI = this.updateTableAPI.bind(this);
  }

  changeSelected = async (itemEndpoint) => {
    const response = await fetch(BASE_API_URL + itemEndpoint);
    const responseData = await response.json();
    this.setState({
      selectedItem: responseData.data,
    });
  };

  updateTable = async () => {
    this.updateTableAPI('jokes/' + this.brandInput.current.value);
  };

  updateTableAPI = async (endpointURL) => {
    const response = await fetch(BASE_API_URL + endpointURL);
    const responseData = await response.json();
    const parsedData = responseData.data.phones.map((item) => {
      const row = {
        setup:
          item.setup !== undefined ? item.setup : item.joke.split(' ')[0],
        joke: item.joke,
        slug: item.slug,
      };
      return row;
    });
    this.setState({
      tableData: parsedData,
    });
    this.changeSelected(parsedData[0].slug);
  };
}
export default PaginaChistes;