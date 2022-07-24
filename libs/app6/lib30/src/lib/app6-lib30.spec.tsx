import { render } from '@testing-library/react';

import App6Lib30 from './app6-lib30';

describe('App6Lib30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib30 />);
    expect(baseElement).toBeTruthy();
  });
});
