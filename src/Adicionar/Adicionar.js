import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';



 export default function Adicionar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Button variant="primary" onClick={handleShow}>
        Adicionar Contato
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <form onsubmit="adicionarContato()" action="" id="form_adicionar">
                <input className="form-control form-control-lg mb-3" type="text" placeholder="Nome" id="input_nome"/>

                <input className="form-control form-control-lg mb-3" type="number" placeholder="Telefone" id="input_telefone"/>

                <input className="form-control form-control-lg mb-3" type="text" placeholder="Cidade" id="input_cidade"/>
                <div className="d-grid"><Button type="submit" class="btn btn-primary">Adicionar</Button></div>
            </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
