import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Loading from './Loading';
import DialogContainer from './DialogContainer';

import '../src/index.scss'

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('with some material icon', () => (
    <Button onClick={action('clicked')} icon>close</Button>
  ))
  .add('with some material outline', () => (
      <Button onClick={action('clicked')} outline>close</Button>
  ))
  .add('with some material outline primary', () => (
      <Button onClick={action('clicked')} outline primary>close</Button>
  ))
  .add('with some material outline secondary', () => (
      <Button onClick={action('clicked')} outline secondary>close</Button>
  ))
  .add('with some material', () => (
      <Button onClick={action('clicked')}>close</Button>
  ))
  .add('with some material primary disabled', () => (
      <Button onClick={action('clicked')} primary disabled>close</Button>
  ))
  .add('with some material primary', () => (
      <Button onClick={action('clicked')} primary>close</Button>
  ))
  .add('with some material secondary', () => (
      <Button onClick={action('clicked')} secondary>close</Button>
  ));
storiesOf('Loading', module)
  .add('loading component', () => (
    <Loading />
  ))
  .add('loading component Big', () => (
      <Loading containerProps={{ width: '200px', height: '200px' }} />
  ))
  .add('loading component Big outline', () => (
      <Loading componentProps={{outline: true}} containerProps={{ width: '200px', height: '200px' }} />
  ));

storiesOf('Dialog', module)
    .add('Dialog component', () => (
        <DialogContainer />
    ))