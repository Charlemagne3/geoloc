const assert = require('chai').assert;
const validate = require('../lib/validate');

function response() {
  res = {
    statusCode: null,
    message: null,
    status: function(status) { this.statusCode = status; return this; },
    end: function(m) { this.message = m; return this; }
  };
  return res;
}

function next() { }

describe('tests', function() {
  
  it('should require string name', function() {
    const req = {
      body: {
        name: 'location0'
      }
    }
    const res = response();
    const validation = validate(req, res, next);
    assert.equal(validation, null);
  });

  it('should require number lat', function() {
    const req = {
      body: {
        latitude: "test",
        longitude: 29.951065
      }
    }
    const res = response();
    const validation = validate(req, res, next);
    assert.equal(validation.statusCode, 400);
  });

  it('should require number long', function() {
    const req = {
      body: {
        latitude: -90.071533,
        longitude: "test"
      }
    }
    const res = response();
    const validation = validate(req, res, next);
    assert.equal(validation.statusCode, 400);
  });

  it('should require lat with long', function() {
    const req = {
      body: {
        longitude: 29.951065
      }
    };
    const res = response();
    const validation = validate(req, res, next);
    assert.equal(validation.statusCode, 400);
  });

  it('should require long with lat', function() {
    const req = {
      body: {
        latitude: -90.071533
      }
    }
    const res = response();
    const validation = validate(req, res, next);
    assert.equal(validation.statusCode, 400);
  });

});
