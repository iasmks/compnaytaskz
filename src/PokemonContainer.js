import './PokemonContainer.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function PokemonContainer(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
        <div className="container">
            <img src='https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/25.svg'/>
            <h2>{props.name}</h2>
            <h2>{props.id}</h2>
            <h2>{props.type}</h2>
            <button type="submit" className="btn btn-primary" onClick={handleShow} style={{marginTop:'23px'}}>Click To Open</button>
        </div>  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pokemon</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src='https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/25.svg'/>
            <h2>{props.name}</h2>
            <h2>{props.id}</h2>
            <h2>{props.type}</h2></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PokemonContainer

