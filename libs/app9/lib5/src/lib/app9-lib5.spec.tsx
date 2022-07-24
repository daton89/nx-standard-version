import { render } from '@testing-library/react';

import App9Lib5 from './app9-lib5';

describe('App9Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
