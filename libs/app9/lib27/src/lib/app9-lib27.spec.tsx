import { render } from '@testing-library/react';

import App9Lib27 from './app9-lib27';

describe('App9Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});
