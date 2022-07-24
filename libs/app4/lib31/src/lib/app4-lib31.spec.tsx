import { render } from '@testing-library/react';

import App4Lib31 from './app4-lib31';

describe('App4Lib31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib31 />);
    expect(baseElement).toBeTruthy();
  });
});
