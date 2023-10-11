import React, {useState} from 'react'
import styled from 'styled-components'
import CartWidget from "../contenedores/CartWidget";
import BotonHamburguesa from '../contenedores/BotonHamburguesa';

function NavBar() {

    const [clicked, setClicked] = useState (false)

    const handleClick = () => {
        setClicked (!clicked)
    }

    return (
        <div>
            <NavContainer fixed="top">
                <h1>Vintage del sur</h1>
                <div className= {`nav-list ${clicked ? 'active' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/">Buzos</a>
                    <a href="/">Remerones</a>
                    <a href="/">Pantalones</a>
                    <CartWidget />
                </div>
                <div className='hamburguesa'>
                    <BotonHamburguesa clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </NavContainer>
        </div>
    )
}

export default NavBar

const NavContainer = styled.nav`
    padding: .8rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    h1 {
        color: white;
        font-size: 1.6rem
    }
    a {
        color: white;
        text-decoration: none;
        margin-right: 1.5rem;
    }
    .nav-list {
        display: flex;
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        align-items: center;
        transition: all .5s ease;
        a {
            color: white;
            font-size: 1.2rem;
            display: block;
        }
        @media (min-width: 768px) {
            position: initial;
            margin: 0;
            a {
                font-size: 1.2rem;
                color: white;
                display: inline;
            }
        }
    }
    .nav-list.active {
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 15%;
        left: 0;
        right: 0;
        text-align: center;
        a {
            font-size: 1.5rem;
            margin-top: 1rem;
            color: white;
        }
    }
    .hamburguesa {
        @media (min-width: 768px) {
            display: none;
        }
    }
`

const BgDiv = styled.div `
    position: absolute;
    background-color: #222;
    top: -1400px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    &.active {
        width: 100%;
        height: 80%;
        top: 0;
        left: 0;
        border-radius: 0 0 85% 0;
    }
`