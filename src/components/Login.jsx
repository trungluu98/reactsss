import React from 'react'
import {GoogleLogin } from 'react-google-login'


const clientID = 'Your_CLIENT_ID.apps.googleusercontent.com'

function Login() {
    const onSuccess =( res ) => {
        console.log('[Login success]) currentUser:', res.profileObj);
    };
    const onFailure = ( res ) => {
        console.log('[Login Failed] res:',res);
    };
    return (
        <div>
            <GoogleLogin
            clientId={clientID}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '150px'}}
            isSignedID={true}
            />
        </div>

    );
}
export default Login;