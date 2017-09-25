var myTruck = new App.Truck('007', new App.DataStore());

myTruck.createOrder({
  emailAddress: 'dr@no.com',
  coffee: 'decaf'
});

myTruck.createOrder({
  emailAddress: 'me@goldfinger.com',
  coffee: 'double mocha'
});

myTruck.createOrder({
  emailAddress: 'm@bond.com',
  coffee: 'earl grey'
});

myTruck.db;
