import { render } from '@testing-library/react';

import App6Lib22 from './app6-lib22';

describe('App6Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});
