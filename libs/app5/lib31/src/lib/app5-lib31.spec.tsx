import { render } from '@testing-library/react';

import App5Lib31 from './app5-lib31';

describe('App5Lib31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib31 />);
    expect(baseElement).toBeTruthy();
  });
});
