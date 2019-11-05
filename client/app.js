function addNewUser() {

    new WebRequest('/', {}, (data) => {
        console.log(data);

        const content = document.createElement('p');

        // set name
        content.innerHTML = data;

    });
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    addNewUser();

})
