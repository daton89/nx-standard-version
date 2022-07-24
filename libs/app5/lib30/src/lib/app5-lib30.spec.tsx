import { render } from '@testing-library/react';

import App5Lib30 from './app5-lib30';

describe('App5Lib30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib30 />);
    expect(baseElement).toBeTruthy();
  });
});
