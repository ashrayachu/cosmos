

const mongoose = require('mongoose');
const cities = require('./cities');
const { descriptors, places } = require('./seedhelpers');
const Campground = require('../models/campground');


mongoose.connect('mongodb://localhost:27017/yelp-camp', 
{useNewUrlParser: true, 
 useCreateIndex:true,
useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection done!!');
});

const sample = array => array[Math.floor(Math.random() * array.length)];
price = (Math.random*10000)+30;

const seedDB = async () =>{
    await Campground.deleteMany({});
    for(let i = 0; i < 100; i++){
      const random1000 = Math.floor(Math.random() * 50);
      const price = Math.floor(Math.random() *1000+30);
      const camp = new Campground({
        author:'6138a598eee9647654c6678f',
        location: `${cities[random1000].city}, ${cities[random1000].state}`,
         title: `${sample(descriptors)} ${sample(places)}`,
        //  image: 'https://source.unsplash.com/collection/483251',
         description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, aperiam! Explicabo repudiandae unde perspiciatis reprehenderit quam enim debitis molestiae velit, beatae, ad dolore dolorem ullam sit alias vitae. Ipsam, possimus!',
         price,
         geometry: {
          type: "Point",
          coordinates: [
              cities[random1000].longitude,
              cities[random1000].latitude,
          ]
        },
         images: [
          {
            
            url: 'https://res.cloudinary.com/mandricks/image/upload/v1631700490/cosmos/kwj3t05lpx4pngn18pyj.jpg',
            filename: 'cosmos/kwj3t05lpx4pngn18pyj'
          },
          {
            
            url: 'https://res.cloudinary.com/mandricks/image/upload/v1631700501/cosmos/y7www3prbkkltewcwass.jpg',
            filename: 'cosmos/y7www3prbkkltewcwass'
          }
        ]
    })
    await camp.save();
   }
 }
seedDB();



