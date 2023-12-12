// Quiz interactif
// Objectif thématique : Manipulations sur tableaux, Boucles forEach, Fonctions callback, Objet
// map
// 1. Préparation des données
// ● Créer un tableau multi-dimensionnel avec des questions, options de réponse
// et la réponse correcte pour un quiz sur le sujet que vous souhaitez.
// 2. Affichage du quiz
// ● Utiliser forEach pour itérer sur le tableau et afficher chaque question avec les
// options de réponse.
// 3. Gestion des réponses
// ● Utiliser un objet map pour stocker les réponses des utilisateurs avec le format
// { questionId: réponse }.
// 4. Calcul des résultats
// ● Utiliser une fonction callback pour vérifier les réponses correctes et calculer le
// score final.



// Objet Map : Un objet Map contient des paires de clé-valeur et mémorise l'ordre dans lequel les clés ont été insérées.


const quizData = [
    {
        id: 1,
        question: "1ère question",
        responses: ["1", "2", "3", "4"],
        correctResponse: "2"
    },
    {
        id: 2,
        question: "2e question",
        responses: ["1", "2", "3", "4"],
        correctResponse: "2"
    },
    {
        id: 3,
        question: "3e Question",
        responses: ["1", "2", "3", "4"],
        correctResponse: "2"

    },
    {
        id: 4,
        question: "4e Question",
        responses: ["1", "2", "3", "4"],
        correctResponse: "2"
    }
];

// length of the quiz
const quizLength = quizData.length;

const currentQuestion = 0; // to start at 0


// ------------------------------------------------------
// ------------------------------------------------------
// ----------------- DOM Elements
const questionTitle = document.querySelector("#questionTitle");
const responsesList = document.querySelector("#questionResponses");


const btnNextResponses = document.querySelector("#next");


// 
btnNextResponses.addEventListener("click", function(e) {
    console.log(e.target.dataset.question);
    const currentQuestion = e.target.dataset.question;
    if(currentQuestion < quizLength) {
        e.target.dataset.question++; // add one to go to next question number
    }
})





// stocker la réponse du user, la bonne réponse, l'état de la réponse

const userResponses = [] // array of user responses, values added with Map Object






addQuestionTitleToDOM(currentQuestion, questionTitle)
addQuestionToDOM(currentQuestion, responsesList);



// ----------------------------------------------------
// ----------------------------------------------------
// FUNCTIONS

function addQuestionTitleToDOM(currentQuestion, questionTitle) {
    questionTitle.innerText = quizData[currentQuestion].question;
}


function addQuestionToDOM(currentQuestion, responsesList) {   
    responsesList.dataset.correctAnswer
    quizData[currentQuestion].responses.forEach((quizResponse) => {
        const li = document.createElement("li");
        const cls = ["col-6", "px-3", "py-5", , "bg", "bg-light", "border", "border-primary-subtle"];
        li.classList.add(...cls);
        li.textContent = quizResponse;
        responsesList.appendChild(li);
        li.addEventListener("click", function() {

        });
    });

}