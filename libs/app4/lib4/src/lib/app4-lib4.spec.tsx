import { render } from '@testing-library/react';

import App4Lib4 from './app4-lib4';

describe('App4Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
