import { render } from '@testing-library/react';

import App10Lib48 from './app10-lib48';

describe('App10Lib48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib48 />);
    expect(baseElement).toBeTruthy();
  });
});
