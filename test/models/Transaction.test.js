const expect = require('chai').expect;
const { Investiment, Transaction } = require('../../src/models');

describe('Transaction', () => {
    describe('attributes', () => {
        it('Deve possuir quantidade e data.', async () => {
            const transaction = await Transaction.create({
                amount: 1,
                date: '2019-06-30'
            });

            expect(transaction.get('amount')).to.equal('1.00');
            expect(transaction.get('date')).to.equal('2019-06-30');
        });
    });

    describe('validations', () => {
        it('Deve validar quantidade', () => {
            const transaction = Transaction.build({ date: '2018-03-15' });
            expect(transaction.validate()).to.be.rejected;
        });

        it('Deve validar a data', () => {
            const transaction = Transaction.build({ amount: 1 });
            expect(transaction.validate()).to.be.rejected;
        });
    });

    describe('relações', () => {
        it('Deve pertencer a Investimento', async () => {
            const transaction = await Transaction.create(
                {
                    amount: 1,
                    date: '2018-03-15',
                    Investiment: { name: 'Inv' }
                },
            { include: [Investiment] });

            expect(transaction.get('Investiment').get('name')).to.equal('Inv');
        });
    });
});