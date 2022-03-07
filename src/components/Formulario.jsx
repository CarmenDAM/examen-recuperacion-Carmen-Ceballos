import React from 'react';
import { Row, Form } from 'react-bootstrap';
import SelectIdioma from './SelectIdioma';
import Boton from './Boton';

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.reference = props.reference;
    this.onClickForm = props.onClickForm;
  }

  render() {
    return (
      <Form>
        <Row className="mb-2">
          <SelectIdioma reference={this.reference} />
        </Row>
        <Boton text="Actualizar" onClickButton={this.onClickForm} />
      </Form>
    );
  }
}
export default Formulario;