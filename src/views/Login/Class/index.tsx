import * as React from 'react';
import { Color as AlertColorType } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import ButtonF from '../../../components/Button/Functional';
import TextFieldF from '../../../components/TextField/Functional';

interface stateType {
    userName: string
    password: string
    stateSnackbar: any
}

class Login extends React.PureComponent<any, stateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            stateSnackbar: {
                open: false,
                type: 'error' as AlertColorType,
                message: '',
                duration: 3000
            }
        };
    }
    isEmptyUserNamePassword = () => {
        if (this.state.userName.trim() === '' || this.state.password.trim() === '') {
            return true;
        }
        return false;
    }

    hideSnackbar = () => {
        this.setState({ stateSnackbar: { open: false } });
    };

    showSnackbar = (options: object) => {
        this.setState({ stateSnackbar: { ...options, open: true } });
    };

    handleLogin = () => {
        let snackbarOptions: any = {}
        const { userName, password } = this.state
        if (this.isEmptyUserNamePassword()) {
            snackbarOptions = {
                message: 'Username and password required.',
                type: 'error'
            }
            this.showSnackbar(snackbarOptions);
            return
        }
        //Calling Api to check
        if (userName === 'admin' && password === '123456') {
            snackbarOptions = {
                message: 'Login successfully, redirecting to dashboard.',
                type: 'success'
            }
            this.showSnackbar(snackbarOptions)
            return
        }
        snackbarOptions = {
            message: 'Username or password is incorrect.',
            type: 'error'
        }
        this.showSnackbar(snackbarOptions);
    }

    handleUserNameChange = (e: any) => {
        this.setState({ userName: e.target.value });
    }

    handlePasswordChange = (e: any) => {
        this.setState({ password: e.target.value });
    }

    render() {
        const {stateSnackbar} = this.state;
        return (
            <>
                <div className='wrapper-sample-components'>
                    <h1 className='text-center'>Login Form</h1>
                    <TextFieldF className='element-100-percent-width' placeHolder='User Name' onChange={this.handleUserNameChange} />
                    <br /><br />
                    <TextFieldF className='element-100-percent-width' type='password' placeHolder='Password' onChange={this.handlePasswordChange} />
                    <br /><br />
                    <ButtonF className='element-100-percent-width' color='primary' onClick={this.handleLogin}>Login</ButtonF>
                </div>
                <Snackbar open={stateSnackbar.open} autoHideDuration={stateSnackbar.duration} onClose={this.hideSnackbar}>
                    <MuiAlert onClose={this.hideSnackbar} severity={stateSnackbar.type}>
                        {stateSnackbar.message}
                    </MuiAlert>
                </Snackbar>
            </>
        )
    }

}

export default Login;