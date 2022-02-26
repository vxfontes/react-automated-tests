import React from 'react';
// renderizar elementos dos testes e screen para pega-los
import { render, screen } from '@testing-library/react';
import App from './App'

describe('componente principal', () => {
    describe('quando abro o banco, ', () => {
        it('mostra nome do banco', () => {
            // esperando que o titulo esteja lá
            // para funcionar, precisamos importar e renderizar 
            render(<App />);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        });
        
        it('mostra saldo', () => {
            render(<App />);
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        });
        
        it('mostra botão finalizar transação', () => {
            render(<App />)
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        })
    })
})
