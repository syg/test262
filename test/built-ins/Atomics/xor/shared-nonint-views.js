// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test Atomics.xor on shared non-integer TypedArrays
---*/

var sab = new SharedArrayBuffer(1024);

var other_views = [Uint8ClampedArray, Float32Array, Float64Array];

for ( var View of other_views ) {
    var view = new View(sab);

    assert.throws(TypeError, (() => Atomics.xor(view, 0, 0)));
}
