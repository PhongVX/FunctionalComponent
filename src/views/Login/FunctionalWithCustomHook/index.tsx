import * as React from 'react';
import ButtonF from '../../../components/Button/Functional';
import TextFieldF from '../../../components/TextField/Functional';
import withSnackbar from '../../../hoc/withSnackbar';
import useSnackbar from '../../../hooks/useSnackbar';

const Login: React.FC<any> = (props) => {
    const [userName, setUserName] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const {showSnackbar} = useSnackbar();

    const isEmptyUserNamePassword = () => {
        if (userName.trim() === '' || password.trim() === '') {
            return true;
        }
        return false;
    }
    
    const handleLogin = () => {
        let snackbarOptions:any = {}
        if (isEmptyUserNamePassword()) {
            snackbarOptions = {
                message: 'Username and password required.', 
                type: 'error'
            }
            showSnackbar(snackbarOptions);
            return
        }
        //Calling Api to check
        if (userName === 'admin' && password === '123456') {
            snackbarOptions = {
                message: 'Login successfully, redirecting to dashboard.', 
                type: 'success'
            }
            showSnackbar(snackbarOptions)
            return
        }
        snackbarOptions = {
            message: 'Username or password is incorrect.', 
            type: 'error'
        }
        showSnackbar(snackbarOptions);
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
        </>
    )
}

export default withSnackbar(Login);