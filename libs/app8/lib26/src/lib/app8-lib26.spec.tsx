import { render } from '@testing-library/react';

import App8Lib26 from './app8-lib26';

describe('App8Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});
