import "mocha"
import { expect } from "chai"
import {Button,ButtonObserver,Observable,Observer,Event,} from "../src/modificacion1.js"


describe('Modificacion 1 - Obsever mod',() =>{
   it('Comprobamos que funciona el get id de Observador',() =>{
      const ButtonOberver= new ButtonObserver(0,"observador")
      expect(ButtonOberver.getId()).to.be.equal(0);
   })
   it('Comprobamos que funciona el get name',() =>{
      const ButtonOberver= new ButtonObserver(0,"observador")
      expect(ButtonOberver.getName()).to.be.equal("observador");
   })
   it('Comprobamos que funciona el get name',() =>{
      const Button1= new Button<number>(0,"observable")
      expect(Button1.getName()).to.be.equal("observable");
   })  
   it('Comprobamos que funciona el get name',() =>{
      const Button1= new Button<number>(0,"observable")
      expect(Button1.getId()).to.be.equal(0);
   })  
   
});