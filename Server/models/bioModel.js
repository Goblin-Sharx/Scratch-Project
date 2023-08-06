const mongoose = require("mongoose");

const Schema = mongoose.Schema; // assign it to the schema method

// set a person schema
const bioSchema = new Schema({
  borough: String,
  neighborhood : String,
  artists: Array,  
});

// create our model
const Bio = mongoose.model('bio', bioSchema);

// export model through module.exports
module.exports = Bio;

// {
//     "tracks": [
//       {
//         "album": {
//           "album_type": "album",
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//               },
//               "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//               "id": "0TnOYISbd1XYRBk9myaseg",
//               "name": "Pitbull",
//               "type": "artist",
//               "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//             }
//           ],
//           "external_urls": {
//             "spotify": "https://open.spotify.com/album/4rG0MhkU6UojACJxkMHIXB"
//           },
//           "href": "https://api.spotify.com/v1/albums/4rG0MhkU6UojACJxkMHIXB",
//           "id": "4rG0MhkU6UojACJxkMHIXB",
//           "images": [
//             {
//               "height": 640,
//               "url": "https://i.scdn.co/image/ab67616d0000b2731dc7483a9fcfce54822a2f19",
//               "width": 640
//             },
//             {
//               "height": 300,
//               "url": "https://i.scdn.co/image/ab67616d00001e021dc7483a9fcfce54822a2f19",
//               "width": 300
//             },
//             {
//               "height": 64,
//               "url": "https://i.scdn.co/image/ab67616d000048511dc7483a9fcfce54822a2f19",
//               "width": 64
//             }
//           ],
//           "is_playable": true,
//           "name": "Planet Pit (Deluxe Version)",
//           "release_date": "2011-06-17",
//           "release_date_precision": "day",
//           "total_tracks": 16,
//           "type": "album",
//           "uri": "spotify:album:4rG0MhkU6UojACJxkMHIXB"
//         },
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//             },
//             "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//             "id": "0TnOYISbd1XYRBk9myaseg",
//             "name": "Pitbull",
//             "type": "artist",
//             "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//           },
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/21E3waRsmPlU7jZsS13rcj"
//             },
//             "href": "https://api.spotify.com/v1/artists/21E3waRsmPlU7jZsS13rcj",
//             "id": "21E3waRsmPlU7jZsS13rcj",
//             "name": "Ne-Yo",
//             "type": "artist",
//             "uri": "spotify:artist:21E3waRsmPlU7jZsS13rcj"
//           },
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz"
//             },
//             "href": "https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz",
//             "id": "4D75GcNG95ebPtNvoNVXhz",
//             "name": "AFROJACK",
//             "type": "artist",
//             "uri": "spotify:artist:4D75GcNG95ebPtNvoNVXhz"
//           },
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/1ruutHJcECI7cos2n5TqpO"
//             },
//             "href": "https://api.spotify.com/v1/artists/1ruutHJcECI7cos2n5TqpO",
//             "id": "1ruutHJcECI7cos2n5TqpO",
//             "name": "Nayer",
//             "type": "artist",
//             "uri": "spotify:artist:1ruutHJcECI7cos2n5TqpO"
//           }
//         ],
//         "disc_number": 1,
//         "duration_ms": 252306,
//         "explicit": false,
//         "external_ids": {
//           "isrc": "USJAY1100032"
//         },
//         "external_urls": {
//           "spotify": "https://open.spotify.com/track/4QNpBfC0zvjKqPJcyqBy9W"
//         },
//         "href": "https://api.spotify.com/v1/tracks/4QNpBfC0zvjKqPJcyqBy9W",
//         "id": "4QNpBfC0zvjKqPJcyqBy9W",
//         "is_local": false,
//         "is_playable": true,
//         "name": "Give Me Everything (feat. Ne-Yo, Afrojack & Nayer)",
//         "popularity": 85,
//         "preview_url": "https://p.scdn.co/mp3-preview/6eafa4293d2b35b2e75ffab5ec1bba8ec00d5082?cid=04a64ee2e447482f8a23dcb6de3316f0",
//         "track_number": 2,
//         "type": "track",
//         "uri": "spotify:track:4QNpBfC0zvjKqPJcyqBy9W"
//       },
//       {
//         "album": {
//           "album_type": "album",
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//               },
//               "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//               "id": "0TnOYISbd1XYRBk9myaseg",
//               "name": "Pitbull",
//               "type": "artist",
//               "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//             }
//           ],
//           "external_urls": {
//             "spotify": "https://open.spotify.com/album/2F7tejLHzTqFq2XLol9ZGy"
//           },
//           "href": "https://api.spotify.com/v1/albums/2F7tejLHzTqFq2XLol9ZGy",
//           "id": "2F7tejLHzTqFq2XLol9ZGy",
//           "images": [
//             {
//               "height": 640,
//               "url": "https://i.scdn.co/image/ab67616d0000b273f2486b438645e97b523e4f90",
//               "width": 640
//             },
//             {
//               "height": 300,
//               "url": "https://i.scdn.co/image/ab67616d00001e02f2486b438645e97b523e4f90",
//               "width": 300
//             },
//             {
//               "height": 64,
//               "url": "https://i.scdn.co/image/ab67616d00004851f2486b438645e97b523e4f90",
//               "width": 64
//             }
//           ],
//           "is_playable": true,
//           "name": "Global Warming: Meltdown (Deluxe Version)",
//           "release_date": "2012",
//           "release_date_precision": "year",
//           "total_tracks": 17,
//           "type": "album",
//           "uri": "spotify:album:2F7tejLHzTqFq2XLol9ZGy"
//         },
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//             },
//             "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//             "id": "0TnOYISbd1XYRBk9myaseg",
//             "name": "Pitbull",
//             "type": "artist",
//             "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//           },
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/6LqNN22kT3074XbTVUrhzX"
//             },
//             "href": "https://api.spotify.com/v1/artists/6LqNN22kT3074XbTVUrhzX",
//             "id": "6LqNN22kT3074XbTVUrhzX",
//             "name": "Kesha",
//             "type": "artist",
//             "uri": "spotify:artist:6LqNN22kT3074XbTVUrhzX"
//           }
//         ],
//         "disc_number": 1,
//         "duration_ms": 204160,
//         "explicit": false,
//         "external_ids": {
//           "isrc": "USRC11301695"
//         },
//         "external_urls": {
//           "spotify": "https://open.spotify.com/track/3cHyrEgdyYRjgJKSOiOtcS"
//         },
//         "href": "https://api.spotify.com/v1/tracks/3cHyrEgdyYRjgJKSOiOtcS",
//         "id": "3cHyrEgdyYRjgJKSOiOtcS",
//         "is_local": false,
//         "is_playable": true,
//         "name": "Timber (feat. Ke$ha)",
//         "popularity": 84,
//         "preview_url": "https://p.scdn.co/mp3-preview/54825c719d56bd5b737ac7c1aa3ce41ad3eef338?cid=04a64ee2e447482f8a23dcb6de3316f0",
//         "track_number": 13,
//         "type": "track",
//         "uri": "spotify:track:3cHyrEgdyYRjgJKSOiOtcS"
//       },
//       {
//         "album": {
//           "album_type": "album",
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//               },
//               "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//               "id": "0TnOYISbd1XYRBk9myaseg",
//               "name": "Pitbull",
//               "type": "artist",
//               "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//             }
//           ],
//           "external_urls": {
//             "spotify": "https://open.spotify.com/album/4EUf4YyNjuXypWY6W5wEDm"
//           },
//           "href": "https://api.spotify.com/v1/albums/4EUf4YyNjuXypWY6W5wEDm",
//           "id": "4EUf4YyNjuXypWY6W5wEDm",
//           "images": [
//             {
//               "height": 640,
//               "url": "https://i.scdn.co/image/ab67616d0000b2731e340d1480e7bb29a45e3bd7",
//               "width": 640
//             },
//             {
//               "height": 300,
//               "url": "https://i.scdn.co/image/ab67616d00001e021e340d1480e7bb29a45e3bd7",
//               "width": 300
//             },
//             {
//               "height": 64,
//               "url": "https://i.scdn.co/image/ab67616d000048511e340d1480e7bb29a45e3bd7",
//               "width": 64
//             }
//           ],
//           "is_playable": true,
//           "name": "Globalization",
//           "release_date": "2014-11-21",
//           "release_date_precision": "day",
//           "total_tracks": 11,
//           "type": "album",
//           "uri": "spotify:album:4EUf4YyNjuXypWY6W5wEDm"
//         },
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//             },
//             "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//             "id": "0TnOYISbd1XYRBk9myaseg",
//             "name": "Pitbull",
//             "type": "artist",
//             "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//           },
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/21E3waRsmPlU7jZsS13rcj"
//             },
//             "href": "https://api.spotify.com/v1/artists/21E3waRsmPlU7jZsS13rcj",
//             "id": "21E3waRsmPlU7jZsS13rcj",
//             "name": "Ne-Yo",
//             "type": "artist",
//             "uri": "spotify:artist:21E3waRsmPlU7jZsS13rcj"
//           }
//         ],
//         "disc_number": 1,
//         "duration_ms": 229360,
//         "explicit": true,
//         "external_ids": {
//           "isrc": "USRC11402647"
//         },
//         "external_urls": {
//           "spotify": "https://open.spotify.com/track/2bJvI42r8EF3wxjOuDav4r"
//         },
//         "href": "https://api.spotify.com/v1/tracks/2bJvI42r8EF3wxjOuDav4r",
//         "id": "2bJvI42r8EF3wxjOuDav4r",
//         "is_local": false,
//         "is_playable": true,
//         "name": "Time of Our Lives",
//         "popularity": 84,
//         "preview_url": "https://p.scdn.co/mp3-preview/d508371276a297486ace8d4ff596c54ae9e65260?cid=04a64ee2e447482f8a23dcb6de3316f0",
//         "track_number": 4,
//         "type": "track",
//         "uri": "spotify:track:2bJvI42r8EF3wxjOuDav4r"
//       },
//       {
//         "album": {
//           "album_type": "album",
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//               },
//               "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//               "id": "0TnOYISbd1XYRBk9myaseg",
//               "name": "Pitbull",
//               "type": "artist",
//               "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//             }
//           ],
//           "external_urls": {
//             "spotify": "https://open.spotify.com/album/2F7tejLHzTqFq2XLol9ZGy"
//           },
//           "href": "https://api.spotify.com/v1/albums/2F7tejLHzTqFq2XLol9ZGy",
//           "id": "2F7tejLHzTqFq2XLol9ZGy",
//           "images": [
//             {
//               "height": 640,
//               "url": "https://i.scdn.co/image/ab67616d0000b273f2486b438645e97b523e4f90",
//               "width": 640
//             },
//             {
//               "height": 300,
//               "url": "https://i.scdn.co/image/ab67616d00001e02f2486b438645e97b523e4f90",
//               "width": 300
//             },
//             {
//               "height": 64,
//               "url": "https://i.scdn.co/image/ab67616d00004851f2486b438645e97b523e4f90",
//               "width": 64
//             }
//           ],
//           "is_playable": true,
//           "name": "Global Warming: Meltdown (Deluxe Version)",
//           "release_date": "2012",
//           "release_date_precision": "year",
//           "total_tracks": 17,
//           "type": "album",
//           "uri": "spotify:album:2F7tejLHzTqFq2XLol9ZGy"
//         },
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//             },
//             "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//             "id": "0TnOYISbd1XYRBk9myaseg",
//             "name": "Pitbull",
//             "type": "artist",
//             "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//           },
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/1l7ZsJRRS8wlW3WfJfPfNS"
//             },
//             "href": "https://api.spotify.com/v1/artists/1l7ZsJRRS8wlW3WfJfPfNS",
//             "id": "1l7ZsJRRS8wlW3WfJfPfNS",
//             "name": "Christina Aguilera",
//             "type": "artist",
//             "uri": "spotify:artist:1l7ZsJRRS8wlW3WfJfPfNS"
//           }
//         ],
//         "disc_number": 1,
//         "duration_ms": 229506,
//         "explicit": false,
//         "external_ids": {
//           "isrc": "USRC11201328"
//         },
//         "external_urls": {
//           "spotify": "https://open.spotify.com/track/0Hf4aIJpsN4Os2f0y0VqWl"
//         },
//         "href": "https://api.spotify.com/v1/tracks/0Hf4aIJpsN4Os2f0y0VqWl",
//         "id": "0Hf4aIJpsN4Os2f0y0VqWl",
//         "is_local": false,
//         "is_playable": true,
//         "name": "Feel This Moment (feat. Christina Aguilera)",
//         "popularity": 81,
//         "preview_url": "https://p.scdn.co/mp3-preview/deb34682637ed436b1d85841d7ac385541a1225c?cid=04a64ee2e447482f8a23dcb6de3316f0",
//         "track_number": 3,
//         "type": "track",
//         "uri": "spotify:track:0Hf4aIJpsN4Os2f0y0VqWl"
//       },
//       {
//         "album": {
//           "album_type": "album",
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//               },
//               "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//               "id": "0TnOYISbd1XYRBk9myaseg",
//               "name": "Pitbull",
//               "type": "artist",
//               "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//             }
//           ],
//           "external_urls": {
//             "spotify": "https://open.spotify.com/album/4RaAjieYFIZRF8uh6GY43r"
//           },
//           "href": "https://api.spotify.com/v1/albums/4RaAjieYFIZRF8uh6GY43r",
//           "id": "4RaAjieYFIZRF8uh6GY43r",
//           "images": [
//             {
//               "height": 640,
//               "url": "https://i.scdn.co/image/ab67616d0000b273a511f69870fa68e7ba78c099",
//               "width": 640
//             },
//             {
//               "height": 300,
//               "url": "https://i.scdn.co/image/ab67616d00001e02a511f69870fa68e7ba78c099",
//               "width": 300
//             },
//             {
//               "height": 64,
//               "url": "https://i.scdn.co/image/ab67616d00004851a511f69870fa68e7ba78c099",
//               "width": 64
//             }
//           ],
//           "is_playable": true,
//           "name": "Pitbull Starring In Rebelution",
//           "release_date": "2009-08-27",
//           "release_date_precision": "day",
//           "total_tracks": 14,
//           "type": "album",
//           "uri": "spotify:album:4RaAjieYFIZRF8uh6GY43r"
//         },
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//             },
//             "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//             "id": "0TnOYISbd1XYRBk9myaseg",
//             "name": "Pitbull",
//             "type": "artist",
//             "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//           }
//         ],
//         "disc_number": 1,
//         "duration_ms": 237600,
//         "explicit": false,
//         "external_ids": {
//           "isrc": "USJAY0900063"
//         },
//         "external_urls": {
//           "spotify": "https://open.spotify.com/track/0OPyDgTRuIdCJ9B4bYSths"
//         },
//         "href": "https://api.spotify.com/v1/tracks/0OPyDgTRuIdCJ9B4bYSths",
//         "id": "0OPyDgTRuIdCJ9B4bYSths",
//         "is_local": false,
//         "is_playable": true,
//         "name": "Hotel Room Service",
//         "popularity": 75,
//         "preview_url": "https://p.scdn.co/mp3-preview/614935c52f5f7c7054c603ce35928b7c87201dd9?cid=04a64ee2e447482f8a23dcb6de3316f0",
//         "track_number": 8,
//         "type": "track",
//         "uri": "spotify:track:0OPyDgTRuIdCJ9B4bYSths"
//       },
//       {
//         "album": {
//           "album_type": "album",
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//               },
//               "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//               "id": "0TnOYISbd1XYRBk9myaseg",
//               "name": "Pitbull",
//               "type": "artist",
//               "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//             }
//           ],
//           "external_urls": {
//             "spotify": "https://open.spotify.com/album/4rG0MhkU6UojACJxkMHIXB"
//           },
//           "href": "https://api.spotify.com/v1/albums/4rG0MhkU6UojACJxkMHIXB",
//           "id": "4rG0MhkU6UojACJxkMHIXB",
//           "images": [
//             {
//               "height": 640,
//               "url": "https://i.scdn.co/image/ab67616d0000b2731dc7483a9fcfce54822a2f19",
//               "width": 640
//             },
//             {
//               "height": 300,
//               "url": "https://i.scdn.co/image/ab67616d00001e021dc7483a9fcfce54822a2f19",
//               "width": 300
//             },
//             {
//               "height": 64,
//               "url": "https://i.scdn.co/image/ab67616d000048511dc7483a9fcfce54822a2f19",
//               "width": 64
//             }
//           ],
//           "is_playable": true,
//           "name": "Planet Pit (Deluxe Version)",
//           "release_date": "2011-06-17",
//           "release_date_precision": "day",
//           "total_tracks": 16,
//           "type": "album",
//           "uri": "spotify:album:4rG0MhkU6UojACJxkMHIXB"
//         },
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//             },
//             "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//             "id": "0TnOYISbd1XYRBk9myaseg",
//             "name": "Pitbull",
//             "type": "artist",
//             "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//           },
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/3aQeKQSyrW4qWr35idm0cy"
//             },
//             "href": "https://api.spotify.com/v1/artists/3aQeKQSyrW4qWr35idm0cy",
//             "id": "3aQeKQSyrW4qWr35idm0cy",
//             "name": "T-Pain",
//             "type": "artist",
//             "uri": "spotify:artist:3aQeKQSyrW4qWr35idm0cy"
//           }
//         ],
//         "disc_number": 1,
//         "duration_ms": 234453,
//         "explicit": false,
//         "external_ids": {
//           "isrc": "USJAY1000153"
//         },
//         "external_urls": {
//           "spotify": "https://open.spotify.com/track/3rfhI32Il2hVRKDkuGeeen"
//         },
//         "href": "https://api.spotify.com/v1/tracks/3rfhI32Il2hVRKDkuGeeen",
//         "id": "3rfhI32Il2hVRKDkuGeeen",
//         "is_local": false,
//         "is_playable": true,
//         "name": "Hey Baby (Drop It to the Floor) (feat. T-Pain)",
//         "popularity": 79,
//         "preview_url": "https://p.scdn.co/mp3-preview/01321c3e80ab86e0e642e8cf8a4fcbc7a0603e36?cid=04a64ee2e447482f8a23dcb6de3316f0",
//         "track_number": 4,
//         "type": "track",
//         "uri": "spotify:track:3rfhI32Il2hVRKDkuGeeen"
//       },
//       {
//         "album": {
//           "album_type": "album",
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//               },
//               "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//               "id": "0TnOYISbd1XYRBk9myaseg",
//               "name": "Pitbull",
//               "type": "artist",
//               "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//             }
//           ],
//           "external_urls": {
//             "spotify": "https://open.spotify.com/album/4rG0MhkU6UojACJxkMHIXB"
//           },
//           "href": "https://api.spotify.com/v1/albums/4rG0MhkU6UojACJxkMHIXB",
//           "id": "4rG0MhkU6UojACJxkMHIXB",
//           "images": [
//             {
//               "height": 640,
//               "url": "https://i.scdn.co/image/ab67616d0000b2731dc7483a9fcfce54822a2f19",
//               "width": 640
//             },
//             {
//               "height": 300,
//               "url": "https://i.scdn.co/image/ab67616d00001e021dc7483a9fcfce54822a2f19",
//               "width": 300
//             },
//             {
//               "height": 64,
//               "url": "https://i.scdn.co/image/ab67616d000048511dc7483a9fcfce54822a2f19",
//               "width": 64
//             }
//           ],
//           "is_playable": true,
//           "name": "Planet Pit (Deluxe Version)",
//           "release_date": "2011-06-17",
//           "release_date_precision": "day",
//           "total_tracks": 16,
//           "type": "album",
//           "uri": "spotify:album:4rG0MhkU6UojACJxkMHIXB"
//         },
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//             },
//             "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//             "id": "0TnOYISbd1XYRBk9myaseg",
//             "name": "Pitbull",
//             "type": "artist",
//             "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//           },
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z"
//             },
//             "href": "https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z",
//             "id": "7bXgB6jMjp9ATFy66eO08Z",
//             "name": "Chris Brown",
//             "type": "artist",
//             "uri": "spotify:artist:7bXgB6jMjp9ATFy66eO08Z"
//           }
//         ],
//         "disc_number": 1,
//         "duration_ms": 227280,
//         "explicit": false,
//         "external_ids": {
//           "isrc": "USJAY1100015"
//         },
//         "external_urls": {
//           "spotify": "https://open.spotify.com/track/62zFEHfAYl5kdHYOivj4BC"
//         },
//         "href": "https://api.spotify.com/v1/tracks/62zFEHfAYl5kdHYOivj4BC",
//         "id": "62zFEHfAYl5kdHYOivj4BC",
//         "is_local": false,
//         "is_playable": true,
//         "name": "International Love (feat. Chris Brown)",
//         "popularity": 79,
//         "preview_url": "https://p.scdn.co/mp3-preview/796c030b6336cedd4a816f931c818a5507bf4607?cid=04a64ee2e447482f8a23dcb6de3316f0",
//         "track_number": 8,
//         "type": "track",
//         "uri": "spotify:track:62zFEHfAYl5kdHYOivj4BC"
//       },
//       {
//         "album": {
//           "album_type": "album",
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//               },
//               "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//               "id": "0TnOYISbd1XYRBk9myaseg",
//               "name": "Pitbull",
//               "type": "artist",
//               "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//             }
//           ],
//           "external_urls": {
//             "spotify": "https://open.spotify.com/album/4EUf4YyNjuXypWY6W5wEDm"
//           },
//           "href": "https://api.spotify.com/v1/albums/4EUf4YyNjuXypWY6W5wEDm",
//           "id": "4EUf4YyNjuXypWY6W5wEDm",
//           "images": [
//             {
//               "height": 640,
//               "url": "https://i.scdn.co/image/ab67616d0000b2731e340d1480e7bb29a45e3bd7",
//               "width": 640
//             },
//             {
//               "height": 300,
//               "url": "https://i.scdn.co/image/ab67616d00001e021e340d1480e7bb29a45e3bd7",
//               "width": 300
//             },
//             {
//               "height": 64,
//               "url": "https://i.scdn.co/image/ab67616d000048511e340d1480e7bb29a45e3bd7",
//               "width": 64
//             }
//           ],
//           "is_playable": true,
//           "name": "Globalization",
//           "release_date": "2014-11-21",
//           "release_date_precision": "day",
//           "total_tracks": 11,
//           "type": "album",
//           "uri": "spotify:album:4EUf4YyNjuXypWY6W5wEDm"
//         },
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//             },
//             "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//             "id": "0TnOYISbd1XYRBk9myaseg",
//             "name": "Pitbull",
//             "type": "artist",
//             "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//           },
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/3s73tswJycj6HTBNNN393z"
//             },
//             "href": "https://api.spotify.com/v1/artists/3s73tswJycj6HTBNNN393z",
//             "id": "3s73tswJycj6HTBNNN393z",
//             "name": "John Ryan",
//             "type": "artist",
//             "uri": "spotify:artist:3s73tswJycj6HTBNNN393z"
//           }
//         ],
//         "disc_number": 1,
//         "duration_ms": 236200,
//         "explicit": false,
//         "external_ids": {
//           "isrc": "USRC11401783"
//         },
//         "external_urls": {
//           "spotify": "https://open.spotify.com/track/4Y7XAxTANhu3lmnLAzhWJW"
//         },
//         "href": "https://api.spotify.com/v1/tracks/4Y7XAxTANhu3lmnLAzhWJW",
//         "id": "4Y7XAxTANhu3lmnLAzhWJW",
//         "is_local": false,
//         "is_playable": true,
//         "name": "Fireball (feat. John Ryan)",
//         "popularity": 78,
//         "preview_url": "https://p.scdn.co/mp3-preview/35405481ffdcf06063ceb15cc7943e772e2f2e86?cid=04a64ee2e447482f8a23dcb6de3316f0",
//         "track_number": 3,
//         "type": "track",
//         "uri": "spotify:track:4Y7XAxTANhu3lmnLAzhWJW"
//       },
//       {
//         "album": {
//           "album_type": "album",
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//               },
//               "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//               "id": "0TnOYISbd1XYRBk9myaseg",
//               "name": "Pitbull",
//               "type": "artist",
//               "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//             }
//           ],
//           "external_urls": {
//             "spotify": "https://open.spotify.com/album/4RaAjieYFIZRF8uh6GY43r"
//           },
//           "href": "https://api.spotify.com/v1/albums/4RaAjieYFIZRF8uh6GY43r",
//           "id": "4RaAjieYFIZRF8uh6GY43r",
//           "images": [
//             {
//               "height": 640,
//               "url": "https://i.scdn.co/image/ab67616d0000b273a511f69870fa68e7ba78c099",
//               "width": 640
//             },
//             {
//               "height": 300,
//               "url": "https://i.scdn.co/image/ab67616d00001e02a511f69870fa68e7ba78c099",
//               "width": 300
//             },
//             {
//               "height": 64,
//               "url": "https://i.scdn.co/image/ab67616d00004851a511f69870fa68e7ba78c099",
//               "width": 64
//             }
//           ],
//           "is_playable": true,
//           "name": "Pitbull Starring In Rebelution",
//           "release_date": "2009-08-27",
//           "release_date_precision": "day",
//           "total_tracks": 14,
//           "type": "album",
//           "uri": "spotify:album:4RaAjieYFIZRF8uh6GY43r"
//         },
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//             },
//             "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//             "id": "0TnOYISbd1XYRBk9myaseg",
//             "name": "Pitbull",
//             "type": "artist",
//             "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//           }
//         ],
//         "disc_number": 1,
//         "duration_ms": 237120,
//         "explicit": false,
//         "external_ids": {
//           "isrc": "USJAY0900144"
//         },
//         "external_urls": {
//           "spotify": "https://open.spotify.com/track/13plQdOoWSSXPRUSZc5FuM"
//         },
//         "href": "https://api.spotify.com/v1/tracks/13plQdOoWSSXPRUSZc5FuM",
//         "id": "13plQdOoWSSXPRUSZc5FuM",
//         "is_local": false,
//         "is_playable": true,
//         "name": "I Know You Want Me (Calle Ocho)",
//         "popularity": 74,
//         "preview_url": "https://p.scdn.co/mp3-preview/e27a3944f79d215f1e65ff091a53735f8907a504?cid=04a64ee2e447482f8a23dcb6de3316f0",
//         "track_number": 3,
//         "type": "track",
//         "uri": "spotify:track:13plQdOoWSSXPRUSZc5FuM"
//       },
//       {
//         "album": {
//           "album_type": "album",
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//               },
//               "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//               "id": "0TnOYISbd1XYRBk9myaseg",
//               "name": "Pitbull",
//               "type": "artist",
//               "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//             }
//           ],
//           "external_urls": {
//             "spotify": "https://open.spotify.com/album/4EUf4YyNjuXypWY6W5wEDm"
//           },
//           "href": "https://api.spotify.com/v1/albums/4EUf4YyNjuXypWY6W5wEDm",
//           "id": "4EUf4YyNjuXypWY6W5wEDm",
//           "images": [
//             {
//               "height": 640,
//               "url": "https://i.scdn.co/image/ab67616d0000b2731e340d1480e7bb29a45e3bd7",
//               "width": 640
//             },
//             {
//               "height": 300,
//               "url": "https://i.scdn.co/image/ab67616d00001e021e340d1480e7bb29a45e3bd7",
//               "width": 300
//             },
//             {
//               "height": 64,
//               "url": "https://i.scdn.co/image/ab67616d000048511e340d1480e7bb29a45e3bd7",
//               "width": 64
//             }
//           ],
//           "is_playable": true,
//           "name": "Globalization",
//           "release_date": "2014-11-21",
//           "release_date_precision": "day",
//           "total_tracks": 11,
//           "type": "album",
//           "uri": "spotify:album:4EUf4YyNjuXypWY6W5wEDm"
//         },
//         "artists": [
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
//             },
//             "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
//             "id": "0TnOYISbd1XYRBk9myaseg",
//             "name": "Pitbull",
//             "type": "artist",
//             "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
//           },
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/2DlGxzQSjYe5N6G9nkYghR"
//             },
//             "href": "https://api.spotify.com/v1/artists/2DlGxzQSjYe5N6G9nkYghR",
//             "id": "2DlGxzQSjYe5N6G9nkYghR",
//             "name": "Jennifer Lopez",
//             "type": "artist",
//             "uri": "spotify:artist:2DlGxzQSjYe5N6G9nkYghR"
//           },
//           {
//             "external_urls": {
//               "spotify": "https://open.spotify.com/artist/2OjoIDVPQKT9B7loZbPEfp"
//             },
//             "href": "https://api.spotify.com/v1/artists/2OjoIDVPQKT9B7loZbPEfp",
//             "id": "2OjoIDVPQKT9B7loZbPEfp",
//             "name": "Claudia Leitte",
//             "type": "artist",
//             "uri": "spotify:artist:2OjoIDVPQKT9B7loZbPEfp"
//           }
//         ],
//         "disc_number": 1,
//         "duration_ms": 222520,
//         "explicit": false,
//         "external_ids": {
//           "isrc": "USRC11400285"
//         },
//         "external_urls": {
//           "spotify": "https://open.spotify.com/track/1PCvKFPWnTXAe2oaReVUcr"
//         },
//         "href": "https://api.spotify.com/v1/tracks/1PCvKFPWnTXAe2oaReVUcr",
//         "id": "1PCvKFPWnTXAe2oaReVUcr",
//         "is_local": false,
//         "is_playable": true,
//         "name": "We Are One (Ole Ola) [The Official 2014 FIFA World Cup Song] (feat. Jennifer Lopez & Claudia Leitte)",
//         "popularity": 74,
//         "preview_url": "https://p.scdn.co/mp3-preview/1eab08cf70c31ca1ba3d8d63f67cca536086118a?cid=04a64ee2e447482f8a23dcb6de3316f0",
//         "track_number": 11,
//         "type": "track",
//         "uri": "spotify:track:1PCvKFPWnTXAe2oaReVUcr"
//       }
//     ]
//   }