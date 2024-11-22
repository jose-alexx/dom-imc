const btnCalcular = document.querySelector("#btn-calcular");
const resultado = document.querySelector("#resultado");

resultado.innerHTML = ""; /** Limpa o código */

btnCalcular.addEventListener('click' , () => {
    console.log("Clicou!");
    const inputAltura =  document.querySelector("#inputAltura");
    // console.log(inputAltura.value);
    const inputPeso =  document.querySelector("#inputPeso");
    // console.log(inputPeso.value);

    const peso = inputPeso.value;
    const altura = inputAltura.value;
    // console.log(altura*altura);

    // console.log(inputAltura.value)
    // console.log(inputPeso.value)
    resultado.classList.remove("hide");

    const imc = peso / (altura * altura);
    console.log(imc);


    /** const altura = Number(inputAltura.value); */
    /** const peso = Number(inputPeso.value); */
    
    



});