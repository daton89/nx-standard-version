import { render } from '@testing-library/react';

import App9Lib29 from './app9-lib29';

describe('App9Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});
