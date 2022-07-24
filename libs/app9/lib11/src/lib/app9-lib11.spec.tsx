import { render } from '@testing-library/react';

import App9Lib11 from './app9-lib11';

describe('App9Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});
