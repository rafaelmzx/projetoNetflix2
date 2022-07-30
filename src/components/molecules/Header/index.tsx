import React from "react";
import { useEffect, useState } from "react";

function Header({}) {

    const [color, setColor] = useState(false);

    useEffect(function(){
        function scrollEffect(){
            if(window.scrollY > 10){
                setColor(true);
            } else {
                setColor(false);
            }
        }

        window.addEventListener('scroll', scrollEffect)
    }, []);

    return <>
        <div className="header-fixed" style={{backgroundColor: color ? "#0f0f0f" : "",
    transition: 'ease .5s',
    background: 'linear-gradient(to bottom, #0f0f0f 5%, transparent 30%',
    }}>

            <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix"></img>

            <img className="header-logo-login" src="https://pbs.twimg.com/profile_images/1356333120992149505/-qvakEK7_400x400.jpg"></img>
        </div>
    </>
}

export default Header