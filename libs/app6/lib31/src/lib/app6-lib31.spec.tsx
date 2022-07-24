import { render } from '@testing-library/react';

import App6Lib31 from './app6-lib31';

describe('App6Lib31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib31 />);
    expect(baseElement).toBeTruthy();
  });
});
