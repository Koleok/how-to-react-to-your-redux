/* eslint-disable max-len */
import R from 'ramda'
import React from 'react'

import {
  // BlockQuote,
  CodePane,
  // Cite,
  Deck,
  Heading,
  List,
  ListItem,
  // Quote,
  Slide,
  Text,
} from 'spectacle'

import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'

/* eslint-disable  */
import inlineLogicDemo from 'raw-loader!./inlineLogic.js.example'
/* eslint-enable  */

require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
}

preloader(images)

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

const items = R.map(x => <ListItem key={x}>{x}</ListItem>)

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    {/* Intro */}
    <Slide transition={['zoom']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        How To React to Your Redux
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        A pleasant stew of facts and opinions about
        components, react, and state management
      </Text>
    </Slide>

    {/* A QUICK look at why you'd want to use react or redux. (We'll assume
      you're convinced and not spend long on this since there is ample
      material out there making the case for react) */}
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Why you can start with react
      </Heading>
      <List>
        {items([
          'Reusable skill, write for any platform',
          '☝ demand and 👇 supply for react work',
          'Get your thing working quickly',
          'Just write javascript',
        ])}
      </List>
    </Slide>

    <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
      <Heading size={6} textColor="secondary" caps>
        Why you should SWITCH to react from other frameworks
        that shall remain ng-nameless
      </Heading>
      <List>
        {items([
          '🏁 You hate race conditions and digest cycle issues',
          '⚡ Test with node instead of headless browser',
          '⌛ No waiting for framework features, just build `em',
          '💉 DI is optional',
        ])}
      </List>
    </Slide>

    {/* Benefits of writing components that do as little internal logic as
      possible and some helpful utilities to help you out. */}
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        {'Why I advocate for writing almost exclusively "dumb" components'}
      </Heading>
      <List>
        {items([
          'Remember separation of concerns?',
          'Easy to test appearance and logic independently',
          'No need to distinguish smart from dumb components',
          'More natural reuse of components',
        ])}
      </List>
    </Slide>

    {/* when we allow a step to compute ideal values at each
    component boundary */}
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Cut noisy inline logic and leave fewer code paths per component
      </Heading>
      <CodePane lang="javascript" source={inlineLogicDemo} />
    </Slide>

    {/* Why choosing a state management tool is the most important choice
      you'll make and how to be glad you chose redux. */}

    {/* Building a clever little react app with some FP flavor. */}

    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <p style={{ fontFamily: 'monospace' }}>
        {
          "Simplicity is hard work. But, there's a huge payoff. The person who has a genuinely simpler system - a system made out of genuinely simple parts, is going to be able to affect the greatest change with the least work. He's going to kick your ass. He's gonna spend more time simplifying things up front and in the long haul he's gonna wipe the plate with you because he'll have that ability to change things when you're struggling to push elephants around."
        }
      </p>
      <p>Rich Hickey</p>
    </Slide>

    {/* The joy of debugging with redux and react dev tools */}

    {/* Why your choice to use these tools is going to allow your unit testing
      game to go bananas. */}
  </Deck>
)

export default Presentation
