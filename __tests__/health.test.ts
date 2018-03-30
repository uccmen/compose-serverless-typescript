import * as mod from './../src/handlers/health';
import jestPlugin from 'serverless-jest-plugin';

const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: 'healthCheck' });

describe('health', () => {
  beforeAll((done) => {
    done();
  });

  it('GET /health', () => {
    return wrapped.run({}).then((response) => {
      expect(response.statusCode).toEqual(200);
      expect(JSON.parse(response.body).message).toContain('is alive');
    });
  });
});
