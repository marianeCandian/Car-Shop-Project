import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import Cars from '../../../src/Domains/Car';

describe('Deveria buscar todos os carros', function () {
  it('Deveria buscar o carro cadastrado, através do id, com SUCESSO', async function () {
    const id = '634852326b35b59438fbea2f';
    
    const car = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput = new Cars({ ...car });

    sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService();
    const result = await service.getById(id);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria trazer o erro de "Invalid mongo id", ao se passar o id errado', async function () {
    const service = new CarService();
    try {
      await service.getById('invalid_mongo_id');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});