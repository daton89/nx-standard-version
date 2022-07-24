import { render } from '@testing-library/react';

import App9Lib24 from './app9-lib24';

describe('App9Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});
