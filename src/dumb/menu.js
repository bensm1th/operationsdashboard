import React from 'react'
import { Menu } from 'semantic-ui-react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const responseGoogle = (response) => {
  console.log('google response --------------------------------------------------')
  console.log(response);
}

const MenuExampleVerticalSecondary = props => {

  return (
    <Menu pointing secondary>
      <Menu.Item name='Classes' active={props.activeItem === 'Classes'} onClick={props.handleItemClick} />
      <Menu.Item
        name='Add Class'
        active={props.activeItem === 'Add Class'}
        onClick={props.handleItemClick}
      />
      <Menu.Item
        name='Edit Class'
        active={props.activeItem === 'Edit Class'}
        onClick={props.handleItemClick}
      />
      <Menu.Item
        position="right"
      >
          <GoogleLogin
            clientId="97032283596-g1vg9i0rhrrj5o6m8fd1a9rih7m887ss.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
      </Menu.Item>
      <Menu.Item>
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={responseGoogle}
          >
        </GoogleLogout>
      </Menu.Item>
    </Menu>
  )
}

export default MenuExampleVerticalSecondary;

