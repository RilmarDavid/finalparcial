import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Acordeon(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Danza de La Paz</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>Kullawada (La Paz): </strong>
           Una danza que celebra la vida y el entorno del Altiplano, con ritmos rápidos y movimientos enérgicos. 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Danza de Cochabamba</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>Caporales (Cochabamba): </strong>
            Una danza que fusiona elementos de la cultura andina y afro, con ritmos fuertes y movimientos enérgicos.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Danza de Potosi</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>Tinku (Potosí): </strong>
            Una danza ritual que simula una pelea entre comunidades, con elementos de resistencia y lucha.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Danza de Oruro</AccordionHeader>
          <AccordionBody accordionId="4">
            <strong>Diablada (Oruro): </strong>
           
        Una danza ritual que celebra la fe y la devoción a la Virgen de la Candelaria, con bailes elaborados y máscaras de diablillos.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Danza de Tarija</AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>Chacarera (Tarija):</strong>
           Una danza que celebra la vida de los pueblos andinos, con ritmos suaves y movimientos fluidos.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Acordeon;