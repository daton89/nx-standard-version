import { render } from '@testing-library/react';

import App10Lib4 from './app10-lib4';

describe('App10Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
