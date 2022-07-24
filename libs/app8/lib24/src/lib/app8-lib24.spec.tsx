import { render } from '@testing-library/react';

import App8Lib24 from './app8-lib24';

describe('App8Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});
