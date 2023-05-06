import React, { useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import ReviewForm from '../form/form_template';

const FrontChatbot = () => {

  const chatbotConfig = {
    floating: true,
    headerTitle: "ProyectoEva",
    enableMobileAutoFocus: true,
    opened: true,
    placeholder: "Mensaje",
  };

  const chatbottheme = {
    background: '#e1e4e7',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#c01f32',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#ffffff',
    botFontColor: '#000000',
    userBubbleColor: '#c01f32',
    userFontColor: '#ffffff',
  };

  const chatbotsteps = [
    {
        id: '1',
        message: 'Hola, mi nombre es EVA, un placer',
        trigger: 'Ask-Name',
    },
    {
        id: 'Ask-Name',
        message: 'Cual es tu nombre?',
        trigger: 'name',
    },
    {
        id: 'name',
        user: true,
        trigger: 'PersonaldataManage',
    },
    {
        id: 'PersonaldataManage',
        message: 'Hola {previousValue}! quieres aceptar el uso de datos personales?',
        trigger: 'datos',
    },
    {
        id: 'datos',
        options: [
            { value: true , label: 'Acepto', trigger: 'recorderis' },
            { value: false, label: 'No Acepto', trigger: '3' },
        ]
    },
    {
        id: 'recorderis',
        message: 'Recuerda que estos datos son usados para que el personal de la universidad se contacte contigo',
        trigger: '3',
    },
    {
        id: '3',
        message: 'Podrias decirme Cual es tu codigo? Recuerda poner el 20 al inicio.',
        trigger: 'codigo',
    },
    {
        id: 'codigo',
        user: true,
        trigger: '7',
    },
    {
        id: '7',
        message: 'Podrias decirme Cual es tu correo universitario?',
        trigger: 'email',
    },
    {
        id: 'email',
        user: true,
        trigger: 'QQuestion1',
    },
    {
        id: 'QQuestion1',
        message: 'Que tan solo te has sentido esta semana?',
        trigger: 'Question1',
    },
    {
        id: 'Question1',
        options: [
        { value: 'A', label: 'Muy Solo', trigger: 'QQuestion2' },
        { value: 'B', label: 'Para nada Solo', trigger: 'QQuestion2' },
        { value: 'C', label: 'No deseo responder', trigger: 'QQuestion2' },
        ],
    },
    {
        id: 'QQuestion2',
        message: 'Como te sientes el dia de hoy?',
        trigger: 'Question2',
    },
    {
        id: 'Question2',
        options: [
        { value: 'A', label: 'Muy triste', trigger: 'QQuestion3' },
        { value: 'B', label: 'Muy bien', trigger: 'QQuestion3' },
        { value: 'C', label: 'Indeciso', trigger: 'QQuestion3' },
        ],
    },
    {
        id: 'QQuestion3',
        message: 'Deseas ayuda profesional?',
        trigger: 'Question3',
    },
    {
        id: 'Question3',
        options: [
        { value: 'A', label: 'Si', trigger: '8' },
        { value: 'B', label: 'No', trigger: '8' },
        { value: 'C', label: 'No deseo responder', trigger: '8' },
        ],
    },
    {
        id: '8',
        message: 'Porfavor, escribe en detalle como te has sentido estos ultimos días, que sucesos importantes han ocurrido.',
        trigger: 'OpenQuestion',
    },
    {
        id: 'OpenQuestion',
        user: true,
        trigger: 'review',
    },
    {
        id: 'review',
        component: <ReviewForm />,
        asMessage: true,
        end: true,
    },]

    useEffect(() => {
        alert('Si deseas volver a usar el chatbot porfavor recarga la pagina.');
      }, []);

  return (
    <div >
        <ThemeProvider theme={chatbottheme}>
            <ChatBot
                {...chatbotConfig}
                steps={chatbotsteps}
            />
        </ThemeProvider>
    </div>
  );
}

export default FrontChatbot;