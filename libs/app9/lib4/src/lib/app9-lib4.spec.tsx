import { render } from '@testing-library/react';

import App9Lib4 from './app9-lib4';

describe('App9Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
