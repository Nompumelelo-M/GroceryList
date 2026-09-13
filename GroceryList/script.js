const buttonSubmit = document.querySelector('button');
const inputItem = document.querySelector('input');
const listItems = document.querySelector('ul');

buttonSubmit.addEventListener('click', () =>{

    const inputValue = inputItem.value;
    listItems.insertAdjacentHTML('beforeend',`<li>${inputValue}</li>`);

});