import { render } from '@testing-library/react';

import App5Lib11 from './app5-lib11';

describe('App5Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});
