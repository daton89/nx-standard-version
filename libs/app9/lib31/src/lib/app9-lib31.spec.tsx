import { render } from '@testing-library/react';

import App9Lib31 from './app9-lib31';

describe('App9Lib31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib31 />);
    expect(baseElement).toBeTruthy();
  });
});
