import { render } from '@testing-library/react';

import App10Lib2 from './app10-lib2';

describe('App10Lib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib2 />);
    expect(baseElement).toBeTruthy();
  });
});
