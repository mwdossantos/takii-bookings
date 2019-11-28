import { Component, store } from '../vanite';
import { GetRequest } from '../tools';

export default class GetButton extends Component {
    constructor() {
        super({
            store,
            // element: document.querySelector(`.js-getButton`)
        });

        // Custom logic for our button
        store.setState(
            {
                getState: 'inactive'
            });

        // this.element.addEventListener('click', () => {
        //     this.get();
        // })
        window.onload = this.get();
    }

    // Called every time the state updates

    get() {
        store.state['getState'] = "Getting data";
        new GetRequest(
            'http://rushtothemax.gq:69/getBookings',
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
                <li class="list-group-item company"><h5 class="label">Company:</h5>${booking.company}</li>
                <li class="list-group-item recipient"><h5 class="label">Recipient:</h5>${booking.recipient}</li>
                <li class="list-group-item date"><h5 class="label">Date:</h5>${booking.date}</li>
                <li class="list-group-item location"><h5 class="label">Location</h5>${booking.location}</li>
            </ul>`;
            document.querySelector('#data').appendChild(bookingCard);

        });
    }
}