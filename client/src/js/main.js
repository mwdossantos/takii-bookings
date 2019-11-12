import TextField from './components/TextField';
import SaveButton from './components/SaveButton';

// Create the Button instance
const textFields = [
    new TextField('Company'),
    new TextField('Recipient'),
    new TextField('Date'),
    new TextField('Location')
];

new SaveButton();