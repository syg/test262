// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    `Symbol.toStringTag` property descriptor
info: >
    The initial value of the @@toStringTag property is the String value
    "SharedArrayBuffer".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.toStringTag]
---*/

assert.sameValue(SharedArrayBuffer.prototype[Symbol.toStringTag], 'SharedArrayBuffer');

verifyNotEnumerable(SharedArrayBuffer.prototype, Symbol.toStringTag);
verifyNotWritable(SharedArrayBuffer.prototype, Symbol.toStringTag);
verifyConfigurable(SharedArrayBuffer.prototype, Symbol.toStringTag);
