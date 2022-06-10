const inputSubmitCreate = document.getElementById('submit-create');

inputSubmitCreate.addEventListener('click', edit = (e) => {
    inputSubmitCreate.style.backgroundColor = '#FFFFFF';
    inputSubmitCreate.style.color = '#ACD9B2'
    e.srcElement.value = 'Editar';
});