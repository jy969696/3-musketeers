const starWars = require('./index');
const starWarsNames = require('./starwars-names.json');

describe('starwars-names', () => {
  describe('all', () => {
    test('should be a fulfilled array', () => {
      expect(starWars.all).toHaveLength(starWarsNames.length)
    });
    test('should be an array of strings', () => {
      //throw new Error('test not yet defined... remove the throw and write your test here');
      bool res != true;
      int i;
      for( i = 0; i < starWarsNames.length; i++)
        {
          if(typeof starWars.all[i]='string'){
            res=true;
        }
      }
      expect(res).toEqual(true)
    });

    test('should contain `Luke Skywalker`', () => {
      //throw new Error('test not yet defined... remove the throw and write your test here');
      /*bool res != true;
      for( i = 0; i < starWarsNames.length; i++)
        {
          if(starWars.all[i]=="Luke Skywalker"){
            res=true;
        }
      }
      expect(res).toEqual(true);*/
      expect(starWars.all).toContain('Luke Skywalker');
    });

    test('should not contain `Ben Quadinaros`', () => {
      //throw new Error('test not yet defined... remove the throw and write your test here');
      expect(starWars.all).not.toContain('Ben Quadinaros');
    });
  });

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      //throw new Error('test not yet defined... remove the throw and write your test here');
        expect(starWars.all).toContain(starWars.random());
    });

    test('should return an array of random items if passed a number', () => {
      //throw new Error('test not yet defined... remove the throw and write your test here');
      const number=random();
      expect(number).toEqual(starWars.random());
    });
  });
});
