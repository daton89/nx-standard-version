import { render } from '@testing-library/react';

import App10Lib41 from './app10-lib41';

describe('App10Lib41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib41 />);
    expect(baseElement).toBeTruthy();
  });
});
