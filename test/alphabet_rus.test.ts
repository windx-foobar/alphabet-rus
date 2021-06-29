import { rusAlphabetAllWords, rusAlphabetToLower, rusAlphabetToUpper } from '../src';

const randomNums: number[] = [5, 22, 11, 7, 0];

describe('Check lib', () => {
   it('5 word in alphabet to lower case', () => {
      expect(rusAlphabetToLower[randomNums[0]]).toEqual('е');
      expect(rusAlphabetToLower[randomNums[1]]).toEqual('х');
      expect(rusAlphabetToLower[randomNums[2]]).toEqual('к');
      expect(rusAlphabetToLower[randomNums[3]]).toEqual('ж');
      expect(rusAlphabetToLower[randomNums[4]]).toEqual('а');
   });

   it('5 word in alphabet to upper case', () => {
      expect(rusAlphabetToUpper[randomNums[0]]).toEqual('Е');
      expect(rusAlphabetToUpper[randomNums[1]]).toEqual('Х');
      expect(rusAlphabetToUpper[randomNums[2]]).toEqual('К');
      expect(rusAlphabetToUpper[randomNums[3]]).toEqual('Ж');
      expect(rusAlphabetToUpper[randomNums[4]]).toEqual('А');
   });

   it('10 word in alphabet to all case', () => {
      expect(rusAlphabetAllWords[40]).toEqual('ж');
      expect(rusAlphabetAllWords[0]).toEqual('А');
      expect(rusAlphabetAllWords[5]).toEqual('Е');
      expect(rusAlphabetAllWords[10]).toEqual('Й');
      expect(rusAlphabetAllWords[19]).toEqual('Т');
      expect(rusAlphabetAllWords[25]).toEqual('Ш');
      expect(rusAlphabetAllWords[60]).toEqual('ъ');
      expect(rusAlphabetAllWords[61]).toEqual('ы');
      expect(rusAlphabetAllWords[50]).toEqual('р');
      expect(rusAlphabetAllWords[58]).toEqual('ш');
   });
});
