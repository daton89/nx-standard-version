import { render } from '@testing-library/react';

import App8Lib4 from './app8-lib4';

describe('App8Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
