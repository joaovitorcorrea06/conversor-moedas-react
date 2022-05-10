import { render, screen } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

test('Deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConversorMoedas/>,div);
  ReactDOM.unmountComponentAtNode(div);
});
