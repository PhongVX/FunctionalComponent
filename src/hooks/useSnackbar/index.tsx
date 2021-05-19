import * as React from 'react';
import {Color as AlertColorType} from '@material-ui/lab/Alert';

interface SnackbarOptions {
    open?: boolean
    type?: AlertColorType
    message?: string
    duration: number
}

export default function useSnackbar() {
    const [stateSnackbar, setStateSnackbar] = React.useState<SnackbarOptions>({
        open: false,
        type: 'error' as AlertColorType,
        message: '',
        duration: 3000
    });
    const showSnackbar = (options: SnackbarOptions) => {
        setStateSnackbar({...stateSnackbar, ...options, open: true});
    }
    const hideSnackbar = () => {
        setStateSnackbar({...stateSnackbar, open: false});
    }
    return {
        stateSnackbar,
        showSnackbar,
        hideSnackbar
    }
}