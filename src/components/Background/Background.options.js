const options = {
  particles: {
    number: {
      value: 300, // Оптимальна кількість частинок
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00ff5a" // Зелений колір для матричного стилю
    },
    shape: {
      type: "char", // Літери як частинки
      character: {
        value: ["1", "0", "1", "0", "1"], // Символи для відображення
        font: "JetBrains Mono",
        style: "normal",
        weight: "400",
        fill: true
      }
    },
    opacity: {
      value: 0.8, // Початкова прозорість
      random: false,
      anim: {
        enable: true, // Динамічна анімація прозорості
        speed: 2, // Швидкість зникнення літер
        opacity_min: 0.1, // Мінімальна прозорість
        sync: false
      }
    },
    size: {
      value: 14, // Розмір символів
      random: false,
      anim: {
        enable: true, // Анімація зміни розміру для динамічності
        speed: 10, 
        size_min: 14,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 5, // Повільний рух для реалістичного ефекту
      direction: "bottom", // Літери падають вниз
      random: false, // Падають рівно вниз
      straight: true, // Без рандомних змін напрямку
      out_mode: "out", // Частинки виходять за межі екрану
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true // Вимкнув hover-ефект для матриці
      },
      onclick: {
        enable: true // Вимкнув клік-ефект для матриці
      },
      resize: true
    }
  },
  retina_detect: true // Підтримка Retina-дисплеїв
};

export { options };
