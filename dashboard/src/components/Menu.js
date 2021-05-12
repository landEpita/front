import React from 'react';
import { BsPeopleCircle } from "react-icons/bs";
import logo from '../assets/logo.png'


const Menu = () => {

    // const [showMenu, setShowMenu] = useState("");

    // const toggleMenu = () =>{
    //     console.log(showMenu);
    //     if (showMenu === "")
    //     {
    //         setShowMenu("active");
    //     }
    //     else{
    //         setShowMenu("");
    //     }
    // }


    return (
        <div id="side-bar">

            {/* <div className="toggle-button" id="toggle-button" onClick={() => toggleMenu()}>
                <i className="fas fa-times-circle"></i>
            </div> */}

            

            <ul>
                <div className="user-icon">
                    {/* <BsPeopleCircle/> */}
                    <img src={logo}/>
                </div>

                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Menu;