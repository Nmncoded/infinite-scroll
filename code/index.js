let rootElm = document.querySelector(`ul`);
let index = 0;
let windowBottomFarFromDoxBottom = document.documentElement.getBoundingClientRect().bottom;
let windowHeight = document.documentElement.clientHeight;

function addQuotes(){
    for(let i=0 ; i<4; i++){
        console.log(index, `nmn`);
        let li = document.createElement(`li`);
        let divTxt = document.createElement(`div`);
        divTxt.classList.add(`text`);
        divTxt.innerText = quotes[index].quoteText;
        let divAuthor = document.createElement(`div`);
        divAuthor.classList.add(`author`);
        divAuthor.innerText = quotes[index].quoteAuthor;
        li.append(divTxt,divAuthor);
        rootElm.append(li);
        index++
    }
};


document.addEventListener(`scroll`, (event) => {
    if(!(windowBottomFarFromDoxBottom >= windowHeight + 40) && index < quotes.length){
        addQuotes();
    }
})
window.addEventListener(`DOMContentLoaded`, () => {
    alert(`DOM ready!`);
    addQuotes();
})
