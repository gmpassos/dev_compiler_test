define(['dart_sdk'], (function load__example_ok(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var example_ok = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var T = {
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  example_ok.main = function main() {
    example_ok._f1(dart.dynamic, T.JSArrayOfint().of([123]));
  };
  example_ok._f1 = function _f1(T, o) {
    function subF(e) {
      if (e != null) return dart.nullable(T).as(e);
      return example_ok._f2(T, o);
    }
    dart.fn(subF, dart.fnType(async.FutureOr$(dart.nullable(T)), [dart.dynamic]));
    return subF(o);
  };
  example_ok._f2 = function _f2(T, o) {
    return dart.nullable(T).as(o);
  };
  dart.trackLibraries("example_ok", {
    "org-dartlang-app:/example/example_ok.dart": example_ok
  }, {
  }, null);
  // Exports:
  return {
    example__example_ok: example_ok
  };
}));

//# sourceMappingURL=example_ok.js.map
