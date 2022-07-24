import { render } from '@testing-library/react';

import App2Lib11 from './app2-lib11';

describe('App2Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});
