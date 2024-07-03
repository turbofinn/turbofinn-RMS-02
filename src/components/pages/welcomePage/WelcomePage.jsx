import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import welcomepage from "../../../assets/Image/welcomepage.png"
const WelcomePage = () => {
    return (
        <React.Fragment>
            <div >
                <h1 >LOGO</h1>
                <div >
                    <img src={welcomepage} alt="welcomepage"  style={{
                         width:"90%",
                         marginLeft: 'auto', 
                         marginRight: 'auto'
                    }} />

                    <div 
                        style={{
                            background: 'linear-gradient(to top, rgb(73, 195, 222,0.44) 0%, rgb(73, 195, 222, 0) 100%)'
                        }}>
                        <h2 >Hey Foodie,</h2>
                        <h2 >Welcome To Our Restaurant</h2>
                        <h3 >Elevate Your Dining Experience.</h3>
                        <div 
                        >
                            <Button
                                sx={{
                                    textTransform: 'none',
                                    backgroundColor: '#469DB1',
                                    color: 'white',
                                    padding: '15px 75px',
                                    fontSize: '20px',
                                    '&:hover': {
                                        backgroundColor: 'darkblue'
                                    },
                                    borderRadius: '32px',
                                }}
                            >
                                Continue Ordering
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default WelcomePage;