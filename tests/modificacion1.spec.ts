import "mocha"
import { expect } from "chai"
import {add} from "../src/modificacion1.js"


describe('Modificacion 1 - ',() =>{
   it('Comprobamos que funcione correctamente',() =>{
      expect(add(2,3)).to.be.equal(5);
   })
});