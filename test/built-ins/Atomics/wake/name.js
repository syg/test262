// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Atomics.wake.name is "wake".
includes: [propertyHelper.js]
---*/

assert.sameValue(Atomics.wake.name, "wake");

verifyNotEnumerable(Atomics.wake, "name");
verifyNotWritable(Atomics.wake, "name");
verifyConfigurable(Atomics.wake, "name");
