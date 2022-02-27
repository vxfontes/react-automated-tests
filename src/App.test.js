import React from 'react';
// renderizar elementos dos testes e screen para pega-los
import { render, screen, fireEvent } from '@testing-library/react';
import App, { calcularNovoSaldo } from './App'

describe('componente principal', () => {

    // teste elementos básicos
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
    });

    // teste funções
    describe('quando realizo transação:', () => {
        it('saque, o valor diminui', () => {
            const valores = {
                transacao: 'saque',
                valor: 50,
            }

            // recebe a transação e o valor da conta
            const novoSaldo = calcularNovoSaldo(valores, 150);
            expect(novoSaldo).toBe(100);
        })
    });
    
    it('que é um saque, a transação deve ser realizada', () => {
        // iniciar o app para uso
        render(<App />);

        // pegar elemento pelo texto
        // screen entrega tudo que o render pode oferecer
        const saldo = screen.getByText('R$ 1000');
        // pegar elemento pela label
        const transacao = screen.getByLabelText('Saque');
        // pegar elemento pelo testid: uma propriedade q colocamos dentro das tags para referencia-la no teste  
        const valor = screen.getByTestId('valor');
        const botaoTransacao = screen.getByText('Realizar operação');

        // pega o valor contido 
        expect(saldo.textContent).toBe('R$ 1000')

        // fireevent simula um evento do banco
        // aqui teremos um clique, onde selecionariamos a opção
        fireEvent.click(transacao, { target: { value: 'saque' } }); 
        // mudando o valor
        fireEvent.change(valor, { target: { value: 10 } });
        fireEvent.click(botaoTransacao);

        expect(saldo.textContent).toBe('R$ 990');
    })
})
