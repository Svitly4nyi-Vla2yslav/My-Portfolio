const options = {
  particles: {
    number: {
      value: 96,
      density: {
        enable: false,
        value_area: 801.7060304327614
      }
    },
    color: {
      value: "#02d95a"
    },
    shape: {
      type: "star",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.10422178395625899,
      random: true,
      anim: {
        enable: true,
        speed: 1.136908097221883,
        opacity_min: 0.08932849335314796,
        sync: true
      }
    },
    size: {
      value: 4.008530152163807,
      random: true,
      anim: {
        enable: true,
        speed: 31.67101127975246,
        size_min: 5.684540486109416,
        sync: true
      }
    },
    line_linked: {
      enable: true,
      distance: 176.3753266952075,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3.206824121731046,
      direction: "bottom",
      random: false,
      straight: true,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
  
  export { options };