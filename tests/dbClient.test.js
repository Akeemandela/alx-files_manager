import { expect, use, should } from 'chai';
import chaiHttp from 'chai-http';
import dbClient from '../utils/db';

use(chaiHttp);
should();

describe('db Client', () => {
  before(async () => {
    await dbClient.usersCollection.deleteMany({});
    await dbClient.filesCollection.deleteMany({});
  });
  after(async () => {
    await dbClient.usersCollection.deleteMany({});
    await dbClient.filesCollection.deleteMany({});
  });

  it('shows that connection is alive', () => {
    expect(dbClient.isAlive()).to.equal(true);
  });

  it('shows that connection is alive', () => {
    expect(dbClient.isAlive()).to.equal(true);
  });

  it('shows number of user documents', async () => {
    await dbClient.usersCollection.deleteMany({});
    expect(await dbClient.nbUsers()).to.equal(0);

    await dbClient.usersCollection.insertOne({ name: 'Larry' });
    await dbClient.usersCollection.insertOne({ name: 'Karla' });
    expect(await dbClient.nbUsers()).to.equal(2);
  });

  it('shows number of file documents', async () => {
    await dbClient.filesCollection.deleteMany({});
    expect(await dbClient.nbFiles()).to.equal(0);

    await dbClient.filesCollection.insertOne({ name: 'FileOne' });
    await dbClient.filesCollection.insertOne({ name: 'FileTwo' });
    expect(await dbClient.nbUsers()).to.equal(2);
  });
});
