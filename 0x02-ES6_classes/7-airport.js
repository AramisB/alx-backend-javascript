// Implement a class named Airport:

// Constructor attributes:
// name (String)
// code (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// The default string description of the class should return the airport code

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
