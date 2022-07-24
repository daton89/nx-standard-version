import { render } from '@testing-library/react';

import App10Lib16 from './app10-lib16';

describe('App10Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});
