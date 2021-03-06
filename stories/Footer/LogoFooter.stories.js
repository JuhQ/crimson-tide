import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { LogoFooter } from '../../src/index'
import { withInfo } from '@storybook/addon-info'
import StoryRouter from 'storybook-react-router'




storiesOf('Footer', module)
.addDecorator(StoryRouter())
.add(
  'LogoFooter',
  withInfo(`
      A minimal white footer. Links open new tabs or maps, or obfuscated contact methods (i.e. email.)
      
      ~~~js
      <LogoFooter />
      ~~~
    
    `)(() => <LogoFooter />)
)
