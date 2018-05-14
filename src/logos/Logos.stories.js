import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'

import ChimeIn from './chime-in.svg'
import GDGD from './gdgd.svg'
import OIRALogo from './oira-logo.svg'


const BG = { backgroundImage: 'linear-gradient(to right, #7474bf, #348ac7)' }

storiesOf('Logos', module).add(
  'ChimeIn',
  withInfo(`
      
      ~~~js
      {ChimeIn}
      ~~~
    
    `)(() => <img style={BG} src={ChimeIn} />)
)

storiesOf('Logos', module).add(
  'Good Data, Good Decisions',
  withInfo(`
      
      ~~~js
      {GDGD}
      ~~~
    
    `)(() => <img style={BG} src={GDGD} />)
)

storiesOf('Logos', module).add(
  'OIRA Logo',
  withInfo(`
      
      ~~~js
      {OIRALogo}
      ~~~
    
    `)(() => <img style={BG} src={OIRALogo} />)
)
