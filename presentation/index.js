import R from 'ramda'
import React from 'react'

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle'

import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'

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

const li = x => <ListItem key={x}>{x}</ListItem>

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
        {R.map(li, [
          'Reusable skill, write for any platform',
          '☝ demand and 👇 supply for react work',
          'Get your thing working quickly',
          'Just write javascript',
        ])}
      </List>
    </Slide>

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Why you should SWITCH to react from other frameworks
        that shall remain ng-nameless
      </Heading>
      <List>
        {R.map(li, [
          '🏁 You hate race conditions and digest cycle issues',
          '⚡ Test with node instead of headless browser',
          '💉 DI is optional',
        ])}
      </List>
    </Slide>

    {/* Benefits of writing components that do as little internal logic as
      possible and some helpful utilities to help you out. */}

    <Slide transition={['fade']} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>Typography</Heading>
      <Heading size={1} textColor="secondary">Heading 1</Heading>
      <Heading size={2} textColor="secondary">Heading 2</Heading>
      <Heading size={3} textColor="secondary">Heading 3</Heading>
      <Heading size={4} textColor="secondary">Heading 4</Heading>
      <Heading size={5} textColor="secondary">Heading 5</Heading>
      <Text size={6} textColor="secondary">Standard text</Text>
    </Slide>

    {/* Why choosing a state management tool is the most important choice
      you'll make and how to be glad you chose redux. */}

    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Standard List</Heading>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
    </Slide>

    {/* Building a clever little react app with some FP flavor. */}

    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote>Example Quote</Quote>
        <Cite>Author</Cite>
      </BlockQuote>
    </Slide>

    {/* The joy of debugging with redux and react dev tools */}

    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      somthing
    </Slide>

    {/* Why your choice to use these tools is going to allow your unit testing
      game to go bananas. */}
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
      somthing
    </Slide>
  </Deck>
)

export default Presentation
