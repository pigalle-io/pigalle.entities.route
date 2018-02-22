/**
 * This file is part of pigalle.routes.base
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {RouteBase} = require('../lib/route-base')

describe('Class {RouteBase}', () => {
  it('should be a function', () => {
    (RouteBase).should.be.a.Function()
  })
})

describe('Create a instance of {RouteBase} using <new> keyword', () => {
  it('should be an object', () => {
    (new RouteBase()).should.be.an.Object()
  })

  it('should be an instance of {RouteBase}', () => {
    (new RouteBase()).should.be.an.instanceOf(RouteBase)
  })
})

describe('Create a instance of {RouteBase} using <factory> method', () => {
  it('should be an object', () => {
    (RouteBase.factory()).should.be.an.Object()
  })

  it('should be an instance of {PigalleBaseClass}', () => {
    (RouteBase.factory()).should.be.an.instanceOf(RouteBase)
  })
})
