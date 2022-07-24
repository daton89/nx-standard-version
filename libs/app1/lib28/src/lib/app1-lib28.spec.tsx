import { render } from '@testing-library/react';

import App1Lib28 from './app1-lib28';

describe('App1Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});
