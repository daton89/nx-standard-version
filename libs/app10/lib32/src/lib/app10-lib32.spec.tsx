import { render } from '@testing-library/react';

import App10Lib32 from './app10-lib32';

describe('App10Lib32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib32 />);
    expect(baseElement).toBeTruthy();
  });
});
