import { render } from '@testing-library/react';

import App3Lib11 from './app3-lib11';

describe('App3Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});
