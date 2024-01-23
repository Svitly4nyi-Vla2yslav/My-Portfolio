const options = {
    background: {
      color: {
        value: "#151515",
      },
    },
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        resize: true,
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 0.1,
      },
      move: {
        bounce: false,
        direction: "bottom",
        enable: true,
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 100,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "star",
      },
      size: {
        random: true,
        value: 3,
      },
    },
    detectRetina: true,
  };
  
  export { options };