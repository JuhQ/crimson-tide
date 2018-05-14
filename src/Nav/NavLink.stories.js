import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import StoryRouter from 'storybook-react-router'

import NavLink from './NavLink'

const NavLinks = [
  { title: 'Planning Group', path: '/planning-group' },
  { title: 'Steering Committee', path: '/steering-committee' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Resources', path: '/resources' },
]

storiesOf('Navigation', module)
  .addDecorator(StoryRouter())
  .add(
    'NavLink',
    withInfo(`
      
      ~~~js
      
      ~~~
    
    `)(() => (
      <NavLink
        color='green'
        to="/resources"
      >
        Resources
      </NavLink>
    ))
  )
