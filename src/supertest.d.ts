// Type definitions for SuperTest v1.1.0
// Project: https://github.com/visionmedia/supertest
// Definitions by: Alex Varju <https://github.com/varju/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Custom definition here used because of the origin repo uses:
//
//   import superagent = require('superagent');
//
// Which cannot be used in es6 projects.

declare module "supertest" {
  import * as superagent from 'superagent';

  type CallbackHandler = (err: any, res: supertest.Response) => void;

  function supertest(app: any): supertest.SuperTest;

  module supertest {
    function agent(app?: any): supertest.SuperTest;

    interface SuperTest extends superagent.SuperAgent<Test> {
    }

    interface Test extends superagent.Request<Test> {
      url: string;
      serverAddress(app: any, path: string): string;
      expect(status: number, callback?: CallbackHandler): Test;
      expect(status: number, body: string, callback?: CallbackHandler): Test;
      expect(body: string, callback?: CallbackHandler): Test;
      expect(body: RegExp, callback?: CallbackHandler): Test;
      expect(body: Object, callback?: CallbackHandler): Test;
      expect(field: string, val: string, callback?: CallbackHandler): Test;
      expect(field: string, val: RegExp, callback?: CallbackHandler): Test;
      expect(checker: (res: Response) => any): Test;
      end(callback: CallbackHandler): Test;
      
      // to support promisify-supertest
      end(): Promise<supertest.Response>;
    }

    interface Response extends superagent.Response {
    }
  }

  export = supertest;
}