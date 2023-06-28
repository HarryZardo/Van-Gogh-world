const botao = document.querySelector(".btn-login");
const form = document.querySelector("form");
const text = document.querySelector("h1");

botao.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.add("esconder-form");
    text.innerHTML= "I put my heart & soul into my work, & have lost my mind in the process.";
})

