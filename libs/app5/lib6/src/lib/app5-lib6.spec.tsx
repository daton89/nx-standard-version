import { render } from '@testing-library/react';

import App5Lib6 from './app5-lib6';

describe('App5Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});
