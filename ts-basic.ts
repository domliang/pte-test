let a: String = 's';

interface aa {
  a: String
  b: Number
}

function b<T>(c: boolean, d: T): T {
  return d;
}

class E<T> {
  f: T;
  i: T;
  public g(h: T): T {
    return h ? this.f : this.i;
  }
}
