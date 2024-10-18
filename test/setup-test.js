import 'jest-styled-components';
import '@testing-library/jest-dom';
import { setStyleSheetSerializerOptions } from 'jest-styled-components/serializer';

setStyleSheetSerializerOptions({
  addStyles: false,
});
