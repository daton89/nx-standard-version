import { render } from '@testing-library/react';

import App1Lib31 from './app1-lib31';

describe('App1Lib31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib31 />);
    expect(baseElement).toBeTruthy();
  });
});
