import { render } from '@testing-library/react';

import App10Lib3 from './app10-lib3';

describe('App10Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});
