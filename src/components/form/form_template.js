import React, { useState, useEffect } from 'react';

import io from 'socket.io-client';

const port = 3389;
const socket = io(`34.125.25.16:${port}`);
var toggleResponse = false

const ReviewForm = (props) => {


  const [name, setName] = useState('');
  const [codigo, setCodigo] = useState('');
  const [datos, setDatos] = useState('');
  const [email, setEmail] = useState('');
  const [Question1, setQuestion1] = useState('');
  const [Question2, setQuestion2] = useState('');
  const [Question3, setQuestion3] = useState('');
  const [OpenQuestion, setOpenQuestion] = useState('');
  const [response, setResponse] = useState('');
  

  useEffect(() => {
    const { steps } = props;
    const { name, codigo, datos, email, OpenQuestion, Question1, Question2, Question3 } = steps;

    setName(name.value);
    setCodigo(codigo.value);
    setDatos(datos.value);
    setEmail(email.value);
    setQuestion1(Question1.value);
    setQuestion2(Question2.value);
    setQuestion3(Question3.value);
    setOpenQuestion(OpenQuestion.value);

  }, [props]);


  if (OpenQuestion !== '' && toggleResponse === false){
    const infoInJson = JSON.stringify({nombre: name, codigoEstudent: codigo, Usodatos: datos, emailEstudent: email, pregunta1: Question1, pregunta2: Question2, pregunta3 : Question3, Openpregunta: OpenQuestion, Response: toggleResponse});
    socket.emit('message', infoInJson);
    toggleResponse = true
    socket.on('response', data => {
      setResponse(data);
      console.log("response received");
    });
  }

  return (
    <div>
      <p>{response}</p>
    </div>
  );
};

export default ReviewForm;