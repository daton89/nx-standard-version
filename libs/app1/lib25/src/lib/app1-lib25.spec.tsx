import { render } from '@testing-library/react';

import App1Lib25 from './app1-lib25';

describe('App1Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});
