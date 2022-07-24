import { render } from '@testing-library/react';

import App1Lib6 from './app1-lib6';

describe('App1Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});
