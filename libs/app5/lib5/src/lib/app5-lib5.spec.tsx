import { render } from '@testing-library/react';

import App5Lib5 from './app5-lib5';

describe('App5Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
