import TextField from './components/TextField';
import SaveButton from './components/SaveButton';
import GetButton from './components/GetButton';

// Load in components per page

let sPath = window.location.pathname;
let sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

if (sPage == "post-bookings.html") {
    const textFields = [
        new TextField('Company'),
        // new TextFields('Name'),
        // new TextFields('Amount'),
        new TextField('Recipient'),
        new TextField('Date'),
        new TextField('Time'),
        new TextField('Location')
    ];
    new SaveButton();
}

else if (sPage == "index.html") {
    new GetButton()
}