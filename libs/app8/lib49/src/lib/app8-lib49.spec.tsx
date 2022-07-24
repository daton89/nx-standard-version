import { render } from '@testing-library/react';

import App8Lib49 from './app8-lib49';

describe('App8Lib49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib49 />);
    expect(baseElement).toBeTruthy();
  });
});
