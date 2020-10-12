import { expect } from 'chai';
import { generateId } from '../src';

const tests = [
    {
        input: "Number-####",
        resultPattern: /^Number-[0-9abcdef]{4}$/,
        description: "should return hexadecimals in place of hash signs"
    },
    {
        input: "string-with-no-target",
        resultPattern: /^string-with-no-target$/,
        description: "should return the same string if no hash sign specified"
    },
    {
        input: 245,
        resultPattern: /^245$/,
        description: "should convert number to string and return as is"
    },
    {
        input: null,
        resultPattern: /^null$/,
        description: "should return null as string"
    },
]

describe('generateId test', () => {
    tests.forEach(test => {
        it(test.description, () => {
            expect(generateId(test.input)).to.match(test.resultPattern);
        });
    });
});