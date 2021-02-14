import React from 'react'
import Particles from 'react-tsparticles'

const particles = () => {
  return (
    <div style={{ height: '100%', width: '2700px', transform: 'translateX(-10%)' }}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#333",
            },
          },
          fpsLimit: 50,
          interactivity: {
            detectsOn: "window",
            events: {
              resize: {
                enable: true,
                densityAuto: true,
                densityArea: 50
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
                distance: 100,
                duration: 4,
                opacity: 0.4,
                size: 10,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#30f5ff",
            },
            links: {
              color: "#f9ffc2",
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
              speed: 7,
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
    </div>
  )
}

export default particles
