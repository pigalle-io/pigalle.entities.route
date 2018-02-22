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

const {RouteEntity} = require('../lib/route-entity')

describe('Class {RouteEntity}', () => {
  it('should be a function', () => {
    (RouteEntity).should.be.a.Function()
  })
})

describe('Create a instance of {RouteEntity} using <new> keyword', () => {
  it('should be an object', () => {
    (new RouteEntity()).should.be.an.Object()
  })

  it('should be an instance of {RouteEntity}', () => {
    (new RouteEntity()).should.be.an.instanceOf(RouteEntity)
  })
})

describe('Create a instance of {RouteEntity} using <factory> method', () => {
  it('should be an object', () => {
    (RouteEntity.factory()).should.be.an.Object()
  })

  it('should be an instance of {PigalleBaseClass}', () => {
    (RouteEntity.factory()).should.be.an.instanceOf(RouteEntity)
  })
})
