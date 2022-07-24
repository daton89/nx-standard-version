import { render } from '@testing-library/react';

import App5Lib26 from './app5-lib26';

describe('App5Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});
