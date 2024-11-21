const btnCalcular = document.querySelector("#btn-calcular");

const inputAltura =  document.querySelector("#inputAltura");
const inputPeso =  document.querySelector("#inputPeso");
const resultado = document.querySelector("#resultado");

resultado.innerHTML = "";

btnCalcular.addEventListener('click' , () => {
    console.log("Clicou!");

    // console.log(inputAltura.value)
    // console.log(inputPeso.value)

    resultado.classList.toggle("hide");
    const altura = Number(inputAltura.value);
    const peso = Number(inputPeso.value);

});