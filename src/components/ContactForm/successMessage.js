import Swal from "sweetalert2";

const successMessage = (title, text) => {
  Swal.fire({
    icon: "success",
    title: title,
    text: text,
    background: "#242424",
    color: "#FFFFFF",
    confirmButtonColor: "#4EE1A0",
    iconColor: "#4EE1A0",
    timer: 5000,
  });
};

export { successMessage };