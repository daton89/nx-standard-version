import { render } from '@testing-library/react';

import App5Lib18 from './app5-lib18';

describe('App5Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
