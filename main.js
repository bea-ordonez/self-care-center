

var radioAffirmation = document.querySelector(".radio1");
var radioMantra = document.querySelector(".radio2");
var receiveMessageButton = document.querySelector("button");
var message = document.querySelector(".messageHere");
var icon = document.querySelector(".icon");
var heartBtn = document.querySelector(".heart-icon");
var contentBox = document.querySelector(".content-box");
var favoritesFolderButton = document.querySelector('.favorites-icon');
var homeView = document.querySelector(".home-view");
var savedFavoritesView = document.querySelector(".view-saved-favorites");
var homeButton = document.querySelector(".home-button");
var listOfFavorites = document.querySelector(".list-favorites");
var deleteButton = document.querySelector(".delete-button");



var favoritedMessages = [];


receiveMessageButton.addEventListener('click', receiveMessage);
heartBtn.addEventListener('click', addToFavorites);
favoritesFolderButton.addEventListener('click', goToFavorites);
homeButton.addEventListener('click', goHome);
deleteButton.addEventListener('click', deleteMessage);



function displayRandomMessage(array) {
    return Math.floor(Math.random() * array.length);
}

function receiveMessage(){
    if (radioAffirmation.checked){
        message.innerText = affirmations[displayRandomMessage(affirmations)];
    }
    icon.classList.add("hidden");
    heartBtn.classList.remove("hidden");
    favoritesFolderButton.classList.remove("hidden");
    if (radioMantra.checked){
        message.innerText = mantras[displayRandomMessage(mantras)];
        icon.classList.add("hidden");
        heartBtn.classList.remove("hidden");
        favoritesFolderButton.classList.remove("hidden");
    }
}


function addToFavorites(){
    favoritedMessages.push(message.innerText);
}

function goToFavorites(){
    homeView.classList.add("hidden");
    savedFavoritesView.classList.remove("hidden");
    listOfFavorites.innerText = "";
    for (var i = 0; i < favoritedMessages.length; i++){
        listOfFavorites.innerHTML += `<p><input type="checkbox"  class="check-box" id="deletion-box-${i}">${favoritedMessages[i]}</p>`;
    }   
}

function goHome(){
    homeView.classList.remove("hidden");
    savedFavoritesView.classList.add("hidden");
}

function deleteMessage(){
    for (var i = 0; i < favoritedMessages.length; i++) {
        var checkedBox = document.querySelector(`#deletion-box-${i}`);
        if (checkedBox.checked){
            favoritedMessages.splice(i, 1);
            i--;
        }
    }
    listOfFavorites.innerText = ""
    for (var i = 0; i < favoritedMessages.length; i++){
        listOfFavorites.innerHTML += `<p><input type="checkbox"  class="check-box" id="deletion-box-${i}">${favoritedMessages[i]}</p>`;
    }
}






var affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    "I have the freedom & power to create the life I desire.",
    "I choose to be kind to myself and love myself unconditionally.",
    "My possibilities are endless.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I deserve to be healthy and feel good.",
    "I am full of energy and vitality and my mind is calm and peaceful.",
    "Every day I am getting healthier and stronger.",
    "I honor my body by trusting the signals that it sends me.",
    "I manifest perfect health by making smart choices."
];

var mantras = [
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    "Don’t let yesterday take up too much of today.",
    "Every day is a second chance.",
    "Tell the truth and love everyone.",
    "I am free from sadness.",
    "I am enough.",
    "In the beginning it is you, in the middle it is you and in the end it is you.",
    "I love myself.",
    "I am present now.",
    "Inhale the future, exhale the past.",
    "This too shall pass.",
    "Yesterday is not today.",
    "The only constant is change.",
    "Onward and upward.",
    "I am the sky, the rest is weather."
];



