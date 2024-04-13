import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Adiciona dois comentarios novos', () => {
        render(<PostComment />);
        
        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Alo curso da Ebac!'
            }
        });
        fireEvent.click(screen.getByTestId('button'));

        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Bem vindo ao Curso de Python!'
            }
        });
        fireEvent.click(screen.getByTestId('button'));
        expect(screen.getAllByTestId('textos')).toHaveLength(2); 
    });  
});  

