import { render } from '@testing-library/react';

import App1Lib26 from './app1-lib26';

describe('App1Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});
