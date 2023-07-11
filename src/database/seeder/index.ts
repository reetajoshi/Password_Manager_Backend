import config from 'config';

const seedDatabase = (): void => {
  if (config.get('seed_database') === 'true') {
    //
  }
};

export default seedDatabase;
