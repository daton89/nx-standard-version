import { render } from '@testing-library/react';

import App5Lib24 from './app5-lib24';

describe('App5Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});
