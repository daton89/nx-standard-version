import { render } from '@testing-library/react';

import App5Lib29 from './app5-lib29';

describe('App5Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});
