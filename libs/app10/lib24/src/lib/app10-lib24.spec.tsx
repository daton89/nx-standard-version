import { render } from '@testing-library/react';

import App10Lib24 from './app10-lib24';

describe('App10Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});
