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

        let objects = response;

        objects.forEach(booking => {

            // create card
            const bookingCard = document.createElement('div');
            bookingCard.setAttribute('class', 'card js-preview');
            bookingCard.innerHTML = `<img src="http://1.bp.blogspot.com/-7XiSNsI7Zhc/XL3HYJjFmDI/AAAAAAACt9E/Yzd_cNd6h7IBQcnL4H8R7hHOQXXM_qX6QCK4BGAYYCw/s1600/girassol.gif"
            class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">Your appointment</h5>
            <p class="card-text">See a preview of your appointment.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item company"></li>
            <li class="list-group-item recipient"></li>
            <li class="list-group-item date"></li>
            <li class="list-group-item location"></li>
        </ul>`;
            document.querySelector('.page').appendChild(bookingCard);

            // add booking data to card
            document.querySelector('.company').innerHTML = booking.company;
            document.querySelector('.recipient').innerHTML = booking.recipient;
            document.querySelector('.date').innerHTML = booking.date;
            document.querySelector('.location').innerHTML = booking.location;
        });

        $('#exampleModal').modal('show')
    }
}