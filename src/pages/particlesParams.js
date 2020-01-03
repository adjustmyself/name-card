import React from 'react';
import Particles from 'react-particles-js';

const ParticlesJS = () => {
    const styles = {
		fontFamily: "sans-serif",
        textAlign: "center",
	};
    const particlesParams = {
        "particles": {
            "color": {
                "value": "#ADD8E6"
            },
            "number": {
                "value": 150,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
            }
        }
    }
    return (
        <div style={styles}>
            <Particles params={particlesParams} />
        </div>
    );
}


export default ParticlesJS;