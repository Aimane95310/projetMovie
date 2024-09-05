// on recupere l'objet dans le local storage
const filmInfo = localStorage.getItem("filmInfo");

// on transforme le json en javascript utilisable
const filmParse = JSON.parse(filmInfo);
console.log(filmParse);


document.body.innerHTML += ` <h2>${filmParse.Title}</h2>
                    <p>Date de parution : ${filmParse.Year}</p>
                    <img src="${filmParse.Poster}" alt="Affiche du film ">`
