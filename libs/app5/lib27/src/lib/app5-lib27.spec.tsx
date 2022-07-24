import { render } from '@testing-library/react';

import App5Lib27 from './app5-lib27';

describe('App5Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});
