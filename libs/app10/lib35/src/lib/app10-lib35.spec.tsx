import { render } from '@testing-library/react';

import App10Lib35 from './app10-lib35';

describe('App10Lib35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib35 />);
    expect(baseElement).toBeTruthy();
  });
});
