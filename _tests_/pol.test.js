'use strict';

const pol = require('../app.js');

describe('pol (stuff)', () => {
    it('is alive by default', () => {
        expect(pol.isAlive()).toBeTruthy();
    });
    it('dies with an argument', () => {
        expect(pol.isAlive('foo')).toBeFalsy();
    });
});