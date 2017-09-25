var ds = new App.DataStore();

ds.add('m@bond.com', 'tea');


ds.add('james@bond.com', 'eshpressho');

ds.getAll();
Object {
  m@bond.com: "tea", james@bond.com: "eshpressho"
}
ds.remove('james@bond.com');

ds.getAll();
Object {
  m@bond.com: "tea"
};
ds.get('m@bond.com');
"tea"
ds.get('james@bond.com');
