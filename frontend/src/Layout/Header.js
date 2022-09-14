import React from 'react'
import "../css/Header.css"
import {

    CardButton,


} from "../Components/Card";

function Header() {
    return (
        <div class="container " style={{ marginBottom: '500px' }}>

            <div class="rectangle">

                <div>

                    <div class="theme">We want give them a better
                        <br></br>tommorow!</div>

                    <div class="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting <br></br>
                        industry. Lorem Ipsum has been the industry's standard dummy text <br></br>
                        ever since the 1500s

                    </div>


                    <CardButton class="header-button" type="button" style={{
                        color: "black",
                        fontFamily: "serif",
                        fontSize: "16px",
                        height: "53px",
                        width: "211px",
                        marginLeft: "622px",
                        marginTop: "40px",
                        borderRadius: "10px",
                        backgroundColor: "#FFFFFF",
                    }}>Get Started </CardButton>
                </div>
            </div>
        </div >

    )
}

// const ColorSwitcherContainer = styled.div`
//   width: 4rem;
//   margin: 0 1rem;
// `;

export default Header