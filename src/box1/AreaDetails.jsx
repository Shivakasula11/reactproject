import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AreaDetails.css";

const CricketAreas = [
  {
    areaName: "Nizampet",
    cricketPlaces: [
      {
        name: "Orange Box-Cricket",
        address: "123 Main Street, Downtown",
        pricePerHour: 200,
        facilities: ["Floodlights", "Parking", "Restrooms"],
        description:
          "A premium box cricket facility with state-of-the-art floodlights and ample parking space. Ideal for evening matches.",
        images: [
          "https://media.hudle.in/venues/94e28e0f-97d9-4145-8256-b2e75cabf3d8/photo/5ab139aa537dccf82a3fd7b9138d30a7388cef63",
          "https://media.hudle.in/venues/94e28e0f-97d9-4145-8256-b2e75cabf3d8/photo/0909ff37e2ed96f24c7f069a79bc6941185448fa",
          "https://media.hudle.in/venues/57246be5-95ca-4f6c-8f12-8979c2d506b4/photo/700d30d14f63f55875bb6b2e70b9fcc489e54cd1",
        ],
      },
      {
        name: "Harish Box-Cricket",
        address: "456 Elm Street, Downtown",
        pricePerHour: 250,
        facilities: ["Seating", "Drinks Counter", "Washrooms"],
        description:
          "Spacious box cricket area with comfortable seating and a drinks counter for refreshments during matches.",
        images: [
          "https://media.hudle.in/venues/94e28e0f-97d9-4145-8256-b2e75cabf3d8/photo/14661471b24db5883f8fe531a33f85a0990572cd",
          "https://media.hudle.in/venues/94e28e0f-97d9-4145-8256-b2e75cabf3d8/photo/256c6ee3fd1799f8efed03c6433b65e90b65c00a",
          "https://media.hudle.in/venues/94e28e0f-97d9-4145-8256-b2e75cabf3d8/photo/0909ff37e2ed96f24c7f069a79bc6941185448fa",
        ],
      },
      {
        name: "Hudle Box-Cricket",
        address: "789 Oak Avenue, Downtown",
        pricePerHour: 300,
        facilities: ["Changing Rooms", "Parking", "Floodlights"],
        description:
          "Equipped with changing rooms and bright floodlights, this is perfect for professional tournaments and casual matches alike.",
        images: [
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/aea0149e1397fcb354803f2df24671f24cf1bc90",
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/d8ff119947f42f9d5d327771e41998ce803333f5",
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/34601ad6d21180f304fc050b552e603293db44e0",
        ],
      },
    ],
  },
  {
    areaName: "Manikonda",
    cricketPlaces: [
      {
        name: "Santro Box-Cricket",
        address: "10 Lakeview Road, Uptown",
        pricePerHour: 240,
        facilities: ["Restrooms", "Cafeteria", "Parking"],
        description:
          "A serene location with a cafeteria and ample parking, offering a great cricket experience for all.",
        images: [
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/d8ff119947f42f9d5d327771e41998ce803333f5",
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/34601ad6d21180f304fc050b552e603293db44e0",
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/8d551711caa591f844bc09bf3af441b641dd603b",
        ],
      },
      {
        name: "Googly Box-Cricket",
        address: "25 Sunshine Street, Uptown",
        pricePerHour: 260,
        facilities: ["Floodlights", "Changing Rooms", "First Aid"],
        description:
          "A professional-grade cricket facility with floodlights and a first-aid station to ensure safety during matches.",
        images: [
          "https://media.hudle.in/venues/aa7fde6a-ac21-4ff3-9c57-304f2c80772e/photo/ee91d6b148894c9a0931b9a059c148c06f709f50",
          "https://media.hudle.in/venues/aa7fde6a-ac21-4ff3-9c57-304f2c80772e/photo/25547b3905b1be57e42b3e4f96d04a288fd4b22c",
          "https://media.hudle.in/venues/aa7fde6a-ac21-4ff3-9c57-304f2c80772e/photo/438164bd108e14872c013a151cff5b4fb36a6ac1",
        ],
      },
      {
        name: "Mona Box-Cricket",
        address: "40 Hillside Avenue, Uptown",
        pricePerHour: 230,
        facilities: ["Seating", "Canteen", "Washrooms"],
        description:
          "A compact and affordable cricket ground with excellent seating and a well-stocked canteen for refreshments.",
        images: [
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/489f4f0ef868da51ed1e5ea11cb8a2c9823426cc",
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/133476b10b394afe73b6afb0ec4458c90697ee6b",
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/0b4dbe9f79e05c61c26f19f2c5dfda818bb5cad5",
        ],
      },
    ],
  },
  {
    areaName: "Bachupally",
    cricketPlaces: [
      {
        name: "Earangel Box-Cricket",
        address: "100 High Street, City Center",
        pricePerHour: 300,
        facilities: ["Parking", "Changing Rooms", "Floodlights"],
        description:
          "A highly sought-after cricket venue located in the heart of the city, featuring world-class amenities.",
        images: [
          "https://media.hudle.in/venues/9d362854-de54-4930-8e3a-7ea89ad59918/photo/8db09d47c0f1e4055ed3b672ad02ee6eeec7924d",
          "https://media.hudle.in/venues/9d362854-de54-4930-8e3a-7ea89ad59918/photo/3cfb1f4263bd3a314631fe933efd36f4136a2583",
          "https://media.hudle.in/venues/9d362854-de54-4930-8e3a-7ea89ad59918/photo/c259266fa033755f958880c32087b28bf2325145",
        ],
      },
      {
        name: "Livik Box-Cricket",
        address: "150 Market Lane, City Center",
        pricePerHour: 320,
        facilities: ["Restrooms", "Seating", "First Aid"],
        description:
          "A premium venue with comfortable seating arrangements and easy accessibility for spectators and players.",
        images: [
          "https://media.hudle.in/venues/8e03ffb1-d101-4a06-add6-4669bc06a47b/photo/b8b51341731af4dfa6b82c223eeccbfbe070fafa",
          "https://media.hudle.in/venues/8e03ffb1-d101-4a06-add6-4669bc06a47b/photo/59371309f0cd3978791940d9755da6f757a8c2ed",
          "https://media.hudle.in/venues/8e03ffb1-d101-4a06-add6-4669bc06a47b/photo/d88cf5dbf477a772197808ae819220a73aeab610",
        ],
      },
      {
        name: "Srija Box Cricket",
        address: "200 Central Avenue, City Center",
        pricePerHour: 340,
        facilities: ["Floodlights", "Canteen", "Parking"],
        description:
          "A state-of-the-art facility with bright floodlights and a canteen offering delicious refreshments.",
        images: [
          "https://media.hudle.in/venues/a5ba7e56-b214-4b86-924c-ca345b90f31b/photo/608c3567d6c1fab69eba19a46f541d2ccd80ffbb",
          "https://media.hudle.in/venues/a5ba7e56-b214-4b86-924c-ca345b90f31b/photo/57d6f37ac2dbdb113442af9577021091290633b9",
          "https://media.hudle.in/venues/199d7101-9809-4171-9724-493d856a0382/photo/ea5c07418dffbf17ba4d11a00d893a2fba921e7b",
        ],
      },
    ],
  },
  {
    areaName: "Miyapur",
    cricketPlaces: [
      {
        name: "Mahesh Box-Cricket",
        address: "10 Lakeview Road, Uptown",
        pricePerHour: 240,
        facilities: ["Restrooms", "Cafeteria", "Parking"],
        description:
          "A serene location with a cafeteria and ample parking, offering a great cricket experience for all.",
        images: [
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/0dc263e80df3ecb03acff381bd6c34cda7e585d6",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/018cb59afdc8f4e5f060f2883cd148a8ee91421d",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/018cb59afdc8f4e5f060f2883cd148a8ee91421d",
        ],
      },
      {
        name: "Bharath Box-Cricket",
        address: "25 Sunshine Street, Uptown",
        pricePerHour: 260,
        facilities: ["Floodlights", "Changing Rooms", "First Aid"],
        description:
          "A professional-grade cricket facility with floodlights and a first-aid station to ensure safety during matches.",
        images: [
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/b45b26f9add3a71a9e6003e6bd3941bdedc6f1e6",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/d709130988148d624941fec18287ba895d23b890",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/5e62351997df0083a999b3d4e5d0486d9e8b3e07",
        ],
      },
      {
        name: "Jaya Box-Cricket",
        address: "40 Hillside Avenue, Uptown",
        pricePerHour: 230,
        facilities: ["Seating", "Canteen", "Washrooms"],
        description:
          "A compact and affordable cricket ground with excellent seating and a well-stocked canteen for refreshments.",
        images: [
          "https://media.hudle.in/venues/111b0d83-1f47-4a87-be80-bdbe57f25aaf/photo/07a48c447eb9f4b3af8918ac1eea579ffa40719e",
          "https://media.hudle.in/venues/111b0d83-1f47-4a87-be80-bdbe57f25aaf/photo/09cbab17338a303d19581edc4f51ad268d44b232",
          "https://media.hudle.in/venues/111b0d83-1f47-4a87-be80-bdbe57f25aaf/photo/169151ffb643ded621408a85f4594c1837014b83",
        ],
      },
    ],
  },
  {
    areaName: "Jntu",
    cricketPlaces: [
      {
        name: "Bheem Rao Box-Cricket",
        address: "10 Lakeview Road, Uptown",
        pricePerHour: 240,
        facilities: ["Restrooms", "Cafeteria", "Parking"],
        description:
          "A serene location with a cafeteria and ample parking, offering a great cricket experience for all.",
        images: [
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/d8ff119947f42f9d5d327771e41998ce803333f5",
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/34601ad6d21180f304fc050b552e603293db44e0",
          "https://media.hudle.in/venues/255602c6-77a3-4828-9606-1c653af390db/photo/5f87cc3b7d0b51c2fbd50c723d0b83aa71670592",
        ],
      },
      {
        name: "Googly Box-Cricket",
        address: "25 Sunshine Street, Uptown",
        pricePerHour: 260,
        facilities: ["Floodlights", "Changing Rooms", "First Aid"],
        description:
          "A professional-grade cricket facility with floodlights and a first-aid station to ensure safety during matches.",
        images: [
          "https://media.hudle.in/venues/aa7fde6a-ac21-4ff3-9c57-304f2c80772e/photo/ee91d6b148894c9a0931b9a059c148c06f709f50",
          "https://media.hudle.in/venues/aa7fde6a-ac21-4ff3-9c57-304f2c80772e/photo/25547b3905b1be57e42b3e4f96d04a288fd4b22c",
          "https://media.hudle.in/venues/aa7fde6a-ac21-4ff3-9c57-304f2c80772e/photo/438164bd108e14872c013a151cff5b4fb36a6ac1",
        ],
      },
      {
        name: "Uptown Box-Cricket",
        address: "40 Hillside Avenue, Uptown",
        pricePerHour: 230,
        facilities: ["Seating", "Canteen", "Washrooms"],
        description:
          "A compact and affordable cricket ground with excellent seating and a well-stocked canteen for refreshments.",
        images: [
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/489f4f0ef868da51ed1e5ea11cb8a2c9823426cc",
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/133476b10b394afe73b6afb0ec4458c90697ee6b",
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/0b4dbe9f79e05c61c26f19f2c5dfda818bb5cad5",
        ],
      },
    ],
  },
  {
    areaName: "kphb",
    cricketPlaces: [
      {
        name: "Sweat Zone Sports Arena",
        address: "5 Oakfield Drive, Suburbs",
        pricePerHour: 210,
        facilities: ["Floodlights", "Seating", "Parking"],
        description:
          "An affordable cricket venue with bright floodlights and seating, perfect for casual games with friends.",
        images: [
          "https://media.hudle.in/venues/3f53bcf6-bc9e-4b00-bd7b-0c7c61157aaa/photo/7f80d259a83634f32df484bad77d34b2dbe1c302",
          "https://media.hudle.in/venues/3f53bcf6-bc9e-4b00-bd7b-0c7c61157aaa/photo/0b2d49f0a51c92a33ade1f2623aff7e13765d04c",
          "https://media.hudle.in/venues/3f53bcf6-bc9e-4b00-bd7b-0c7c61157aaa/photo/9ff839a9319ed4aafcf3911a6923cb28de016b70",
        ],
      },
      {
        name: "Surya Box Cricket",
        address: "15 Willow Street, Suburbs",
        pricePerHour: 230,
        facilities: ["Changing Rooms", "Restrooms", "Cafeteria"],
        description:
          "A family-friendly cricket ground with modern changing rooms and a cafeteria offering delicious snacks.",
        images: [
          "https://media.hudle.in/venues/3f53bcf6-bc9e-4b00-bd7b-0c7c61157aaa/photo/b505d71885c9ae3fc3169a2c088a214b14db235f",
          "https://media.hudle.in/venues/3f53bcf6-bc9e-4b00-bd7b-0c7c61157aaa/photo/ff952521c9ff41f4227bb75d5ac8ad220fcc183f",
          "https://media.hudle.in/venues/3f53bcf6-bc9e-4b00-bd7b-0c7c61157aaa/photo/45fc99ea0df5b3ae7c3b22d5145dbd27a9608f88",
        ],
      },
      {
        name: "Suburbs Box Cricket",
        address: "30 Maplewood Road, Suburbs",
        pricePerHour: 250,
        facilities: ["Washrooms", "First Aid", "Floodlights"],
        description:
          "A well-equipped ground for professional-level matches, complete with first-aid facilities and washrooms.",
        images: [
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/489f4f0ef868da51ed1e5ea11cb8a2c9823426cc",
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/133476b10b394afe73b6afb0ec4458c90697ee6b",
          "https://media.hudle.in/venues/121ac4db-625c-4235-b928-c4738510bdc7/photo/0b4dbe9f79e05c61c26f19f2c5dfda818bb5cad5",
        ],
      },
    ],
  },
  {
    areaName: "kondapur",
    cricketPlaces: [
      {
        name: "L&T Box-Cricket",
        address: "10 Lakeview Road, Uptown",
        pricePerHour: 240,
        facilities: ["Restrooms", "Cafeteria", "Parking"],
        description:
          "A serene location with a cafeteria and ample parking, offering a great cricket experience for all.",
        images: [
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/0dc263e80df3ecb03acff381bd6c34cda7e585d6",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/018cb59afdc8f4e5f060f2883cd148a8ee91421d",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/018cb59afdc8f4e5f060f2883cd148a8ee91421d",
        ],
      },
      {
        name: "Vision Box-Cricket",
        address: "25 Sunshine Street, Uptown",
        pricePerHour: 260,
        facilities: ["Floodlights", "Changing Rooms", "First Aid"],
        description:
          "A professional-grade cricket facility with floodlights and a first-aid station to ensure safety during matches.",
        images: [
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/b45b26f9add3a71a9e6003e6bd3941bdedc6f1e6",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/d709130988148d624941fec18287ba895d23b890",
          "https://media.hudle.in/venues/7faf1644-701c-4ab3-8580-74e94c63dea3/photo/5e62351997df0083a999b3d4e5d0486d9e8b3e07",
        ],
      },
      {
        name: "Atlas Box-Cricket",
        address: "40 Hillside Avenue, Uptown",
        pricePerHour: 230,
        facilities: ["Seating", "Canteen", "Washrooms"],
        description:
          "A compact and affordable cricket ground with excellent seating and a well-stocked canteen for refreshments.",
        images: [
          "https://media.hudle.in/venues/111b0d83-1f47-4a87-be80-bdbe57f25aaf/photo/07a48c447eb9f4b3af8918ac1eea579ffa40719e",
          "https://media.hudle.in/venues/111b0d83-1f47-4a87-be80-bdbe57f25aaf/photo/09cbab17338a303d19581edc4f51ad268d44b232",
          "https://media.hudle.in/venues/111b0d83-1f47-4a87-be80-bdbe57f25aaf/photo/169151ffb643ded621408a85f4594c1837014b83",
        ],
      },
    ],
  },
  {
    areaName: "kukatpally",
    cricketPlaces: [
      {
        name: "City Center Box Cricket",
        address: "100 High Street, City Center",
        pricePerHour: 300,
        facilities: ["Parking", "Changing Rooms", "Floodlights"],
        description:
          "A highly sought-after cricket venue located in the heart of the city, featuring world-class amenities.",
        images: [
          "https://media.hudle.in/venues/46a6b649-1de6-4be5-9bb5-e6dc52be2369/photo/0917b9b06687b2d81075a049a5f694b45699322e",
          "https://media.hudle.in/venues/46a6b649-1de6-4be5-9bb5-e6dc52be2369/photo/0550a5d4e30e0428f17f652494c024d864639bad",
          "https://media.hudle.in/venues/46a6b649-1de6-4be5-9bb5-e6dc52be2369/photo/abb53f07a80d58c128fa1978b1a716de31885900",
        ],
      },
      {
        name: "Arena Box Cricket",
        address: "150 Market Lane, City Center",
        pricePerHour: 320,
        facilities: ["Restrooms", "Seating", "First Aid"],
        description:
          "A premium venue with comfortable seating arrangements and easy accessibility for spectators and players.",
        images: [
          "https://media.hudle.in/venues/46a6b649-1de6-4be5-9bb5-e6dc52be2369/photo/c2d02365d295492f43e2aa06852e123a063a3033",
          "https://media.hudle.in/venues/46a6b649-1de6-4be5-9bb5-e6dc52be2369/photo/db1ce916ade34328a95f7107e5e670ec6383b54c",
          "https://media.hudle.in/venues/46a6b649-1de6-4be5-9bb5-e6dc52be2369/photo/0427cac0d41d36e5095a42b785ea2c2cdfdceef7",
        ],
      },
      {
        name: "Riya Box Cricket",
        address: "200 Central Avenue, City Center",
        pricePerHour: 340,
        facilities: ["Floodlights", "Canteen", "Parking"],
        description:
          "A state-of-the-art facility with bright floodlights and a canteen offering delicious refreshments.",
        images: [
          "https://media.hudle.in/venues/9f235fe8-638e-4d0e-a3a7-4f5313390214/photo/c4afb20fb2da5b4c5baada35db68b0ff9b997f02",
          "https://media.hudle.in/venues/9f235fe8-638e-4d0e-a3a7-4f5313390214/photo/2237cdeae31493e155ff2232f036e27be0cb0482",
          "https://media.hudle.in/venues/199d7101-9809-4171-9724-493d856a0382/photo/ea5c07418dffbf17ba4d11a00d893a2fba921e7b",
        ],
      },
    ],
  },
  {
    areaName: "Srnagar",
    cricketPlaces: [
      {
        name: "Big Ball Arena Box-Cricket",
        address: "100 High Street, City Center",
        pricePerHour: 300,
        facilities: ["Parking", "Changing Rooms", "Floodlights"],
        description:
          "A highly sought-after cricket venue located in the heart of the city, featuring world-class amenities.",
        images: [
          "https://media.hudle.in/venues/9d362854-de54-4930-8e3a-7ea89ad59918/photo/8db09d47c0f1e4055ed3b672ad02ee6eeec7924d",
          "https://media.hudle.in/venues/9d362854-de54-4930-8e3a-7ea89ad59918/photo/3cfb1f4263bd3a314631fe933efd36f4136a2583",
          "https://media.hudle.in/venues/9d362854-de54-4930-8e3a-7ea89ad59918/photo/c259266fa033755f958880c32087b28bf2325145",
        ],
      },
      {
        name: "SL Sports Box-Cricket",
        address: "150 Market Lane, City Center",
        pricePerHour: 320,
        facilities: ["Restrooms", "Seating", "First Aid"],
        description:
          "A premium venue with comfortable seating arrangements and easy accessibility for spectators and players.",
        images: [
          "https://media.hudle.in/venues/8e03ffb1-d101-4a06-add6-4669bc06a47b/photo/b8b51341731af4dfa6b82c223eeccbfbe070fafa",
          "https://media.hudle.in/venues/8e03ffb1-d101-4a06-add6-4669bc06a47b/photo/59371309f0cd3978791940d9755da6f757a8c2ed",
          "https://media.hudle.in/venues/8e03ffb1-d101-4a06-add6-4669bc06a47b/photo/d88cf5dbf477a772197808ae819220a73aeab610",
        ],
      },
      {
        name: "Poornima Box Cricket",
        address: "200 Central Avenue, City Center",
        pricePerHour: 340,
        facilities: ["Floodlights", "Canteen", "Parking"],
        description:
          "A state-of-the-art facility with bright floodlights and a canteen offering delicious refreshments.",
        images: [
          "https://media.hudle.in/venues/a5ba7e56-b214-4b86-924c-ca345b90f31b/photo/608c3567d6c1fab69eba19a46f541d2ccd80ffbb",
          "https://media.hudle.in/venues/a5ba7e56-b214-4b86-924c-ca345b90f31b/photo/57d6f37ac2dbdb113442af9577021091290633b9",
          "https://media.hudle.in/venues/199d7101-9809-4171-9724-493d856a0382/photo/ea5c07418dffbf17ba4d11a00d893a2fba921e7b",
        ],
      },
    ],
  },
  {
    areaName: "Gachibowli",
    cricketPlaces: [
      {
        name: "Howzat Box Cricket",
        address: "100 High Street, City Center",
        pricePerHour: 300,
        facilities: ["Parking", "Changing Rooms", "Floodlights"],
        description:
          "A highly sought-after cricket venue located in the heart of the city, featuring world-class amenities.",
        images: [
          "https://media.hudle.in/venues/0fb6199b-94a5-4de5-816b-43bf3ec98081/photo/d52555fcc31d03e4e29ca4cadfb3dd2d05a967b5",
          "https://media.hudle.in/venues/0fb6199b-94a5-4de5-816b-43bf3ec98081/photo/7e1b297e07e0b379155c72990e17189a7cbe4838",
          "https://media.hudle.in/venues/0fb6199b-94a5-4de5-816b-43bf3ec98081/photo/8b279e54187c83962e38139ef2aa946a988c183f",
        ],
      },
      {
        name: "Stumps-ON Box Cricket",
        address: "150 Market Lane, City Center",
        pricePerHour: 320,
        facilities: ["Restrooms", "Seating", "First Aid"],
        description:
          "A premium venue with comfortable seating arrangements and easy accessibility for spectators and players.",
        images: [
          "https://media.hudle.in/venues/2d0a5093-ab25-43dc-bc4d-bf120745ab65/photo/148f0c2fea897d23328413220dbc5ad25f483d5d",
          "https://media.hudle.in/venues/2d0a5093-ab25-43dc-bc4d-bf120745ab65/photo/17d8e37b61e315b0f825b7c35695787cc0ad6c96",
          "https://media.hudle.in/venues/2d0a5093-ab25-43dc-bc4d-bf120745ab65/photo/fb23d3cac6496ff3f1848c35e162689cbf3070b1",
        ],
      },
      {
        name: "Not-Out Box Cricket",
        address: "200 Central Avenue, City Center",
        pricePerHour: 340,
        facilities: ["Floodlights", "Canteen", "Parking"],
        description:
          "A state-of-the-art facility with bright floodlights and a canteen offering delicious refreshments.",
        images: [
          "https://media.hudle.in/venues/255602c6-77a3-4828-9606-1c653af390db/photo/5f87cc3b7d0b51c2fbd50c723d0b83aa71670592",
          "https://media.hudle.in/venues/255602c6-77a3-4828-9606-1c653af390db/photo/880f48010056c3331a944964b72836006bc90f7b",
          "https://media.hudle.in/venues/199d7101-9809-4171-9724-493d856a0382/photo/ea5c07418dffbf17ba4d11a00d893a2fba921e7b",
        ],
      },
    ],
  },
  {
    areaName: "Madhapur",
    cricketPlaces: [
      {
        name: "Happening Box Cricket",
        address: "100 High Street, City Center",
        pricePerHour: 300,
        facilities: ["Parking", "Changing Rooms", "Floodlights"],
        description:
          "A highly sought-after cricket venue located in the heart of the city, featuring world-class amenities.",
        images: [
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/d8ff119947f42f9d5d327771e41998ce803333f5",
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/34601ad6d21180f304fc050b552e603293db44e0",
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/8d551711caa591f844bc09bf3af441b641dd603b",
        ],
      },
      {
        name: "Akhil Box Cricket",
        address: "150 Market Lane, City Center",
        pricePerHour: 320,
        facilities: ["Restrooms", "Seating", "First Aid"],
        description:
          "A premium venue with comfortable seating arrangements and easy accessibility for spectators and players.",
        images: [
          "https://media.hudle.in/venues/9f235fe8-638e-4d0e-a3a7-4f5313390214/photo/4cb5ea33bb9941df2005e091540cd8e52ebb92ac",
          "https://media.hudle.in/venues/255602c6-77a3-4828-9606-1c653af390db/photo/880f48010056c3331a944964b72836006bc90f7b",
          "https://media.hudle.in/venues/68bc9e4f-27f6-439e-a2d3-a810ab8a003e/photo/8d551711caa591f844bc09bf3af441b641dd603b",
        ],
      },
      {
        name: "Shiva Box Cricket",
        address: "200 Central Avenue, City Center",
        pricePerHour: 340,
        facilities: ["Floodlights", "Canteen", "Parking"],
        description:
          "A state-of-the-art facility with bright floodlights and a canteen offering delicious refreshments.",
        images: [
          "https://media.hudle.in/venues/6c8482d2-c9d2-4242-b920-73e89ea6c206/photo/76cc0a5c7838582c2749d76b9ad20c41ede114f9",
          "https://media.hudle.in/venues/6c8482d2-c9d2-4242-b920-73e89ea6c206/photo/f64461d1147368dc974e13f225a06351661a832d",
          "https://media.hudle.in/venues/199d7101-9809-4171-9724-493d856a0382/photo/ea5c07418dffbf17ba4d11a00d893a2fba921e7b",
        ],
      },
    ],
  },
  {
    areaName: "Hitech city",
    cricketPlaces: [
      {
        name: "Sportz Pride Box Cricket",
        address: "100 High Street, City Center",
        pricePerHour: 300,
        facilities: ["Parking", "Changing Rooms", "Floodlights"],
        description:
          "A highly sought-after cricket venue located in the heart of the city, featuring world-class amenities.",
        images: [
          "https://media.hudle.in/venues/b0c58b2b-1915-4c8c-94b1-bcebbdc0fb19/photo/38dde0a882a873fba9b59816562d0d08297ba30d",
          "https://media.hudle.in/venues/b0c58b2b-1915-4c8c-94b1-bcebbdc0fb19/photo/f846119e59f7515b3f922ce4b977337ffff47f71",
          "https://media.hudle.in/venues/b0c58b2b-1915-4c8c-94b1-bcebbdc0fb19/photo/38dde0a882a873fba9b59816562d0d08297ba30d",
        ],
      },
      {
        name: "United Street Box Cricket",
        address: "150 Market Lane, City Center",
        pricePerHour: 320,
        facilities: ["Restrooms", "Seating", "First Aid"],
        description:
          "A premium venue with comfortable seating arrangements and easy accessibility for spectators and players.",
        images: [
          "https://media.hudle.in/venues/9634ce65-1252-4cc0-975f-08fdff99a552/photo/d8d1da8057bbabebec7c5e2d6b1c1d7a36c18ec7",
          "https://media.hudle.in/venues/9634ce65-1252-4cc0-975f-08fdff99a552/photo/55059c45b1555ee2a99e231c03e55533ac6b19fd",
          "https://media.hudle.in/venues/9634ce65-1252-4cc0-975f-08fdff99a552/photo/d370a6e0c88274f0946193c773bf3fb470ccaaf8",
        ],
      },
      {
        name: "Playo Box Cricket",
        address: "200 Central Avenue, City Center",
        pricePerHour: 340,
        facilities: ["Floodlights", "Canteen", "Parking"],
        description:
          "A state-of-the-art facility with bright floodlights and a canteen offering delicious refreshments.",
        images: [
          "https://media.hudle.in/venues/6c8482d2-c9d2-4242-b920-73e89ea6c206/photo/80793a719174b6e2062f5117cf8b365dfd8cc2d5",
          "https://media.hudle.in/venues/6c8482d2-c9d2-4242-b920-73e89ea6c206/photo/89dabe8d0338a141db588f8c0e68e4f07a3fab47",
          "https://media.hudle.in/venues/6c8482d2-c9d2-4242-b920-73e89ea6c206/photo/0fcdfd3e6b5a138acb6895125c59f7f4e3120215",
        ],
      },
    ],
  },
  {
    areaName: "Ameerpet",
    cricketPlaces: [
      {
        name: "Kiran Box Cricket",
        address: "12 Forest Drive, Green Valley",
        pricePerHour: 180,
        facilities: ["Floodlights", "Washrooms", "Parking"],
        description:
          "A budget-friendly option surrounded by lush greenery, perfect for a relaxed cricket experience.",
        images: [
          "https://media.hudle.in/venues/09c586cd-73a2-45cb-b10c-1b1e0ec7ae95/photo/1bc32db43af7d090e85d46bc7b2adb1dfeb93f79",
          "https://media.hudle.in/venues/09c586cd-73a2-45cb-b10c-1b1e0ec7ae95/photo/46cbc7dbd47fcd6880ae7575387fbf016f9cfded",
          "https://media.hudle.in/venues/199d7101-9809-4171-9724-493d856a0382/photo/219bd3bf96209f668879c886f086e84fbe4570e9",
        ],
      },
      {
        name: "Alamkrutha Box Cricket",
        address: "45 Meadow Lane, Green Valley",
        pricePerHour: 200,
        facilities: ["Changing Rooms", "Seating", "Restrooms"],
        description:
          "A charming cricket venue with modern facilities and plenty of seating for spectators.",
        images: [
          "https://media.hudle.in/venues/4a119578-3e2b-47c4-838e-e851a4e4a13f/photo/d027c6c306a4e4482abd242f15b6d2dca192ffef",
          "https://media.hudle.in/venues/4a119578-3e2b-47c4-838e-e851a4e4a13f/photo/361f0cf8ae46db71db3aafd4521ae6b1e07cbf71",
          "https://media.hudle.in/venues/4a119578-3e2b-47c4-838e-e851a4e4a13f/photo/d027c6c306a4e4482abd242f15b6d2dca192ffef",
        ],
      },
      {
        name: "Green Valley Box Cricket",
        address: "78 River Road, Green Valley",
        pricePerHour: 220,
        facilities: ["Floodlights", "Canteen", "Parking"],
        description:
          "A beautiful venue with a well-stocked canteen and ample parking space for large groups.",
        images: [
          "https://media.hudle.in/venues/8a4f62dc-91af-46b4-897d-46905bd9c350/photo/e6d8a25ecc4734aa61a625f19342f5196f63bc1d",
          "https://media.hudle.in/venues/8a4f62dc-91af-46b4-897d-46905bd9c350/photo/7e508764d7a64da41edca712649a1da83f3f4f4f",
          "https://media.hudle.in/venues/8a4f62dc-91af-46b4-897d-46905bd9c350/photo/e6d8a25ecc4734aa61a625f19342f5196f63bc1d",
        ],
      },
    ],
  },
];

const AreaDetails = () => {
  const { areaName } = useParams();
  const navigate = useNavigate();

  const area = CricketAreas.find(
    (area) => area.areaName.toLowerCase() === areaName.toLowerCase()
  );

  if (!area) {
    return (
      <div className="areadetails-container">
        <div className="areadetails-wrapper">
          <div className="no-venues-found">
            <h1>Area Not Found</h1>
            <p>The area you're looking for doesn't exist or has no available cricket venues at this time.</p>
            <a href="/home" className="btn-back-home">Back to Home</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="areadetails-container">
      <div className="areadetails-wrapper">
        {/* Page Header */}
        <div className="areadetails-header">
          <h1 className="areadetails-title">{area.areaName}</h1>
          <p className="areadetails-subtitle">{area.cricketPlaces.length} Premium Venues Available</p>
        </div>

        {/* Venues Grid */}
        <div className="areadetails-grid">
          {area.cricketPlaces.map((place, index) => (
            <div key={index} className="areadetails-grid-item">
              <div className={`venue-card ${index % 2 === 1 ? "alt-layout" : ""}`}>
                {/* Image Section */}
                <div className="venue-image-wrapper">
                  <img
                    src={place.images[1] || place.images[0]}
                    alt={place.name}
                    className="venue-image"
                    loading="lazy"
                  />
                  <div className="venue-image-badge">Premium Venue</div>
                </div>

                {/* Information Section */}
                <div className="venue-info">
                  <div>
                    {/* Header */}
                    <div className="venue-header">
                      <h2 className="venue-title">{place.name}</h2>
                      <p className="venue-address">{place.address}</p>
                    </div>

                    {/* Description */}
                    <p className="venue-description">{place.description}</p>

                    {/* Pricing */}
                    <div className="venue-pricing">
                      <span className="price-label">Hourly Rate</span>
                      <span className="price-amount">₹{place.pricePerHour}</span>
                      <span className="price-unit">/hour</span>
                    </div>

                    {/* Facilities */}
                    <div className="venue-facilities">
                      <div className="facilities-label">Facilities</div>
                      <div className="facilities-list">
                        {place.facilities.map((facility, idx) => (
                          <span key={idx} className="facility-badge">
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="venue-actions">
                    <button
                      className="btn-book-now"
                      onClick={() => navigate("/place-details", { state: { place } })}
                      aria-label={`Book ${place.name}`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaDetails;