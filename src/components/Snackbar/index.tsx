import * as React from 'react';
import {
    Snackbar as MUISnackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import useSnackbar from '../../hooks/useSnackbar';

const Snackbar: React.FC<any> = (props) => {
    const {stateSnackbar, hideSnackbar} = useSnackbar();
    return (
        <MUISnackbar open={stateSnackbar.open} autoHideDuration={stateSnackbar.duration} onClose={hideSnackbar}>
            <MuiAlert onClose={hideSnackbar} severity={stateSnackbar.type}>
                {stateSnackbar.message}
            </MuiAlert>
        </MUISnackbar>
    )
}

export default Snackbar;