import { render } from '@testing-library/react';

import App9Lib18 from './app9-lib18';

describe('App9Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
