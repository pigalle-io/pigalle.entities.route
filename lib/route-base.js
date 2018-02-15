/**
 * This file is part of pigalle.routes.base
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const {PigalleBaseClass} = require('@pigalle/core.base.class');


/**
 * A base class for routing.
 *
 * @class
 * @public
 */
class RouteBase extends PigalleBaseClass {

  /**
   * Create a new instance of {RouteBase}.
   *
   * @param args
   * @constructor
   * @public
   */
  constructor(...args) {
    super(...args);
  }
}

module.exports = {};
module.exports.RouteBase = RouteBase;