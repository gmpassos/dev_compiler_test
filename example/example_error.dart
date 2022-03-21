import 'dart:async';

void main() {
  _f1([123]);
}

FutureOr<T?> _f1<T>(dynamic o) {
  subF(e) {
    if (e != null) return e as T;
    return _f2<T>(o);
  }

  return subF(o);
}

FutureOr<T?> _f2<T>(dynamic o) => o as T?;
