import { render } from '@testing-library/react';

import App8Lib5 from './app8-lib5';

describe('App8Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
