// Copyright (C) 2016 the V8 project authors. All rights reserved.
// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.set-typedarray-offset
description: >
  Set values from different instances using the same buffer and different
  constructor.
includes: [testTypedArray.js, compareArray.js]
features: [SharedArrayBuffer]
---*/

var expected = {
  Int32Array: [1109917696, 42, 0, 4, 5, 6, 7, 8],
  Int16Array: [0, 42, 0, 4, 5, 6, 7, 8],
  Int8Array: [0, 42, 0, 66, 5, 6, 7, 8],
  Uint32Array: [1109917696, 42, 0, 4, 5, 6, 7, 8],
  Uint16Array: [0, 42, 0, 4, 5, 6, 7, 8],
  Uint8Array: [0, 42, 0, 66, 5, 6, 7, 8],
};

var int_views = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array];

testWithTypedArrayConstructors(function(TA) {
  var other = TA === Int32Array ? Int16Array : Int32Array;

  var sab = new SharedArrayBuffer(8);
  var sample = new TA(sab);
  for (var i = 0; i < 8; i++) {
    sample[i] = i;
  }
  var src = new other(sample.buffer, 0, 2);

  // Reflect changes on sample object
  src[0] = 42;

  var result = sample.set(src, 1);

  assert(compareArray(sample, expected[TA.name]), sample);
  assert.sameValue(result, undefined, "returns undefined");
}, int_views);
