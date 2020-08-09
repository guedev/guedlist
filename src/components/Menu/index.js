import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from '../components/ButtonLink/index.js';


/*função que irá implementar o menu que fica na parte superior
do site, contendo a logo e o botão para add novos vídeos*/
function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo}  alt="Guedlist logo" />
            </a>

            <Button  className="ButtonLink" href="/"> 
                Add Vídeo
            </Button>
        </nav>
 );
}

export default Menu;