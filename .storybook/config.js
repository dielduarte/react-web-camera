import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/ReactWebCamera');
}

configure(loadStories, module);