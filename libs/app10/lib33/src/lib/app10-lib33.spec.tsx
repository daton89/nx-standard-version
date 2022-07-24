import { render } from '@testing-library/react';

import App10Lib33 from './app10-lib33';

describe('App10Lib33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib33 />);
    expect(baseElement).toBeTruthy();
  });
});
