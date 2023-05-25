let loginForm = document.querySelector(".header .login-form");

const eyeBtns = document.querySelectorAll(".eye-btn");
const readMoreBtns = document.querySelectorAll(".read-more-btn");
const choosePlanBtns = document.querySelectorAll(".choose-plan-btn");

const modalWrapper = document.getElementById("modalWrapper");
const modalBox = document.getElementById("modalBox");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  loginForm.classList.remove("active");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

function successModalHTML(text1, text2, link, href) {
  return `
  <div class="success-modal">
  <div class="img-box">
    <img src="./image/success.png" alt="success" />
    <h1>Successful !!</h1>
  </div>
  <div class="info-box">
    <p>${text1}</p>
    <p>${text2}</p>
  </div>
  <a href="${href}">${link}</a>
</div>
  `;
}

function serviceModalHTML(title) {
  return `
  <div class="service-modal">
            <div class="title">
              <h1>${title}</h1>
            </div>
            <div class="info">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                impedit odio sequi maxime nulla veniam excepturi at porro
                recusandae explicabo. Doloribus itaque enim soluta! Voluptatem
                aliquid doloremque nam repellat rem!
              </p>
            </div>
            <div class="input-box">
              <input type="text" id="interestInput" placeholder="Your Mobile Number" />
            </div>
            <div class="btn-box">
              <button id="interestBtn">I am Interested</button>
            </div>
          </div>
  `;
}

function planModalHTML(days, cost) {
  return `
  <div class="plan-modal">
            <div class="title">
              <h1>${days} ${days === "1" ? "day" : "days"}</h1>
            </div>
            <div class="subtitle">
              <h1>Cost: $${cost}</h1>
            </div>
            <div class="input-box">
              <input type="text" id="planInput" placeholder="Your Mobile Number" />
            </div>
            <div class="btn-box">
              <button id="planBtn">Book Plan</button>
            </div>
          </div>
  `;
}

eyeBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const dataImg = e.target.getAttribute("data-img");

    // window.location = `/image/${dataImg}`;
    window.open(`/image/${dataImg}`, "_blank");
  });
});

readMoreBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const dataTitle = e.target.getAttribute("data-title");

    modalBox.innerHTML = "";
    modalWrapper.classList.add("hidden");

    modalWrapper.classList.remove("hidden");
    modalBox.innerHTML = serviceModalHTML(dataTitle);
    triggerInterest();
  });
});

function triggerInterest() {
  const interestInput = document.getElementById("interestInput");
  const interestBtn = document.getElementById("interestBtn");

  interestBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (interestInput.value.trim() === "") {
      interestInput.classList.add("error");
      return false;
    }

    interestInput.classList.remove("error");

    modalBox.innerHTML = "";
    modalWrapper.classList.add("hidden");

    modalWrapper.classList.remove("hidden");
    modalBox.innerHTML = successModalHTML(
      "Check your mobile message later.",
      "Your requested service order on schedule !!",
      "Close",
      "/index.html"
    );
  });
}

choosePlanBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const dataDays = e.target.getAttribute("data-days");
    const dataCost = e.target.getAttribute("data-cost");

    modalBox.innerHTML = "";
    modalWrapper.classList.add("hidden");

    modalWrapper.classList.remove("hidden");
    modalBox.innerHTML = planModalHTML(dataDays, dataCost);
    triggerPlan();
  });
});

function triggerPlan() {
  const planInput = document.getElementById("planInput");
  const planBtn = document.getElementById("planBtn");

  planBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (planInput.value.trim() === "") {
      planInput.classList.add("error");
      return false;
    }

    planInput.classList.remove("error");

    modalBox.innerHTML = "";
    modalWrapper.classList.add("hidden");

    modalWrapper.classList.remove("hidden");
    modalBox.innerHTML = successModalHTML(
      "Check your mobile message later.",
      "Your pet car plan on schedule !!",
      "Close",
      "/index.html"
    );
  });
}
