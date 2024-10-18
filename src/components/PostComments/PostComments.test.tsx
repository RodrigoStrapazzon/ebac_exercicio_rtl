import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  it('Deve permitir a inserção de dois comentários', () => {
    render(<PostComment />);

    // Simular a inserção do primeiro comentário
    const inputField = screen.getByTestId('comment-input');
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.change(inputField, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(submitButton);

    // Verificar se o primeiro comentário foi adicionado
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

    // Simular a inserção do segundo comentário
    fireEvent.change(inputField, { target: { value: 'Segundo comentário' } });
    fireEvent.click(submitButton);

    // Verificar se o segundo comentário foi adicionado
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
  });
});
