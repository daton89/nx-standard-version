import { render } from '@testing-library/react';

import App5Lib4 from './app5-lib4';

describe('App5Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
