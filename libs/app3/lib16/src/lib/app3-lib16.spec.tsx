import { render } from '@testing-library/react';

import App3Lib16 from './app3-lib16';

describe('App3Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});
