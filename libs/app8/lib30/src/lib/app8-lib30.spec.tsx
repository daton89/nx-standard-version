import { render } from '@testing-library/react';

import App8Lib30 from './app8-lib30';

describe('App8Lib30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib30 />);
    expect(baseElement).toBeTruthy();
  });
});
