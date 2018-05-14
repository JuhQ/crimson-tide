import { configure } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info'
import OiraStyles from '../src/styles/oira-styles.css'

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// addon-info
setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
})

configure(loadStories, module)
