import { render } from '@testing-library/react';

import App10Lib47 from './app10-lib47';

describe('App10Lib47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib47 />);
    expect(baseElement).toBeTruthy();
  });
});
