import { render } from '@testing-library/react';

import App8Lib29 from './app8-lib29';

describe('App8Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});
