import { render } from '@testing-library/react';

import App6Lib35 from './app6-lib35';

describe('App6Lib35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib35 />);
    expect(baseElement).toBeTruthy();
  });
});
