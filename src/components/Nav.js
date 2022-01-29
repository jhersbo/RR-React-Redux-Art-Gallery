import React from 'react'
import NavLink from './NavLink'
import { useSelector, useDispatch } from 'react-redux'

const Nav = () => {
    const mode = useSelector((state) => state.mode)
    console.log(mode)
    return (
        <div className="Nav" style={{'backgroundColor': 'white'}}>
            <NavLink content="Blog" />
            <NavLink content="About Me" />
            <NavLink content="Projects" />
            <NavLink content="Other" />
        </div>
    )
}

export default Nav