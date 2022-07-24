import { render } from '@testing-library/react';

import App3Lib28 from './app3-lib28';

describe('App3Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});
