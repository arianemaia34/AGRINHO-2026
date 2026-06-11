const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("keyup", () => {

    const filtro = pesquisa.value.toLowerCase();

    const itens = document.querySelectorAll(".card li");

    itens.forEach(item => {

        const texto = item.textContent.toLowerCase();

        if(texto.includes(filtro)){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }

    });

});