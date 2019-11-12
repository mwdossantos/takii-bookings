import { Component } from '../vanite';
import { store } from '../vanite';

export default class TextField extends Component {
    constructor(name) {
        super({
            store,
            element: document.querySelector(`.js-input${name}`)
        });

        // Custom logic for our button
        this.name = name;

        store.setState(
            {
                [`value${this.name}`]: ''
            });

        this.element.addEventListener('keyup', () => {
            store.state[`value${this.name}`] = this.element.value;
        })
    }

    // Called every time the state updates
    render() {
        const state = store.state;
        document.querySelector(`.js-${this.name}Preview`).innerHTML =
            state[`value${this.name}`] ? state[`value${this.name}`] : "";
    }
}