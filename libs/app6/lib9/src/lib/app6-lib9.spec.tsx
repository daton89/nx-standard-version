import { render } from '@testing-library/react';

import App6Lib9 from './app6-lib9';

describe('App6Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
