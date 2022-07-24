import { render } from '@testing-library/react';

import App8Lib31 from './app8-lib31';

describe('App8Lib31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib31 />);
    expect(baseElement).toBeTruthy();
  });
});
