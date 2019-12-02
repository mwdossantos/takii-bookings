import { Component, store } from '../vanite';
import { WebRequest } from '../tools';

export default class SaveButton extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector(`.js-saveButton`)
        });

        // Custom logic for our button
        store.setState(
            {
                saveState: 'inactive'
            });

        this.element.addEventListener('click', () => {
            this.save();
        })
    }

    // Called every time the state updates
    render() {
        if (store.state['saveState'] == "saving") {
            this.element.style.opacity = .5;
            this.element.innerHTML = "Saving...";
        }
        else {
            this.element.style.opacity = 1;
            this.element.innerHTML = "Save";
        }
    }

    save() {
        const fields = [
            'valueCompany',
            'valueName',
            'valueAmount',
            'valueDate',
            'valueTime',
            'valueRecipient',
            'valueLocation'
        ];

        let allgood = true;

        fields.forEach(field => {
            if (store.state[field].length == 0)
                allgood = false;
        });

        if (allgood) {
            store.state['saveState'] = "saving";
            new WebRequest(
                'http://rushtothemax.gq:5000/createBookings',
                {
                    company: store.state['valueCompany'],
                    name: store.state['valueName'],
                    amount: store.state['valueAmount'],
                    date: store.state['valueDate'],
                    time: store.state['valueTime'],
                    recipient: store.state['valueRecipient'],
                    location: store.state['valueLocation'],
                },
                this.callback
            )
        }

    }

    callback(response) {
        console.log(response);
        store.state['saveState'] = "inactive";
        $('#exampleModal').modal('show')
    }
}