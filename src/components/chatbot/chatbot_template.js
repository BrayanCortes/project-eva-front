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
        message: '¿Cual es tu nombre?',
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
            { value: false, label: 'No Acepto', trigger: '7' },
        ]
    },
    {
        id: 'recorderis',
        message: 'Recuerda que estos datos son usados para que el personal de la universidad se contacte contigo',
        trigger: '3',
    },
    {
        id: '3',
        message: '¿Podrías decirme cuál es tu código? Recuerda poner el 20 al inicio.',
        trigger: 'codigo',
    },
    {
        id: 'codigo',
        user: true,
        trigger: '7',
        validator: (value) => {
            if (!value.startsWith('20')) {
                console.log(value.length);
                return 'Rectifique su código, debe iniciar en 20';
            } else if (value.length !== 9){
                return 'Rectifique su código'
            } else if (!/^\d+$/.test(value)){
                return 'El código debe ser numérico'
            }
            return true;
        },
    },
    {
        id: '7',
        message: '¿Podrías decirme cuál es tu correo universitario?',
        trigger: 'email',
    },
    {
        id: 'email',
        user: true,
        trigger: 'QQuestion1',
        validator: (value) => {
            if (!value.endsWith('@correounivalle.edu.co')) {
                return 'Use su correo univalle';
            } 
            return true;
        },
    },
    {
        id: 'QQuestion1',
        message: '¿Durante la última semana con que frecuencia te has sentido deprimido o triste?',
        trigger: 'Question1',
    },
    {
        id: 'Question1',
        options: [
        { value: 'A', label: 'Constantemente', trigger: 'QQuestion2' },
        { value: 'B', label: 'Ocasionalmente', trigger: 'QQuestion2' },
        { value: 'C', label: 'Para nada deprimido', trigger: 'QQuestion2' },
        ],
    },
    {
        id: 'QQuestion2',
        message: '¿Durante la última semana que tan solo has estado?',
        trigger: 'Question2',
    },
    {
        id: 'Question2',
        options: [
        { value: 'A', label: 'Constantemente', trigger: 'QQuestion3' },
        { value: 'B', label: 'Ocasionalmente', trigger: 'QQuestion3' },
        { value: 'C', label: 'Para nada solo', trigger: 'QQuestion3' },
        ],
    },
    {
        id: 'QQuestion3',
        message: '¿Has pasado por algún evento traumático en el último mes?',
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
        message: 'Por Favor, escribe en detalle cómo te has sentido estos últimos días, que sucesos importantes han ocurrido.',
        trigger: 'OpenQuestion',
    },
    {
        id: 'OpenQuestion',
        user: true,
        trigger: '9',
    },
    {
        id: '9',
        message: 'Gracias por participar.',
        trigger: 'review',
    },
    {
        id: 'review',
        component: <ReviewForm />,
        asMessage: true,
        end: true,
    },]

    useEffect(() => {
        alert('Si deseas volver a usar el chatbot por favor recarga la página.');
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