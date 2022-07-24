import { render } from '@testing-library/react';

import App6Lib11 from './app6-lib11';

describe('App6Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});
