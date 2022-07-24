import { render } from '@testing-library/react';

import App10Lib5 from './app10-lib5';

describe('App10Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
