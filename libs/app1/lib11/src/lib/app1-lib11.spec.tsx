import { render } from '@testing-library/react';

import App1Lib11 from './app1-lib11';

describe('App1Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});
