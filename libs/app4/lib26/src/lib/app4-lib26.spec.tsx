import { render } from '@testing-library/react';

import App4Lib26 from './app4-lib26';

describe('App4Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});
