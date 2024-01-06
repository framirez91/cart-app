import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Cart APP</a>
                <button className="navbar-toggler bg-body-tertiary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <NavLink activeclassname="active" className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeclassname="active" className="nav-link" to="/catalogo">Catalogo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeclassname="active" className="nav-link" to="/cart">Carro de compras</NavLink>
                        </li>
                    </ul>
                </div>
                    


            </div>
           
        </nav>

    </>
  )
}
