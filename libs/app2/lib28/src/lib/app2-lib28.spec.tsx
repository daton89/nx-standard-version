import { render } from '@testing-library/react';

import App2Lib28 from './app2-lib28';

describe('App2Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});
