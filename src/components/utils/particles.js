import React from 'react'
import Particles from 'react-tsparticles'

const particles = () => {
  return (

    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#333",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onResize: {
              enable: true,
              density_auto: true,
              density_area: 400
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 4,
              opacity: 0.4,
              size: 30,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        parallax: {
          enable: true,
          force: 100,
          smooth: 10
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 200,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 500,
            },
            value: 80,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: false,
      }}
    />

  )
}

export default particles
