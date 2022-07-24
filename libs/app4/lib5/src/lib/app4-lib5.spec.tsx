import { render } from '@testing-library/react';

import App4Lib5 from './app4-lib5';

describe('App4Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
