import { render } from '@testing-library/react';

import App6Lib38 from './app6-lib38';

describe('App6Lib38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib38 />);
    expect(baseElement).toBeTruthy();
  });
});
