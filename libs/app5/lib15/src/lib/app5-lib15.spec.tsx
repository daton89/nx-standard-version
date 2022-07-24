import { render } from '@testing-library/react';

import App5Lib15 from './app5-lib15';

describe('App5Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});
