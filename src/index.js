import React from 'react';
import ReactDOM from 'react-dom';
/* en el futuro cuando tengas acceso a la configuración de tu servidor y puedas usar el sistema moderno de rutas, tienes que cambiar en este fichero la palabra HashRouter por BrowserRouter. Te quedará el código así:
import { BrowserRouter } from 'react-router-dom';

 */
import { HashRouter } from 'react-router-dom';
import App from './components/App';


ReactDOM.render
(
<HashRouter>
<App />
</HashRouter>,

document.getElementById('root')
);

