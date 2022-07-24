import { render } from '@testing-library/react';

import App9Lib40 from './app9-lib40';

describe('App9Lib40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib40 />);
    expect(baseElement).toBeTruthy();
  });
});
