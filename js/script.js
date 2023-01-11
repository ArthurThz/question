const respostas = [
    "Certeza!",
"Não tenho tanta certeza.",
"É decididamente assim.",
"Não conte com isso.",
"Sem dúvidas!",
"Pergunte novamente mais tarde.",
"Sim, definitivamente!",
"Minha resposta é não.",
"Você pode contar com isso.",
"Melhor não te dizer agora.",
"A meu ver, sim.",
"Minhas fontes dizem não.",
"Provavelmente.",
"Não é possível prever agora.",
"Perspectiva boa.",
"As perspectivas não são tão boas.",
"Sim.",
"Concentre-se e pergunte novamente.",
"Sinais apontam que sim.",
]
const inputPergunta = document.querySelector("#inputPergunta")
const respostasElement = document.querySelector("#resposta")

function fazerPergunta(){
    if (inputPergunta.value == ""){
        alert("Faça uma pergunta")
        return
    }else{

    
    const pergunta ="<div>" + inputPergunta.value + "</div>"
    const totalRespostas = respostas.length
    const randomNumber = Math.floor(Math.random() * totalRespostas)

    console.log(pergunta)
    console.log(respostas[randomNumber])

    respostasElement.innerHTML =pergunta + respostas[randomNumber]

    setTimeout(function(){
        respostasElement.style.opacity = 0;
    },3000)

    respostasElement.style.opacity = 1;    
    

    }
    

    

}