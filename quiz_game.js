//Arreglos con objetos para las preguntas
const preguntas = [
    {
        pregunta:"¿Cuál es la capital de Argentina?",
        options : ["Ottawa ", "Buenos Aires ", "Francia ", "Europa "],
        answer: 1
    },
    {
        pregunta:"¿Cuál es el valor de X? x + 2(2+5)=10",
        options : ["0 ", "24 ", "-3 ", "-4 "],
        answer: 3
    },
    {
        pregunta:"Cuantos paises hay en el mundo",
        options : ["206 ", "200 ", "145 ", "205 "],
        answer: 0
    },
]

//Declaracion del score inicial
let score = 0;

//Funcion que dispare la pregunta inicial
function ask_question(question) {
    let user_answer = prompt(question.pregunta + " " + question.options)
    if (question.indexOf(parseInt(user_answer)) === question.answer) {
        score++;
        alert("Respuesta Correcta!! Muy bien 10")
    } else {
        alert ("Respuesta Incorrecta!! Falta Estudio")
    }
}
//iterador entre preguntas
preguntas.forEach(function(question) {
    ask_question(question);
})
//Puntuacion Final
alert("¡Cuestionario resuelto de forma exitosa!" + "Tu puntuación final es de " + score + "/" + preguntas.length)

//pq no me da rta correcta parseInt(user_answer) === question.answer