import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Testado as rotas /motorcycle', function () {
  const motorcycleInput: IMotorcycle = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };

  it('Deveria criar uma motorcycle com SUCESSO', async function () {
    const motorcycleOutput = new Motorcycle({ id: '644aadcc961708365ad39602', ...motorcycleInput });
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.createMotorcycle(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Deveria retorna SUCESSO ao buscar todas motorcycles', async function () {
    const motorInput = [new Motorcycle(
      {
        id: '644aadcc961708365ad39602',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        buyValue: 30,
        status: true,
        category: 'Street',
        engineCapacity: 600,
      },
    )]; 
    sinon.stub(Model, 'find').resolves(motorInput);

    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();

    expect(result).to.be.deep.equal(motorInput);
  });

  it('Deveria retornar SUCESSO ao buscar uma motorcycle pelo id', async function () {
    const validId = '644aadcc961708365ad39602';

    const motorcycle = new Motorcycle(motorcycleInput);

    sinon.stub(Model, 'findById').resolves(motorcycle);

    const service = new MotorcycleService();
    const result = await service.getMotorcycleById(validId);

    expect(result).to.be.deep.equal(motorcycle);
  });

  it('Deveria atualiza com SUCESSO uma motorcycle', async function () {
    const id = '644aadcc961708365ad39602';

    const carOutput = new Motorcycle({ id, ...motorcycleInput });
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

    const service = new MotorcycleService();
    const resolves = await service.updated(id, motorcycleInput);

    expect(resolves).to.be.deep.equal(carOutput);
  });

  it('Deveria retornar SUCESSO ao deletar uma motorcycle pelo id', async function () {
    const motorInput = new Motorcycle(
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    );

    sinon.stub(Model, 'findByIdAndDelete').resolves(motorInput);

    const service = new MotorcycleService();
    await service.delete('644aafe9961708365ad39605');
  });

  afterEach(function () {
    sinon.restore();
  });
});