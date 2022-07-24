import { render } from '@testing-library/react';

import App5Lib40 from './app5-lib40';

describe('App5Lib40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib40 />);
    expect(baseElement).toBeTruthy();
  });
});
