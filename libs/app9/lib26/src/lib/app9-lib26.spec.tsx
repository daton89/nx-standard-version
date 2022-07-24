import { render } from '@testing-library/react';

import App9Lib26 from './app9-lib26';

describe('App9Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});
