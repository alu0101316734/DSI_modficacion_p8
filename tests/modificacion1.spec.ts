import "mocha"
import { expect } from "chai"
import {Button,ButtonObserver,Observable,Observer,Event,} from "../src/modificacion1.js"


describe('Modificacion 1 - Obsever mod',() =>{
   it('Comprobamos que funciona el get name',() =>{
      const ButtonOberver= new ButtonObserver(0,"observador")
      expect(ButtonOberver.getId()).to.be.equal(0);
   })
   it('Comprobamos que funciona el get name',() =>{
      const ButtonOberver= new ButtonObserver(0,"observable")
      expect(ButtonOberver.getName()).to.be.equal("observable");
   })
   
});