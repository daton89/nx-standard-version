import { render } from '@testing-library/react';

import App1Lib33 from './app1-lib33';

describe('App1Lib33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib33 />);
    expect(baseElement).toBeTruthy();
  });
});
