class ErrorRepository {
  constructor(code, description) {
    this.error = new Map();
    this.error.set(code, description);
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return 'Unknown error';
  }
}

// eslint-disable-next-line import/prefer-default-export
export { ErrorRepository };
