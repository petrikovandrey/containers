import * as index from './index';


test('new error', () => {
  const result = new index.ErrorRepository('404', 'not found');
  const expected = new Map();
  expected.set('404', 'not found');
  expect(result.error).toEqual(expected);
});

test('translate', () => {
  const error = new index.ErrorRepository('404', 'not found');
  const result = error.translate('500');
  const expected = 'Unknown error';
  expect(result).toEqual(expected);
});
