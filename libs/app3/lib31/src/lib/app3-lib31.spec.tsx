import { render } from '@testing-library/react';

import App3Lib31 from './app3-lib31';

describe('App3Lib31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib31 />);
    expect(baseElement).toBeTruthy();
  });
});
