import { render } from '@testing-library/react';

import App10Lib12 from './app10-lib12';

describe('App10Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
