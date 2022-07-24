import { render } from '@testing-library/react';

import App10Lib25 from './app10-lib25';

describe('App10Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});
