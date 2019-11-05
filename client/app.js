function addNewUser() {

    new WebRequest('/', {}, (data) => {
        console.log(data);

        const content = document.querySelector('.thor');

        // set name
        content.innerHTML = data;

        return data;

    });
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    addNewUser();
})
