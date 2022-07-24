import { render } from '@testing-library/react';

import App9Lib49 from './app9-lib49';

describe('App9Lib49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib49 />);
    expect(baseElement).toBeTruthy();
  });
});
