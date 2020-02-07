
var describe = require('mocha').describe;
var assertions = require('mocha').it;
var assert = require('assert');


//Librerías

const {Builder, By, Key} = require('selenium-webdriver');

var WebScraper = async (search) => {

  let driver = await new Builder().forBrowser('chrome').build();
  let results = [];
  try {
    await driver.get('http://salcobrand.cl');
    await driver.findElement(By.id('search-input')).sendKeys(`${search}`, Key.RETURN);
    let array_of_elements = await driver.findElements(By.className('product-info'));
    array_of_elements.forEach((result)=> {
      result.getText().then(result => {
        results.push(result);
        console.log(results)
        return results;
      });
    })
    return results;
  } catch(error) {
    console.log('error', error)
  }   
}



// WebScraper('belleza');


describe('Prueba 1', function() {
  describe('Web scraper', function() {
    it('Debería retornar la lista de medicamentos que calzan con la búsqueda "Aspirina"', function() {
      assert.deepEqual(WebScraper("Aspirina"), [
            "Aspirina adulto 500mg caja de 10 tiras",
            "Aspirina forte 650mg caja de 8 tiras",
            "Aspirina pediátrica de 100mg caja de 7 tiras",
            "Acido Acetilsalicilico 500Mg Oral Solido",
            "Acido Acetilsalicilico 500Mg Oral Solido",
            "Acido Acetilsalicilico 100Mg Oral Solido",
            "Acido Acetilsalicilico 650Mg Oral Solido",
            "Acido Acetilsalicilico 100Mg Oral Solido"
        ]);
    });
    it('Debería retornar la lista de medicamentos que calzan con la búsqueda "Aspirina"', function() {
      assert.deepEqual(WebScraper("Pasta de dientes"), [
            "Pasta Dental Anticaries Neutrazúcar ",
            "Pasta Dental Professional Natural Protection Encías ",
            "Pasta de dientes infantil MINIONS",
            "Pasta de dientes Total 12 Aliento Salud",
            "Pasta de Dientes Sensitive",
            "Pasta Dental Total",
            "Pasta Dental Repara y Protege Variedades",
            "Pasta de Dientes White Now ",
            "Pasta de Dientes White Now ",
            "Pasta Dental Professional Natural Protection Esmalte y Encías",
            "Pasta de Dientes White Now",
            "Pasta de Dientes Integral 18 hrs. Resist +",
            "Pasta de Dientes White Now Glossy Chic ",
            "Pasta de dientes Max White 3x2",
            "Pasta Dental Luminous White ",
            "Pasta Dental Repara y Protege Variedades",
            "Pasta Dental Repara y Protege Variedades",
            "Pasta Dental para la Prevención de Caries ",
            "Pasta Dental Max White Crystal Mint ",
            "Pasta de dientes PAW PATROL",
            "Pasta Dental Sensitive ",
            "Pasta Dental White Now para Hombre Super Pure",
            "Pasta de dientes SOY LUNA",
            "Pasta de diente infantil Barbie",
            "Pasta Dental 3D White Sensitive Care",
            "Pasta Dental Professional Natural Protection Sensitive",
            "Pasta Dental Sensitive Proalivio ",
            "Pack Pasta Dental Pepsodent Triple Más  ",
            "Pack pasta dental Xtra Whitening ",
            "Pasta Dental para Dientes Sensibles",
            "Pasta Dental Niños Jun Barney ",
            "Pasta Dental Minipep 2 a 6 años ",
            "Tripack de pasta de dientes Total 12 ",
            "Pasta dental sabor menta",
            "Pasta Dental 3D White  ",
            "Pack pasta dientes Triple Acción ",
            "Pasta Dental Star Wars",
            "Pasta dentrífica White, blanqueadora",
            "Pasta Dental Stage Frozen Sabor a Frutas",
            "Pasta Dental Infantil Sabor Frutas Silvestres",
            "Pack Pasta Pepsodent Bi- Active ",
            "Pack Pasta Dental White Now ",
            "Pasta Dental Complete Protection",
            "Pack de Cepillo y Mini Pasta Dental Dientes Sensibles"
        ]);
    });
  });
});