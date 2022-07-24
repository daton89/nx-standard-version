import { render } from '@testing-library/react';

import App8Lib18 from './app8-lib18';

describe('App8Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
