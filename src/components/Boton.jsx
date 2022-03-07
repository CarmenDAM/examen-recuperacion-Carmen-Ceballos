import React from 'react';
import { Row, Form } from 'react-bootstrap';
import SelectMarcas from './components/SelectChiste';
import Boton from './components/Boton';

class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.reference = props.reference;
    this.onClickForm = props.onClickForm;
  }

  render() {
    return (
      <Form>
        <Row className="mb-2">
          <SelectMarcas reference={this.reference} />
        </Row>
        <Boton text="Actualizar" onClickButton={this.onClickForm} />
      </Form>
    );
  }
}
export default Boton;