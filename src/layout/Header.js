import React from  "react"
import { FaPizzaSlice } from "react-icons/fa"

export const Header = () => {
    return (
        <div>
        <header data-testid = "header">
        <div className="logo">
            <img src="/images/logo.png" alt="App-Logo"/>
        </div>
        <nav>
            <ul>
                <li> + </li>
                <li> 
                  <FaPizzaSlice ></FaPizzaSlice>
                </li>
            </ul>
        </nav>
        </header>
        </div>
    )
}