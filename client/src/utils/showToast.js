import ReactDOM from 'react-dom';
import {Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
function showToast(open, onClose, severity, text){
    return ReactDOM.createPortal(
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={onClose}
        >
            <Alert severity={severity}>
                {text}
            </Alert>
        </Snackbar>
        , document.getElementById('root'),
    )
}
export {showToast}
