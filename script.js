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


// const quizData = [
//     {
//         id: 1,
//         question: "Quel organisme est capable de survivre dans l'espace ?",
//         responses: ["Fourmis", "Tardigrades", "Bactéries E. coli", "Araignées"],
//         correctResponse: "Tardigrades"
//     },
//     {
//         id: 2,
//         question: "Quel animal peut régénérer la plupart de ses organes, y compris son cerveau ?",
//         responses: ["Requin", "Méduse", "Étoile de mer", "Lézard"],
//         correctResponse: "Étoile de mer"
//     },
//     {
//         id: 3,
//         question: "Quel est le seul mammifère capable de voler ?",
//         responses: ["Chauve-souris", "Souris", "Oiseau-mouche", "Écureuil"],
//         correctResponse: "Chauve-souris"
//     },
//     {
//         id: 4,
//         question: "Quel est le plus petit os du corps humain ?",
//         responses: ["Os du bras", "Os de la cuisse", "Os de l'oreille", "Os du nez"],
//         correctResponse: "Os de l'oreille"
//     },
//     {
//         id: 5,
//         question: "Quel poisson électrique peut produire une décharge électrique suffisamment puissante pour allumer une ampoule ?",
//         responses: ["Poisson-globe", "Raie électrique", "Anguille électrique", "Poisson-chat électrique"],
//         correctResponse: "Anguille électrique"
//     },
//     {
//         id: 6,
//         question: "Quel est l'animal marin qui est biologiquement immortel ?",
//         responses: ["Méduse Turritopsis dohrnii", "Homard", "Baleine", "Étoile de mer"],
//         correctResponse: "Méduse Turritopsis dohrnii"
//     },
//     {
//         id: 7,
//         question: "Quelle créature marine possède trois cœurs et de la 'bleue' dans son nom ?",
//         responses: ["Méduse bleue", "Raie bleue", "Pieuvre bleue", "Baleine bleue"],
//         correctResponse: "Pieuvre bleue"
//     },
//     {
//         id: 8,
//         question: "Quel est le seul mammifère capable de voler et de nager ?",
//         responses: ["Dauphin", "Chauve-souris", "Oiseau-mouche", "Écureuil"],
//         correctResponse: "Chauve-souris"
//     }
// ];









const quizData = [
    {
        id: 1,
        question: "1ère question",
        responses: ["1 premiere question", "2 premiere question", "3 premiere question", "4 premiere question"],
        correctResponse: "2 premiere question"
    },
    {
        id: 2,
        question: "2e question",
        responses: ["1 deuxième question", "2 deuxième question", "3 deuxième question", "4 deuxième question"],
        correctResponse: "2 deuxième question"
    },
    {
        id: 3,
        question: "3e Question",
        responses: ["1 troisième question", "2 troisième question", "3 troisième question", "4 troisième question"],
        correctResponse: "2 troisième question"

    },
    {
        id: 4,
        question: "4e Question",
        responses: ["1 quatrième question", "2 quatrième question", "3 quatrième question", "4 quatrième question"],
        correctResponse: "2 quatrième question"
    }
];






// length of the quiz
const quizLength = quizData.length;

// initialize to the first question
let currentQuestion = 0; // to start at 0


// ------------------------------------------------------
// ------------------------------------------------------
// ----------------- DOM Elements
const questionTitle = document.querySelector("#questionTitle");
const responsesList = document.querySelector("#questionResponses");


const btnNextResponses = document.querySelector("#next");
btnNextResponses.dataset.question = currentQuestion;


// stocker la réponse du user, la bonne réponse, l'état de la réponse
//const userResponses = []; // array of user responses, values added with Map Object
const userResponses = new Map(); // array of user responses, values added with Map Object


// initialize game in the DOM for the first question
addQuestionTitleToDOM(currentQuestion, questionTitle)
addQuestionToDOM(currentQuestion, responsesList);


// 
btnNextResponses.addEventListener("click", function(e) {
    console.log(e.target.dataset.question);
    const currentQuestion = e.target.dataset.question;
    if(currentQuestion < quizLength - 1) {
        e.target.dataset.question++; // add one to go to next question number
        addQuestionTitleToDOM(e.target.dataset.question, questionTitle);
        addQuestionToDOM(e.target.dataset.question, responsesList);

    } else {
        // alert("La partie est finie !!");
        e.target.setAttribute("disabled", true);
        console.log(document.querySelector("#results"));
        document.querySelector("#results").style.display = "inline";
    }
})







// ----------------------------------------------------
// ----------------------------------------------------
// FUNCTIONS

function addQuestionTitleToDOM(currentQuestion, questionTitle) {
    questionTitle.innerText = quizData[currentQuestion].question;
}


function addQuestionToDOM(currentQuestion, responsesList) {   
    responsesList.innerHTML = ""; // reset the responses list
    responsesList.dataset.correctAnswer;
    quizData[currentQuestion].responses.forEach((quizResponse) => {
        const li = document.createElement("li");
        const cls = ["response", "col-6", "px-3", "py-5", "bg", "bg-light", "border", "border-primary-subtle", "rounded"];
        li.classList.add(...cls);
        li.textContent = quizResponse;
        responsesList.appendChild(li);
        li.addEventListener("click", function(e) {
            if(document.querySelector(".selected")) {
                document.querySelector(".selected").classList.remove("selected");
                // console.log("dans le if");
                // console.log(document.querySelector(".selected"));
            }
            // console.log(e.target);
            e.target.classList.add("selected");
            // userResponses.
        });
    });

}