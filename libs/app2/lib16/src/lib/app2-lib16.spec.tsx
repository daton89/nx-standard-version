import { render } from '@testing-library/react';

import App2Lib16 from './app2-lib16';

describe('App2Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});
