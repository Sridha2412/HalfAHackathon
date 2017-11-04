use cars_information;

db.dropDatabase();

db.cars.insert([
  {
    image:"phantom_i.jpg",
    make: "Rolls Royce",
    model: "Phantom I",
    year: "1925",
    engine_size: "7668cc",
    transmission: "3-speed manual"
  },
  {
    image:"phantom_ii.jpg",
    make: "Rolls Royce",
    model: "Phantom II",
    year: "1929",
    engine_size: "7668cc",
    transmission: "4-speed manual"
  },
  {
    image:"phantom_iii.jpg",
    make: "Rolls Royce",
    model: "Phantom III",
    year: "1936",
    engine_size: "7338cc",
    transmission: "4-speed manual"
  },
  {
    image:"phantom_iv.jpg",
    make: "Rolls Royce",
    model: "Phantom IV",
    year: "1950",
    engine_size: "5.7L",
    transmission: "4-speed automatic"
  },
  {
    image:"phantom_v.jpg",
    make: "Rolls Royce",
    model: "Phantom V",
    year: "1959",
    engine_size: "6230cc",
    transmission: "4-speed automatic"
  },
  {
    image:"phantom_vi.jpg",
    make: "Rolls Royce",
    model: "Phantom VI",
    year: "1968",
    engine_size: "6,2Lcc",
    transmission: ""
  },
  {
    image:"phantom_vii.jpg",
    make: "Rolls Royce",
    model: "Phantom VII",
    year: "2003",
    engine_size: "6.75Lcc",
    transmission: "6-speed automatic"
  },
  {
    image:"phantom_drophead_coupe.jpg",
    make: "Rolls Royce",
    model: "Phantom Drophead Coupe",
    year: "2007",
    engine_size: "V12 6749cc",
    transmission: "6-speed automatic"
  },
  {
    image:"phantom_coupe.jpg",
    make: "Rolls Royce",
    model: "Phantom Coupe",
    year: "2008",
    engine_size: "V12 6.75L",
    transmission: "6-speed automatic"
  },
  {
    image:"phantom_viii.jpg",
    make: "Rolls Royce",
    model: "Phantom VIII",
    year: "2017",
    engine_size: "6.75L",
    transmission: "8-speed automatic"
  }
]);

db.cars.find();
