import { render } from '@testing-library/react';

import App8Lib40 from './app8-lib40';

describe('App8Lib40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib40 />);
    expect(baseElement).toBeTruthy();
  });
});
