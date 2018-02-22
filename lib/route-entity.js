/**
 * This file is part of pigalle.routes.base
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module route-entity
 * @description An entity to manage route using the Pigalle framework.
 * @example
 *
 * const {RouteEntity} = require('@pigalle/entities.route')
 *
 * const routeEntity = RouteEntity.factory()
 */

const {EntityBase} = require('@pigalle/entities.base')

/**
 * The Pigalle type of the current entity.
 * @type {string}
 */
const PIGALLE_TYPE = 'route'

/**
 * A base entity for route.
 *
 * @class
 * @public
 */
class RouteEntity extends EntityBase {
  constructor (...args) {
    super(...args)
    this.setType(PIGALLE_TYPE)
  }
}

module.exports = {}
module.exports.RouteEntity = RouteEntity
