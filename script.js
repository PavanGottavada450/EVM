let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;
//     const responseMsg = document.getElementById("response-msg");

//     if (name === "" || email === "" || message === "") {
//       alert("Please fill all the fields.");
//       return;
//     }

//     responseMsg.innerHTML =
//       "<span style='color:orange;'> Sending message...</span>";

//     emailjs
//       .send(
//         "service_y3fpin2",
//         "template_gc2cc2m",
//         {
//           to_name: "Pavan Gottavada",
//           from_name: name,
//           email: email,
//           message: message,
//         },
//         "fE8joo2vjD87hCJ-x"
//       )
//       .then(
//         function (response) {
//           alert(" Email Sent Successfully!");
//           responseMsg.innerHTML =
//             "<span style='color:green;'> Message Sent Successfully!</span>";
//           document.getElementById("contact-form").reset();
//         },
//         function (error) {
//           alert(" Failed to send email. Please try again later.");
//           responseMsg.innerHTML =
//             "<span style='color:red;'> Failed to send message. Try again later.</span>";
//         }
//       );
//   });

function sendEmail() {
  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject"),
  };

  emailjs
    .send("service_y3fpin2", "template_gc2cc2m", templateParams)
    .then(() => {
      alert("Email sent successfully!");
    })
    .catch((error) => {
      console.log("error sending email:", error);
      alert("Failed to send email. Please try again.");
    });
}
