const { describe, it, expect } = require('./built');

describe('sum', () => {
  it('should check if 2+2 is equal to 4', () => {
    expect(2+2).toBe(4);
  });
});
