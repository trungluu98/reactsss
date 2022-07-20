import React from 'react'
import {GoogleLogout } from 'react-google-login'

const clientID = 'Your_CLIENT_ID.apps.googleusercontent.com'

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully');
    };
    return (
        <div>
            <GoogleLogout
            clientID={clientID}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}
export default Logout;