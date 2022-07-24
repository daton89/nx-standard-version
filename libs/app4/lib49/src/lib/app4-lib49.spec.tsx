import { render } from '@testing-library/react';

import App4Lib49 from './app4-lib49';

describe('App4Lib49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib49 />);
    expect(baseElement).toBeTruthy();
  });
});
