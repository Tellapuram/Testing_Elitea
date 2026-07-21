import { test, expect } from '@playwright/test';

test.describe('JavaScript string methods sample coverage', () => {
  test('trim, case conversion, length, and character lookup', async () => {
    const text = '  Hello, JavaScript World!  ';
    const trimmed = text.trim();

    expect(trimmed).toBe('Hello, JavaScript World!');
    expect(trimmed.toUpperCase()).toBe('HELLO, JAVASCRIPT WORLD!');
    expect(trimmed.toLowerCase()).toBe('hello, javascript world!');
    expect(trimmed.length).toBe(24);
    expect(trimmed.charAt(7)).toBe('J');
  });

  test('searching and matching substrings', async () => {
    const trimmed = 'Hello, JavaScript World!';

    expect(trimmed.indexOf('JavaScript')).toBe(7);
    expect(trimmed.lastIndexOf('o')).toBe(18);
    expect(trimmed.includes('World')).toBeTruthy();
    expect(trimmed.startsWith('Hello')).toBeTruthy();
    expect(trimmed.endsWith('World!')).toBeTruthy();
  });

  test('extract and replace values', async () => {
    const trimmed = 'Hello, JavaScript World!';
    const repeated = 'JS is fun. JS is powerful.';

    expect(trimmed.slice(7, 17)).toBe('JavaScript');
    expect(trimmed.substring(7, 17)).toBe('JavaScript');
    expect(trimmed.replace('World', 'Universe')).toBe('Hello, JavaScript Universe!');
    expect(repeated.replaceAll('JS', 'JavaScript')).toBe('JavaScript is fun. JavaScript is powerful.');
  });

  test('split, repeat, pad, and empty string edge cases', async () => {
    const trimmed = 'Hello, JavaScript World!';
    const empty = '';

    expect(trimmed.split(' ')).toEqual(['Hello,', 'JavaScript', 'World!']);
    expect('Hi! '.repeat(3)).toBe('Hi! Hi! Hi! ');
    expect('5'.padStart(3, '0')).toBe('005');
    expect('5'.padEnd(3, '*')).toBe('5**');
    expect(empty.length).toBe(0);
    expect(empty.includes('a')).toBeFalsy();
  });
});
