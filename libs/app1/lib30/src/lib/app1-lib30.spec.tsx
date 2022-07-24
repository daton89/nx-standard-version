import { render } from '@testing-library/react';

import App1Lib30 from './app1-lib30';

describe('App1Lib30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib30 />);
    expect(baseElement).toBeTruthy();
  });
});
