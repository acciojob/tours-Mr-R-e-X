import React, { useEffect, useState } from "react";
import Tour from "./Tour";
import { CircularProgress, Grid, Box, colors } from "@material-ui/core";
// import Stack from "@material-ui/core";
const tourData = [
  // predefined tour items
  {
    id: "rec6d6T3q5EBIdCfD",
    name: "Best of Paris in 7 Days Tour",
    info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    image:
      "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
    price: "1,995",
  },
  {
    id: "recIwxrvU9HfJR3B4",
    name: "Best of Ireland in 14 Days Tour",
    info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    image:
      "https://images.ireland.com/media/Images/magazine/culture/august-in-ireland/3b38a606abe3456a81c5f81bdc9d64c8.jpg",
    price: "3,895",
  },
  {
    id: "recJLWcHScdUtI3ny",
    name: "Best of Salzburg & Vienna in 8 Days Tour",
    info: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/7a/salzburg.jpg?w=1400&h=1400&s=1",
    price: "2,695",
  },
  {
    id: "recK2AOoVhIHPLUwn",
    name: "Best of Rome in 7 Days Tour",
    info: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
    image:
      "https://i.natgeofe.com/k/a6c9f195-de20-445d-9d36-745ef56042c5/OG_Colosseum_Ancient-Rome_KIDS_1122_3x2.jpg",
    price: "2,095",
  },
  {
    id: "receAEzz86KzW2gvH",
    name: "Best of Poland in 10 Days Tour",
    info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
    image:
      "https://i.natgeofe.com/k/6eb7149d-9876-40ac-9bf7-d261931ddb56/poland-warsaw_16x9.jpg?w=1200",
    price: "2,595",
  },
];

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTours(tourData);
      setLoading(false);
    }, 1000);
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const refreshTours = () => {
    setTours(tourData);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="secondary" />
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>No more tours</h2>
        <button className="btn" onClick={refreshTours}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <main id="main">
      <h2 className="title">Our Tours</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {tours.map((tour) => (
            <Grid key={tour.id} item xs={6}>
              <Tour {...tour} removeTour={removeTour} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
};

export default App;
