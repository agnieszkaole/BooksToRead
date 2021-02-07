
const form = document.querySelector('form');
const author = document.getElementById('author');
const title = document.getElementById('title');
const priority = document.querySelectorAll('input[type="radio]');
const category = document.querySelectorAll('option');
const counter = document.querySelector(".book-counter__number");
const bookList = [];
const table =  document.querySelector("table");
const tBody = document.querySelector("tbody");
const tHead = document.querySelector("thead");

const removeBook = (e) => {
    e.target.parentNode.parentNode.remove();
    const index = e.target.parentNode.parentNode;
    console.log(index)
    bookList.splice(index, 1);

    counter.textContent = bookList.length;
};


const addBook = (e) => {
    e.preventDefault();

    const row = table.insertRow(table.rows.length);
    row.insertCell(0).innerHTML = author.value;
    row.insertCell(1).innerHTML = title.value;
    row.insertCell(2).innerHTML = category[document.getElementById('category').selectedIndex].text;
    row.insertCell(3).innerHTML = document.querySelector('input[type="radio"]:checked').value;
    row.insertCell(4).innerHTML = "<i class='fas fa-trash-alt' onclick='removeBook(this)'></i>"

    row.querySelector('i[class="fas fa-trash-alt"]').addEventListener('click', removeBook);

    bookList.push(row);
    tBody.appendChild(row);
    counter.textContent = bookList.length;
    author.value = "";
    title.value = "";

}


form.addEventListener('submit', addBook);




