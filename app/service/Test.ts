import { Service } from 'egg';
import {context} from 'egg-aop';

/**
 * Test Service
 */
@context()
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }
}
