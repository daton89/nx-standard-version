import { render } from '@testing-library/react';

import App5Lib12 from './app5-lib12';

describe('App5Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
