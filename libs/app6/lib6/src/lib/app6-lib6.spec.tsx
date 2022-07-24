import { render } from '@testing-library/react';

import App6Lib6 from './app6-lib6';

describe('App6Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});
