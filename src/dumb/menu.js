import React from 'react'
import { Menu } from 'semantic-ui-react'

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
    </Menu>
  )
}

export default MenuExampleVerticalSecondary;

