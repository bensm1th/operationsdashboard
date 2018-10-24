import React from 'react'
import { Menu } from 'semantic-ui-react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './../App.css';


const MenuExampleVerticalSecondary = props => {

  return (
    <div className="mainMenu">
    <Menu pointing secondary >
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
      {!props.authed &&
      <Menu.Item
        position="right"
      >
          <GoogleLogin
            clientId="97032283596-g1vg9i0rhrrj5o6m8fd1a9rih7m887ss.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={props.responseGoogle}
            onFailure={props.responseGoogle}
          />
      </Menu.Item>
      }
      {props.authed && 
      <Menu.Item
        position="right"
      >
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={props.logOutGoogle}
          >
        </GoogleLogout>
      </Menu.Item>
      }
    </Menu>
    </div>
  )
}

export default MenuExampleVerticalSecondary;

