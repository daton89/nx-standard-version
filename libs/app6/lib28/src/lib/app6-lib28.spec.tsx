import { render } from '@testing-library/react';

import App6Lib28 from './app6-lib28';

describe('App6Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});
