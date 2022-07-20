import PropTypes from 'prop-types';

import { Overlay, Container, Footer } from './style';

import Button from '../button';

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Título do modal</h1>
        <p>
          Corpo do modal
        </p>
        <Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
