import * as React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {Color as AlertColorType} from '@material-ui/lab/Alert';
import ButtonF from '../../../components/Button/Functional';
import TextFieldF from '../../../components/TextField/Functional';

const Login: React.FC<any> = (props) => {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [stateSnackbar, setStateSnackbar] = React.useState({
        open: false,
        type: 'error' as AlertColorType,
        message: '',
        duration: 3000
    });

    React.useEffect(() => {
        console.log('This is like component Didmount');
    }, []);

    const hideSnackbar = () => {
        setStateSnackbar({...stateSnackbar, open:false});
    };

    const showSnackbar = (options:object) => {
        setStateSnackbar({...stateSnackbar, ...options, open:true});
    };

    const isEmptyUserNamePassword = () => {
        if (userName.trim() === '' || password.trim() === '') {
            return true;
        }
        return false;
    }

    const handleLogin = () => {
        if (isEmptyUserNamePassword()) {
            showSnackbar({message: 'Username and password required.', type: 'error'})
            return
        }
        //Calling Api to check
        if (userName === 'admin' && password === '123456') {
            showSnackbar({message: 'Login successfully, redirecting to dashboard.', type: 'success'})
            return
        }
        showSnackbar({message: 'Username or password is incorrect.', type: 'error'})
    }

    const handleUserNameChange = (e: any) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }
   
    return (
        <>
            <div className='wrapper-sample-components'>
                <h1 className='text-center'>Login Form</h1>
                <TextFieldF className='element-100-percent-width' placeHolder='User Name' onChange={handleUserNameChange} />
                <br /><br />
                <TextFieldF className='element-100-percent-width' type='password' placeHolder='Password' onChange={handlePasswordChange} />
                <br /><br />
                <ButtonF className='element-100-percent-width' color='primary' onClick={handleLogin}>Login</ButtonF>
            </div>
            <Snackbar open={stateSnackbar.open} autoHideDuration={stateSnackbar.duration} onClose={hideSnackbar}>
                <MuiAlert onClose={hideSnackbar} severity={stateSnackbar.type}>
                    {stateSnackbar.message}
                </MuiAlert>
            </Snackbar>
        </>
    )
}

export default Login;