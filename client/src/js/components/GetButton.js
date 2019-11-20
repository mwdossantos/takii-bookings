import { Component, store } from '../vanite';
import { GetRequest } from '../tools';

export default class GetButton extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector(`.js-getButton`)
        });

        // Custom logic for our button
        store.setState(
            {
                getState: 'inactive'
            });

        this.element.addEventListener('click', () => {
            this.get();
        })
    }

    // Called every time the state updates
    render() {
        if (store.state['getState'] == "Getting data") {
            this.element.style.opacity = .5;
            this.element.innerHTML = "Getting data...";
        }
        else {
            this.element.style.opacity = 1;
            this.element.innerHTML = "Get data";
        }
    }

    get() {
        store.state['getState'] = "Getting data";
        new GetRequest(
            'http://localhost:5000/getBookings',
            {},
            this.callback
        )
    }

    callback(response) {
        store.state['getState'] = "inactive";

        let objects = [response];

        objects.forEach((booking, index, array) => {
            console.log(index);
        });

        $('#exampleModal').modal('show')
    }
}