import { render } from '@testing-library/react';

import App2Lib31 from './app2-lib31';

describe('App2Lib31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib31 />);
    expect(baseElement).toBeTruthy();
  });
});
