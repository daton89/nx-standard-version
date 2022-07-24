import { render } from '@testing-library/react';

import App4Lib29 from './app4-lib29';

describe('App4Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});
