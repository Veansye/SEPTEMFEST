const scriptAssetBaseUrl = new URL(".", document.currentScript.src);
const resolveAssetUrl = path => new URL(path, scriptAssetBaseUrl).href;

const activities = [
  {
    id: "street-parade",
    meta: "FESTIVAL ACTIVITY • 01",
    kicker: "The streets come alive",
    title: "STREET<br>PARADE",
    description: "Colorful floats, lively performances, and festive music bring San Mateo’s streets together in celebration.",
    image: "./images/First.jpg",
    calendarImages: ["./images/First.jpg", "./images/First.jpg", "./images/First.jpg"],
    nextLabel: "UP NEXT",
    name: "Street Parade",
    date: "SEPTEMBER 9",
    location: "SAN MATEO MUNICIPAL PLAZA",
    time: "7:00 AM",
    cardSummary: "From grand floats to overflowing free sticky rice treats, relive thee sweet success of San Mateo's 28th Kakanin Festival!",
    historyIntro: "The 28th Kakanin Festival and Parada ng Kakanin was held on September 9, 2026, in San Mateo, Rizal, as part of the celebration of the feast of Nuestra Señora de Aranzazu. The festival showcased the town’s culture, community spirit, livelihood, and religious devotion through colorful street dances, marching bands, student groups, and the Float Competition, where barangays created floats inspired by Filipino delicacies such as suman, puto, biko, and sapin-sapin. Barangay Sta. Ana won the championship, followed by Barangay Silangan and Barangay Malanday as first and second runners-up. Marry Gieal T. Hangor of Barangay Silangan was also crowned Hiyas ng Kakanin 2026. A major part of the festival is the Filipino tradition of sharing kakanin freely with the community as a form of thanksgiving. Despite the colorful celebrations, the festival remained centered on faith, ending with Masses and religious processions honoring Our Lady of Aranzazu.",
    howItWorks: [
      "The Float Competition: Barangays parade massive floats creatively designed to look like or literally covered in traditional sticky rice delicacies.",
      "Street Dancing: Local groups in vibrant costumes perform choreographed routines, often using bilaos (flat woven trays) as rhythmic props to entertain the crowd.",
      "The Grand Sharing: Instead of just watching, the crowd gets to eat. Participants distribute massive amounts of free, freshly made kakanin to onlookers as a thanksgiving tradition."
    ] 
  },
  {
    id: "bidabike-fest",
    meta: "FESTIVAL ACTIVITY • 02",
    kicker: "Shifting Gears, Conquering Trails",
    title: "BIDABIKE<br>FEST",
    description: "A cycling competition for biking enthusiasts from San Mateo and nearby areas.",
    image: "./images/Second.JPG",
    calendarImages: ["./images/Second.JPG", "./images/Second.JPG", "./images/Second.JPG"],
    nextLabel: "UP NEXT",
    name: "BIDABIKE FEST 3.0",
    date: "SEPTEMBER 7",
    location: "Timberland Heights and Patiis Trails",
    time: "7:00 AM",
    cardSummary: "Grit, dirt, and mountain biking glory! Shifting gears at the San Mateo BidaBike Fest.",
    historyIntro: "The San Mateo BidaBike Fest is a major cycling event held during the town’s September fiesta celebrations, celebrating San Mateo’s reputation as the RB Capital of the Philippines. It brings together hundreds of cycling enthusiasts, professional mountain bikers, and local riders who compete in categories such as RB, Men’s Open, and age-based divisions. The races take place on challenging trails in Timberland and Patiis, showcasing the riders’ skill and endurance. Beyond the competition, the event promotes sportsmanship, eco-tourism, and the local cycling community, with support from bike shops, cycling groups, and pitikeros who capture the action.",
    howItWorks: [
      "Categories: Cyclists compete in brackets based on age, bike type, and skill level.",
      "The Race: Riders navigate grueling off-road climbs, steep roads, and rugged dirt trails.",
      "The Finish: Top finishers are awarded medals, celebrating thee town's passionate cycling community."
    ]
  },
  {
    id: "mr-and-ms-san-mateo-rizal",
    meta: "FESTIVAL ACTIVITY • 03",
    kicker: "Beyond the Crown",
    title: "MR. & MS.<br>SAN MATEO",
    description: "A pageant that highlights the confidence, talents, personality of local representatives.",
    image: "./images/Third.JPG",
    calendarImages: ["./images/Third.JPG", "./images/Third.JPG", "./images/Third.JPG"],
    nextLabel: "UP NEXT",
    name: "MR. & MS.",
    date: "SEPTEMBER 26",
    location: "SM SAN MATEO",
    time: "2:00 PM",
    cardSummary: "Beauty, brains, and a whole lot of local pride! The search for Mr. and Miss San Mateo is on.",
    historyIntro: "The Mr. and Miss San Mateo pageant is a major local competition held during the town’s annual fiesta and Kakanin Festival. It features young men and women representing different barangays, highlighting their grace, intelligence, and advocacies. More than just a beauty and formal-wear competition, the pageant promotes youth empowerment and gives the winners an opportunity to represent San Mateo’s culture, tourism, and community programs throughout the year.",
    howItWorks: [
      "Candidates represent their local barangays and champion specific community causes.",
      "Contestants showcase their poise, talent, and intellect through preliminary rounds, talent shows, and the crucial Q&A portion.",
      "A grand stage finale where judges score the formal wear and final Q&A to crown the town's new official ambassadors."
    ]
  },
  {
    id: "talent-and-cultural-competition",
    meta: "FESTIVAL ACTIVITY • 04",
    kicker: "Youth, Culture, and Victory",
    title: "TALENT & CULTURAL<br>COMPETITION",
    description: "Competitions that give local participants an opportunity to showcase their dancing skills, creativity, and other talents.",
    image: "./images/Fourth.JPG",
    calendarImages: ["./images/Fourth.JPG", "./images/Fourth.JPG", "./images/Fourth.JPG"],
    nextLabel: "UP NEXT",
    name: "Talent and Cultural Competition",
    date: "SEPTEMBER 9",
    location: "SAN MATEO MUNICIPAL PLAZA",
    time: "9:00 AM",
    cardSummary: "Youth, passion, and the rythm of San Mateo, who will take the crown?",
    historyIntro: "The Battle of Schools Cultural Dance Competition is a highly anticipated and energetic showdown where local high schools and colleges in San Mateo compete for campus supremacy. Student dance troupes perform vibrant, synchronized Filipino folk and festival dances. It is a fierce but friendly rivalry that preserves local heritage while allowing the youth to showcase their teamwork, creativity, and intense school spirit.",
    howItWorks: [
      "School Presentation: Student dance troupes train ridorously to represent their respective campuses.",
      "The Performance: Schools deliver high energy routines using elaborate props, traditional costume, and cultural storytelling.",
      "The Judging: Experts score teams on choreography, synchronization, and cultural authenticity to crown the ultimate champion."
    ]
  },
  {
    id: "pet-sival",
    meta: "FESTIVAL ACTIVITY • 05",
    kicker: "Unleash the fun",
    title: "PET<br>FESTIVAL",
    description: "Activities centered on pets and responsible pet ownership, providing families and animal lovers with opportunities to participate in fun community events.",
    image: "./images/Fifth.JPG",
    calendarImages: ["./images/Fifth.JPG", "./images/Fifth.JPG", "./images/Fifth.JPG"],
    nextLabel: "UP NEXT",
    name: "Pet Festival",
    date: "SEPTEMBER 13",
    location: "BRGY. GULOD MALAYA ECO-PARK",
    time: "10:00 AM",
    cardSummary: "Paws, play, and a whole lot of love! Welcome to the furriest fiesta in town!",
    historyIntro: "The Grand Celebration brings the festival highlights together for a final shared program filled with community activities.",
    howItWorks: [
      "Pet Services: Local vets provide free basic check-ups, deworming, and vaccinations.",
      "Fun Contests: Pets show off creative costumes and tricks to win treats and prizes.",
      "Pet Blessing: A ceremonial blessing is held for the health and safety of the animals."
    ]
  }
];

const calendarConfig = {
  year: 2026,
  monthIndex: 8,
  
  events: [
    { day: 7, title: "BIDABIKE FEST 3.0", image: "./images/Second.JPG", video: "https://youtu.be/-15-u9q3EA0" },
    { day: 9, title: "STREET PARADE", image: "./images/First.jpg", video: "https://youtu.be/wa9D4mJ7az8" },
    { day: 9, title: "TALENT AND CULTURAL COMPETITION", image: "./images/Fourth.JPG", video: "https://youtu.be/F7sVbTcCLPY" },

    {
      day: 13,
      title: "PET FESTIVAL",
      image: "./images/Fifth.JPG",
      images: ["./images/petFirst.jpg", "./images/petSecond.jpg", "./images/petThird.jpg"],
      video: null
    },
    
    { day: 26, title: "MR. AND MS. SAN MATEO", image: "./images/Third.JPG", video: "https://youtube.com/shorts/Rlg1C0AXWN0?feature=share" }
  ]
};

const slides = [
  {
    id: "church-landmark",
    meta: "SAN MATEO LANDMARK",
    kicker: "Welcome to",
    title: "SAN MATEO,<br>RIZALEÑO!",
    image: "./images/Landmark.jpg",
    nextLabel: "UP NEXT",
    name: "Our Lady of Aranzazu Church",
    date: "SAN MATEO, RIZAL"
  },
  ...activities
];

const products = [
  {
    name: "Puto",
    category: "Steamed Rice Cakes",
    description: "Mildly sweet, fluffy steamed rice cakes made from fermented rice flour (galapong). They are traditionally plain but often topped with melted cheese or salted egg slices.",
    image: "./images/Puto.png",
    colors: ["#d07900", "#7f8056d7", "#c49000"]
  },
  {
    name: "Kutsinta",
    category: "Steamed Rice Cakes",
    description: "Chewy, jelly-like cakes with a distinct brown hue from lye water and brown sugar. They are served with fresh grated coconut to balance the sweet, alkaline flavor.",
    image: "./images/Kutsinta.png",
    colors: ["#e70000", "#ff2200", "#ac1a00"]
  },
  {
    name: "Sapin-sapin",
    category: "Steamed Rice Cakes",
    description: "A vibrant, multi-layered dessert made from glutinous rice and coconut milk. Each layer boasts a unique color and flavor traditionally purple (ube), yellow (jackfruit or corn), and white (plain coconut) and is topped with crunchy toasted coconut curds (latik).",
    image: "./images/Sapin.png",
    colors: ["#f100dd", "#c600ee", "#f200ff"]
  },
  {
    name: "Suman",
    category: "Wrapped & Leaf-Cooked Delicacies",
    description: "Sticky, heavy rolls of glutinous rice cooked in coconut milk, tightly wrapped in banana or palm leaves, and then steamed or boiled. Variations include using grated cassava instead of rice.",
    image: "./images/Suman.png",
    colors: ["#2a7121", "#a2c700", "#5ccd8f"]
  },
  {
    name: "Bibingka",
    category: "Wrapped & Leaf-Cooked Delicacies",
    description: "A soft, spongy cake made from rice flour, coconut milk, and eggs. It is traditionally baked in a clay pot lined with banana leaves and charred by hot coals on both top and bottom.",
    image: "./images/Bibingka.png",
    colors: ["#bf7600", "#a26a29", "#cace00"]
  },
  {
    name: "Palitaw",
    category: "Boiled & Coated Cakes",
    description: "Small, flat discs of glutinous rice dough dropped into boiling water until they float (litaw). Once cooked, they are rolled in grated coconut, toasted sesame seeds, and white sugar.",
    image: "./images/Palitaw.png",
    colors: ["#f06006", "#de6400", "#d16507"]
  },
  {
    name: "Biko",
    category: "Pan-Fried & Stitched Rice Cakes",
    description: "A rich, heavy cake made by boiling sticky rice and stirring it continuously in a hot wok with dark sugar and thick coconut milk until syrupy and firm. It is finished with a layer of crispy latik.",
    image: "./images/Biko.png",
    colors: ["#bb5908", "#ff9100", "#c57102"]
  },
  {
    name: "Puto bumbong",
    category: "Dessert / Kakanin",
    description: "A seasonal delicacy traditionally cooked using upright bamboo tubes (bumbong). It uses a distinct purple glutinous rice variant (pirurutong), steamed via vapor, and slathered with butter, muscovado sugar, and shredded coconut.",
    image: "./images/Bumbong.png",
    colors: ["#8700bd", "#7c00b6", "#4400b3"]
  }
];

const landmarkStops = [
  {
    id: "aranzazu-church",
    name: "Aranzazu Church",
    type: "TOWN LANDMARK",
    location: "Lady of Aranzazu, San Mateo, Rizal",
    description: "A much-loved historic church and the heart of San Mateo's September celebrations.",
    image: "./images/Landmark.jpg",
    imageAlt: "National Shrine of Our Lady of Aranzazu in San Mateo",
    mapPosition: { x: 230, y: 365 }
  },
  {
    id: "bikabike-trails",
    name: "Timberland & Patiis Trails",
    type: "BIDABIKE FEST STOP",
    location: "Timberland Heights and Patiis Trails",
    description: "The named trail venues for BidaBike Fest, where riders take on San Mateo's mountain-bike routes.",
    image: "./images/Second.JPG",
    imageAlt: "A cyclist taking part in BidaBike Fest",
    mapPosition: { x: 860, y: 245 }
  },
  {
    id: "sm-san-mateo",
    name: "SM San Mateo",
    type: "PAGEANT VENUE",
    location: "SM San Mateo",
    description: "The listed venue for the Mr. & Ms. San Mateo event.",
    image: "./images/Third.JPG",
    imageAlt: "A candidate at a San Mateo festival pageant",
    mapPosition: { x: 490, y: 258 }
  },
  {
    id: "municipal-court",
    name: "Municipal Plaza & Court",
    type: "SHARED FESTIVAL VENUE",
    location: "Municipal Plaza and adjacent court in front of the National Shrine of Our Lady of Aranzazu, San Mateo, Rizal",
    description: "This shared plaza-and-court venue hosts the September 9 Street Parade, Talent and Cultural Competition, and Pet Festival.",
    image: "./images/Fifth.JPG",
    imageAlt: "A pet at the San Mateo Pet Festival",
    mapPosition: { x: 370, y: 435 }
  },
];

const landmarkNavigatorStart = {
  id: "navigator-start",
  position: { x: 449, y: 365 }
};

const landmarkRoadSegments = [
  {
    from: landmarkNavigatorStart.id,
    to: "municipal-court",
    points: [
      landmarkNavigatorStart.position,
      { x: 423, y: 372 }, { x: 407, y: 394 }, { x: 389, y: 416 },
      { x: 370, y: 435 }
    ]
  },
  {
    from: "aranzazu-church",
    to: "sm-san-mateo",
    points: [
      { x: 230, y: 365 }, { x: 250, y: 352 }, { x: 270, y: 337 },
      { x: 290, y: 321 }, { x: 310, y: 304 }, { x: 330, y: 287 },
      { x: 350, y: 271 }, { x: 370, y: 256 }, { x: 390, y: 245 },
      { x: 410, y: 239 }, { x: 430, y: 242 }, { x: 450, y: 250 },
      { x: 470, y: 255 }, { x: 490, y: 258 }
    ]
  },
  {
    from: "sm-san-mateo",
    to: "bikabike-trails",
    points: [
      { x: 490, y: 258 }, { x: 520, y: 239 }, { x: 550, y: 225 },
      { x: 580, y: 214 }, { x: 610, y: 207 }, { x: 640, y: 204 },
      { x: 670, y: 208 }, { x: 700, y: 215 }, { x: 730, y: 223 },
      { x: 760, y: 231 }, { x: 790, y: 239 }, { x: 820, y: 244 },
      { x: 860, y: 245 }
    ]
  },
  {
    from: "aranzazu-church",
    to: "municipal-court",
    points: [
      { x: 230, y: 365 }, { x: 254, y: 369 }, { x: 280, y: 375 },
      { x: 307, y: 391 }, { x: 337, y: 412 }, { x: 370, y: 435 }
    ]
  }
];

function getLandmarkRoadRoute(startStopId, endStopId) {
  const queue = [{ stopId: startStopId, points: [] }];
  const visited = new Set([startStopId]);

  while (queue.length) {
    const current = queue.shift();
    if (current.stopId === endStopId) return current.points;

    landmarkRoadSegments.forEach(segment => {
      const isForward = segment.from === current.stopId;
      const isReverse = segment.to === current.stopId;
      if (!isForward && !isReverse) return;

      const nextStopId = isForward ? segment.to : segment.from;
      if (visited.has(nextStopId)) return;
      visited.add(nextStopId);

      const segmentPoints = isForward ? segment.points : [...segment.points].reverse();
      queue.push({
        stopId: nextStopId,
        points: current.points.length
          ? [...current.points, ...segmentPoints.slice(1)]
          : segmentPoints
      });
    });
  }

  return [];
}

let timelineScrollHandler = null;
let homeActivityCardObserver = null;
let homePurposeObserver = null;
let ambientBackgroundTimeouts = [];
const routeDocumentPrefetches = new Map();
const routeStylesPrefetches = new Map();

function initializeAmbientBackground() {
  const isSupportedPage = Boolean(
    document.getElementById("hero")
    || document.getElementById("monthCalendarGrid")
    || document.body.classList.contains("history-page")
    || document.body.classList.contains("landmark-page")
  );
  let background = document.getElementById("ambientBackground");

  if (!isSupportedPage) {
    ambientBackgroundTimeouts.forEach(timeout => window.clearTimeout(timeout));
    ambientBackgroundTimeouts = [];
    background?.remove();
    return;
  }

  if (background) return;

  background = document.createElement("div");
  background.id = "ambientBackground";
  background.className = "ambient-background";
  background.setAttribute("aria-hidden", "true");
  const colors = ["59 130 246", "34 211 238", "136 92 246", "236 72 153", "251 146 60"];
  const orbs = Array.from({ length: 4 }, (_, index) => {
    const orb = document.createElement("span");
    orb.className = "ambient-orb";
    orb.style.setProperty("--orb-color", colors[index % colors.length]);
    orb.style.setProperty("--orb-size", `${220 + Math.random() * 190}px`);
    orb.style.left = `${Math.random() * 100}%`;
    orb.style.top = `${Math.random() * 100}%`;
    background.appendChild(orb);
    return orb;
  });
  document.body.prepend(background);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    orbs.forEach(orb => orb.classList.add("is-visible"));
    return;
  }

  function schedule(callback, delay) {
    const timeout = window.setTimeout(() => {
      ambientBackgroundTimeouts = ambientBackgroundTimeouts.filter(item => item !== timeout);
      callback();
    }, delay);
    ambientBackgroundTimeouts.push(timeout);
  }

  function moveOrb(orb) {
    schedule(() => {
      orb.classList.remove("is-visible");
      schedule(() => {
        orb.style.setProperty("--orb-color", colors[Math.floor(Math.random() * colors.length)]);
        orb.style.setProperty("--orb-size", `${220 + Math.random() * 190}px`);
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        orb.classList.add("is-visible");
        moveOrb(orb);
      }, 1100);
    }, 6500 + Math.random() * 6500);
  }

  orbs.forEach(orb => {
    requestAnimationFrame(() => orb.classList.add("is-visible"));
    moveOrb(orb);
  });
}

function initializeLandmarkPage() {
  const map = document.getElementById("landmarkMap");
  const mapFrame = map?.closest(".landmark-map-frame");
  const trail = document.getElementById("landmarkWalkingTrail");
  const walker = document.getElementById("landmarkWalker");
  const pins = document.getElementById("landmarkMapPins");
  const stopList = document.getElementById("landmarkStopList");
  const selectedStopCard = document.getElementById("landmarkSelectedStop");
  const selectedImage = document.getElementById("landmarkStopImage");
  if (!map || !trail || !walker || !pins || !stopList || !selectedStopCard || map.dataset.initialized === "true") return;

  const stopName = document.getElementById("landmarkStopName");
  const stopEyebrow = document.getElementById("landmarkStopEyebrow");
  const stopDescription = document.getElementById("landmarkStopDescription");
  const stopLocation = document.getElementById("landmarkStopLocation");
  const directions = document.getElementById("landmarkDirections");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let currentPosition = landmarkNavigatorStart.position;
  let currentStopId = landmarkNavigatorStart.id;
  let walkAnimationFrame = 0;
  let detailAnimationFrame = 0;
  let queuedStop = null;

  if (mapFrame && !reducedMotion) {
    let tiltFrame = 0;
    let previousTiltFrameTime = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;
    let frameBounds = mapFrame.getBoundingClientRect();

    function animateMapTilt(timestamp) {
      const elapsed = previousTiltFrameTime
        ? Math.min(timestamp - previousTiltFrameTime, 48)
        : 16;
      const easing = 1 - Math.exp(-elapsed / 65);
      previousTiltFrameTime = timestamp;
      currentTiltX += (targetTiltX - currentTiltX) * easing;
      currentTiltY += (targetTiltY - currentTiltY) * easing;

      if (Math.abs(targetTiltX - currentTiltX) < .005 && Math.abs(targetTiltY - currentTiltY) < .005) {
        currentTiltX = targetTiltX;
        currentTiltY = targetTiltY;
        tiltFrame = 0;
        previousTiltFrameTime = 0;
      } else {
        tiltFrame = window.requestAnimationFrame(animateMapTilt);
      }

      mapFrame.style.setProperty("--map-tilt-x", `${currentTiltX}deg`);
      mapFrame.style.setProperty("--map-tilt-y", `${currentTiltY}deg`);
    }

    function queueMapTilt() {
      if (!tiltFrame) tiltFrame = window.requestAnimationFrame(animateMapTilt);
    }

    mapFrame.addEventListener("pointerenter", () => {
      frameBounds = mapFrame.getBoundingClientRect();
    });

    mapFrame.addEventListener("pointermove", event => {
      if (event.pointerType === "touch") return;
      const x = Math.max(0, Math.min(1, (event.clientX - frameBounds.left) / frameBounds.width));
      const y = Math.max(0, Math.min(1, (event.clientY - frameBounds.top) / frameBounds.height));
      targetTiltX = (0.5 - y) * 8;
      targetTiltY = (x - 0.5) * 10;
      queueMapTilt();
    });
    mapFrame.addEventListener("pointerleave", () => {
      targetTiltX = 0;
      targetTiltY = 0;
      queueMapTilt();
    });

    window.addEventListener("resize", () => {
      frameBounds = mapFrame.getBoundingClientRect();
    }, { passive: true });
    window.addEventListener("scroll", () => {
      frameBounds = mapFrame.getBoundingClientRect();
    }, { passive: true });
  }

  function placeWalker(position) {
    walker.setAttribute("transform", `translate(${position.x + 22} ${position.y - 6})`);
  }

  function walkTo(stop) {
    if (walkAnimationFrame) {
      queuedStop = stop;
      return;
    }

    window.cancelAnimationFrame(walkAnimationFrame);
    walker.classList.remove("is-walking");
    map.classList.remove("is-walking");
    const routePoints = getLandmarkRoadRoute(currentStopId, stop.id);

    if (reducedMotion) {
      currentPosition = stop.mapPosition;
      currentStopId = stop.id;
      placeWalker(currentPosition);
      return;
    }

    if (routePoints.length < 2) {
      currentPosition = stop.mapPosition;
      currentStopId = stop.id;
      placeWalker(currentPosition);
      return;
    }

    trail.setAttribute("d", routePoints.map((point, index) => `${index ? "L" : "M"} ${point.x} ${point.y}`).join(" "));
    const trailLength = trail.getTotalLength();
    const duration = Math.max(650, trailLength / 1100 * 2100);
    const startTime = performance.now();
    walker.classList.add("is-walking");
    map.classList.add("is-walking");

    function step(now) {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const point = trail.getPointAtLength(trailLength * eased);
      currentPosition = {
        x: point.x,
        y: point.y
      };
      placeWalker(currentPosition);

      if (elapsed < 1) {
        walkAnimationFrame = window.requestAnimationFrame(step);
      } else {
        currentPosition = stop.mapPosition;
        currentStopId = stop.id;
        walkAnimationFrame = 0;
        walker.classList.remove("is-walking");
        map.classList.remove("is-walking");
        if (queuedStop) {
          const nextStop = queuedStop;
          queuedStop = null;
          walkTo(nextStop);
        }
      }
    }

    walkAnimationFrame = window.requestAnimationFrame(step);
  }

  function selectStop(stop, moveGuide = true) {
    const index = landmarkStops.indexOf(stop);
    const stopNumber = String(index + 1).padStart(2, "0");
    window.cancelAnimationFrame(detailAnimationFrame);
    selectedStopCard.classList.remove("is-changing");
    stopName.textContent = stop.name;
    stopEyebrow.textContent = `STOP ${stopNumber} · ${stop.type}`;
    stopDescription.textContent = stop.description;
    stopLocation.textContent = stop.location;
    selectedImage.src = resolveAssetUrl(stop.image);
    selectedImage.alt = stop.imageAlt;
    directions.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.location)}`;
    detailAnimationFrame = window.requestAnimationFrame(() => {
      selectedStopCard.classList.add("is-changing");
    });

    pins.querySelectorAll(".landmark-map-pin").forEach((pin, pinIndex) => {
      const isSelected = pinIndex === index;
      pin.classList.toggle("is-selected", isSelected);
      pin.setAttribute("aria-pressed", String(isSelected));
    });
    stopList.querySelectorAll(".landmark-stop-option").forEach((option, optionIndex) => {
      const isSelected = optionIndex === index;
      option.classList.toggle("is-selected", isSelected);
      option.setAttribute("aria-current", isSelected ? "location" : "false");
    });

    if (moveGuide) walkTo(stop);
  }

  landmarkStops.forEach((stop, index) => {
    const pin = document.createElement("button");
    pin.className = "landmark-map-pin";
    pin.type = "button";
    pin.style.left = `${stop.mapPosition.x / 1100 * 100}%`;
    pin.style.top = `${stop.mapPosition.y / 620 * 100}%`;
    pin.setAttribute("aria-label", `Walk to ${stop.name}`);
    pin.title = stop.name;
    pin.setAttribute("aria-pressed", "false");
    pin.innerHTML = `<span class="landmark-pin-marker" aria-hidden="true"><span>${String(index + 1).padStart(2, "0")}</span></span><span class="landmark-pin-pulse" aria-hidden="true"></span>`;
    pin.addEventListener("click", () => selectStop(stop));
    pins.appendChild(pin);

    const item = document.createElement("li");
    const option = document.createElement("button");
    option.className = "landmark-stop-option";
    option.type = "button";
    option.setAttribute("aria-current", "false");
    option.innerHTML = `<span class="landmark-stop-number">${String(index + 1).padStart(2, "0")}</span><span class="landmark-stop-option-copy"><strong>${stop.name}</strong><small>${stop.type}</small></span><span class="landmark-stop-chevron" aria-hidden="true">›</span>`;
    option.addEventListener("click", () => selectStop(stop));
    item.appendChild(option);
    stopList.appendChild(item);
  });

  const initialStop = landmarkStops[0];
  placeWalker(currentPosition);
  selectStop(initialStop, false);
  map.dataset.initialized = "true";
}

function initializeTimelinePage() {
  if (timelineScrollHandler) {
    window.removeEventListener("scroll", timelineScrollHandler);
    window.removeEventListener("resize", timelineScrollHandler);
    timelineScrollHandler = null;
  }

  const timeline = document.getElementById("historyTimeline");
  const progress = document.getElementById("timelineProgress");
  if (!timeline || !progress || timeline.dataset.initialized === "true") return;

  const timelineActivities = [...activities].sort((first, second) => {
    const firstDateTime = Date.parse(`${first.date}, ${calendarConfig.year} ${first.time}`);
    const secondDateTime = Date.parse(`${second.date}, ${calendarConfig.year} ${second.time}`);
    return firstDateTime - secondDateTime;
  });
  const unlockedActivities = new Set([0]);
  const updateTimelineProgress = () => {
    const unlockedCount = unlockedActivities.size;
    progress.textContent = `${String(unlockedCount).padStart(2, "0")} / ${String(activities.length).padStart(2, "0")} UNLOCKED`;
    timeline.style.setProperty("--timeline-progress", `${unlockedCount / activities.length * 100}%`);
  };

  function unlockTimelineItem(index) {
    if (unlockedActivities.has(index)) return;

    unlockedActivities.add(index);
    const item = timelineItems[index];
    item.classList.remove("is-locked");
    item.classList.add("is-unlocked", "is-actionable");
    const reveal = item.querySelector(".timeline-reveal");
    reveal.disabled = false;
    reveal.firstElementChild.textContent = "Pin details";
    reveal.lastElementChild.textContent = "+";
    reveal.setAttribute("aria-label", `Keep ${timelineActivities[index].name} details open`);
    updateTimelineProgress();
  }

  const timelineItems = timelineActivities.map((activity, index) => {
    const item = document.createElement("article");
    const isUnlocked = unlockedActivities.has(index);
    item.className = `timeline-item ${isUnlocked ? "is-unlocked is-actionable" : "is-locked"}`;
    item.id = `timeline-${activity.id}`;

    const dot = document.createElement("span");
    dot.className = "timeline-dot";
    dot.setAttribute("aria-hidden", "true");
    item.appendChild(dot);

    const date = document.createElement("div");
    date.className = "timeline-date";
    const dateLabel = document.createElement("span");
    dateLabel.textContent = activity.date;
    const timeLabel = document.createElement("small");
    timeLabel.textContent = activity.time;
    date.append(dateLabel, timeLabel);
    item.appendChild(date);

    const card = document.createElement("div");
    card.className = "timeline-card";

    const imageFrame = document.createElement("div");
    imageFrame.className = "timeline-image";
    const image = document.createElement("img");
    image.src = resolveAssetUrl(activity.image);
    image.alt = activity.name;
    image.loading = "lazy";
    const imageDate = document.createElement("span");
    imageDate.className = "timeline-image-date";
    imageDate.textContent = activity.date;
    const lock = document.createElement("span");
    lock.className = "timeline-lock";
    lock.textContent = "LOCKED";
    imageFrame.append(image, imageDate, lock);
    card.appendChild(imageFrame);

    const content = document.createElement("div");
    content.className = "timeline-content";
    const topline = document.createElement("div");
    topline.className = "timeline-topline";
    const location = document.createElement("span");
    location.className = "timeline-location";
    location.textContent = activity.location;
    topline.appendChild(location);
    content.appendChild(topline);

    const title = document.createElement("h3");
    title.textContent = activity.name;
    const summary = document.createElement("p");
    summary.className = "timeline-intro";
    summary.textContent = activity.cardSummary;
    content.append(title, summary);

    const reveal = document.createElement("button");
    reveal.className = "timeline-reveal";
    reveal.type = "button";
    reveal.disabled = !isUnlocked;
    reveal.setAttribute("aria-pressed", "false");
    const revealLabel = document.createElement("span");
    const revealMark = document.createElement("span");
    revealMark.className = "timeline-reveal-mark";
    revealMark.setAttribute("aria-hidden", "true");
    reveal.append(revealLabel, revealMark);

    const details = document.createElement("div");
    details.className = "timeline-details";
    details.id = `timeline-details-${activity.id}`;
    reveal.setAttribute("aria-label", `Keep ${activity.name} details open`);
    reveal.setAttribute("aria-controls", details.id);
    const history = document.createElement("p");
    history.className = "timeline-intro";
    history.textContent = activity.historyIntro;
    const howItWorks = document.createElement("div");
    howItWorks.className = "how-it-works";
    const howLabel = document.createElement("span");
    howLabel.className = "how-label";
    howLabel.textContent = "HOW IT WORKS";
    const steps = document.createElement("ol");
    activity.howItWorks.forEach(stepText => {
      const step = document.createElement("li");
      step.textContent = stepText;
      steps.appendChild(step);
    });
    howItWorks.append(howLabel, steps);
    details.append(history, howItWorks);
    content.append(reveal, details);
    card.appendChild(content);
    item.appendChild(card);

    function togglePinnedDetails() {
      if (!unlockedActivities.has(index)) return;

      const isPinned = item.classList.toggle("is-pinned");
      revealLabel.textContent = isPinned ? "Unpin details" : "Pin details";
      revealMark.textContent = isPinned ? "−" : "+";
      reveal.setAttribute("aria-pressed", String(isPinned));
      reveal.setAttribute("aria-label", isPinned
        ? `Release ${activity.name} details when not hovered`
        : `Keep ${activity.name} details open`);
    }

    reveal.addEventListener("click", togglePinnedDetails);
    revealLabel.textContent = isUnlocked ? "Pin details" : "Locked";
    revealMark.textContent = isUnlocked ? "+" : "•";
    return item;
  });

  timeline.replaceChildren(...timelineItems);

  const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
  function unlockVisibleTimelineItems() {
    timelineItems.forEach((item, index) => {
      if (unlockedActivities.has(index)) return;

      const { top, bottom } = item.querySelector(".timeline-card").getBoundingClientRect();
      if (top >= headerHeight - 1 && bottom <= window.innerHeight + 1) {
        unlockTimelineItem(index);
      }
    });
  }

  timelineScrollHandler = unlockVisibleTimelineItems;
  window.addEventListener("scroll", timelineScrollHandler, { passive: true });
  window.addEventListener("resize", timelineScrollHandler);
  timelineScrollHandler();
  updateTimelineProgress();
  timeline.dataset.initialized = "true";
}

function initializeCalendarPage() {
  const calendarGrid = document.getElementById("monthCalendarGrid");
  const dialog = document.getElementById("calendarEventDialog");
  if (!calendarGrid || !dialog || calendarGrid.dataset.initialized === "true") return;

  const calendarEvents = new Map();
  calendarConfig.events.forEach(event => {
    const dayEvents = calendarEvents.get(event.day) || [];
    dayEvents.push(event);
    calendarEvents.set(event.day, dayEvents);
  });
  const { year, monthIndex } = calendarConfig;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const leadingBlankDays = new Date(year, monthIndex, 1).getDay();
  const dateFormatter = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const dialogDate = document.getElementById("calendarDialogDate");
  const dialogName = document.getElementById("calendarDialogEventName");
  const dialogVideo = document.getElementById("calendarDialogVideo");
  const dialogYouTube = document.getElementById("calendarDialogYouTube");
  const videoPlaceholder = document.getElementById("calendarVideoPlaceholder");
  const videoPoster = document.getElementById("calendarVideoPoster");
  const eventGallery = document.getElementById("calendarDialogGallery");
  const galleryImage = document.getElementById("calendarDialogGalleryImage");
  const galleryPreviousImage = document.getElementById("calendarDialogGalleryPreviousImage");
  const galleryNextImage = document.getElementById("calendarDialogGalleryNextImage");
  const galleryCount = document.getElementById("calendarDialogGalleryCount");
  const galleryPrevious = document.getElementById("calendarDialogGalleryPrevious");
  const galleryNext = document.getElementById("calendarDialogGalleryNext");
  const dialogCard = dialog.querySelector(".calendar-dialog-card");
  const carousel = document.getElementById("calendarDialogCarousel");
  const eventCount = document.getElementById("calendarDialogEventCount");
  const closeButton = document.getElementById("calendarDialogClose");
  const previousEvent = document.getElementById("calendarPreviousEvent");
  const nextEvent = document.getElementById("calendarNextEvent");
  let selectedDate = 0;
  let selectedEventIndex = 0;
  let selectedGalleryImageIndex = 0;
  let isGalleryAnimating = false;
  let pendingGalleryImageIndex = null;
  let eventChangeTimer = 0;
  let returnFocus = null;
  let dismissedPreviewCell = null;

  function getYouTubeEmbedUrl(videoUrl) {
    let parsedUrl;
    try {
      parsedUrl = new URL(videoUrl, window.location.href);
    } catch {
      return undefined;
    }

    const hostname = parsedUrl.hostname.toLowerCase();
    const isYouTube = hostname === "youtu.be"
      || hostname === "youtube.com"
      || hostname.endsWith(".youtube.com")
      || hostname === "youtube-nocookie.com"
      || hostname.endsWith(".youtube-nocookie.com");
    if (!isYouTube) return undefined;

    const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
    const videoId = hostname === "youtu.be"
      ? pathParts[0]
      : parsedUrl.searchParams.get("v")
        || (["embed", "shorts", "live"].includes(pathParts[0]) ? pathParts[1] : null);
    if (!videoId || !/^[\w-]{11}$/.test(videoId)) return null;

    return `https://www.youtube-nocookie.com/embed/${videoId}?playsinline=1&rel=0`;
  }

  function clearVideoPlayers() {
    dialogVideo.pause();
    dialogVideo.removeAttribute("src");
    dialogVideo.load();
    dialogVideo.hidden = true;
    dialogYouTube.removeAttribute("src");
    dialogYouTube.hidden = true;
  }

  function updateGallery(images) {
    selectedGalleryImageIndex = (selectedGalleryImageIndex + images.length) % images.length;
    galleryImage.src = resolveAssetUrl(images[selectedGalleryImageIndex]);
    galleryImage.alt = `${calendarEvents.get(selectedDate)[selectedEventIndex].title} photo ${selectedGalleryImageIndex + 1}`;
    galleryCount.textContent = `${selectedGalleryImageIndex + 1} / ${images.length}`;
    eventGallery.classList.toggle("has-neighbors", images.length > 1);
    galleryPreviousImage.hidden = images.length < 2;
    galleryNextImage.hidden = images.length < 2;
    if (images.length > 1) {
      const previousIndex = (selectedGalleryImageIndex - 1 + images.length) % images.length;
      const nextIndex = (selectedGalleryImageIndex + 1) % images.length;
      galleryPreviousImage.src = resolveAssetUrl(images[previousIndex]);
      galleryNextImage.src = resolveAssetUrl(images[nextIndex]);
    }
  }

  function finishGallerySwitch(images, imageIndex) {
    selectedGalleryImageIndex = imageIndex;
    eventGallery.classList.remove("is-switching-next", "is-switching-previous");
    updateGallery(images);
    isGalleryAnimating = false;
    pendingGalleryImageIndex = null;
    galleryPrevious.disabled = false;
    galleryNext.disabled = false;
  }

  function changeGalleryImage(direction) {
    const event = calendarEvents.get(selectedDate)[selectedEventIndex];
    const images = event.images?.filter(Boolean) || [];
    if (images.length < 2 || isGalleryAnimating) return;

    const nextIndex = (selectedGalleryImageIndex + direction + images.length) % images.length;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.visibilityState !== "visible" ||
      typeof galleryImage.animate !== "function"
    ) {
      selectedGalleryImageIndex = nextIndex;
      updateGallery(images);
      return;
    }

    isGalleryAnimating = true;
    pendingGalleryImageIndex = nextIndex;
    galleryPrevious.disabled = true;
    galleryNext.disabled = true;
    eventGallery.classList.add(direction > 0 ? "is-switching-next" : "is-switching-previous");

    const outgoing = galleryImage.animate(
      [
        { opacity: 1, transform: "translateX(0) scale(1)" },
        { opacity: 0.15, transform: `translateX(${direction > 0 ? "-7%" : "7%"}) scale(.96)` }
      ],
      { duration: 180, easing: "ease-in", fill: "forwards" }
    );
    outgoing.onfinish = () => {
      outgoing.cancel();
      selectedGalleryImageIndex = nextIndex;
      eventGallery.classList.remove("is-switching-next", "is-switching-previous");
      updateGallery(images);
      const incoming = galleryImage.animate(
        [
          { opacity: 0.15, transform: `translateX(${direction > 0 ? "7%" : "-7%"}) scale(.96)` },
          { opacity: 1, transform: "translateX(0) scale(1)" }
        ],
        { duration: 240, easing: "cubic-bezier(.2,.75,.25,1)", fill: "forwards" }
      );
      incoming.onfinish = () => {
        incoming.cancel();
        isGalleryAnimating = false;
        pendingGalleryImageIndex = null;
        galleryPrevious.disabled = false;
        galleryNext.disabled = false;
      };
    };
  }

  function showSelectedEvent() {
    const events = calendarEvents.get(selectedDate);
    const event = events[selectedEventIndex];
    dialogDate.textContent = dateFormatter.format(new Date(year, monthIndex, selectedDate));
    dialogName.textContent = event.title.toUpperCase();
    videoPoster.src = resolveAssetUrl(event.image);
    videoPoster.alt = `${event.title} preview`;
    clearVideoPlayers();
    const galleryImages = event.images?.filter(Boolean) || [];
    if (galleryImages.length > 0) {
      selectedGalleryImageIndex = Math.min(selectedGalleryImageIndex, galleryImages.length - 1);
      updateGallery(galleryImages);
      eventGallery.classList.toggle("is-pet-festival", event.title === "PET FESTIVAL");
      eventGallery.hidden = false;
      videoPlaceholder.hidden = true;
    } else if (event.video) {
      eventGallery.hidden = true;
      eventGallery.classList.remove("is-pet-festival");
      const youtubeEmbedUrl = getYouTubeEmbedUrl(event.video);
      if (youtubeEmbedUrl) {
        dialogYouTube.title = `${event.title} video`;
        dialogYouTube.src = youtubeEmbedUrl;
        dialogYouTube.hidden = false;
        videoPlaceholder.hidden = true;
      } else if (youtubeEmbedUrl === null) {
        console.error(`Invalid YouTube video URL for calendar event "${event.title}".`);
        videoPlaceholder.hidden = false;
      } else {
        dialogVideo.poster = resolveAssetUrl(event.image);
        dialogVideo.src = resolveAssetUrl(event.video);
        dialogVideo.hidden = false;
        dialogVideo.load();
        videoPlaceholder.hidden = true;
      }
    } else {
      eventGallery.hidden = true;
      eventGallery.classList.remove("is-pet-festival");
      videoPlaceholder.hidden = false;
    }
    carousel.hidden = events.length < 2;
    eventCount.textContent = `${selectedEventIndex + 1} / ${events.length}`;
    previousEvent.disabled = selectedEventIndex === 0;
    nextEvent.disabled = selectedEventIndex === events.length - 1;
    if (dialog.open && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialogCard.classList.remove("is-event-changing");
      void dialogCard.offsetWidth;
      dialogCard.classList.add("is-event-changing");
      window.clearTimeout(eventChangeTimer);
      eventChangeTimer = window.setTimeout(() => {
        dialogCard.classList.remove("is-event-changing");
      }, 520);
    }
  }

  function openDate(day, trigger) {
    selectedDate = day;
    selectedEventIndex = 0;
    selectedGalleryImageIndex = 0;
    returnFocus = trigger;
    const previewCell = trigger.closest(".month-calendar-cell");
    dismissedPreviewCell = previewCell;
    previewCell.classList.add("is-preview-dismissed");
    previewCell.addEventListener("pointerleave", () => {
      previewCell.classList.remove("is-preview-dismissed");
      if (dismissedPreviewCell === previewCell) dismissedPreviewCell = null;
    }, { once: true });
    calendarGrid.classList.add("is-dialog-open");
    showSelectedEvent();
    dialog.showModal();
    closeButton.focus();
  }

  function closeCalendarDialog() {
    clearVideoPlayers();
    dialog.close();
  }

  for (let index = 0; index < leadingBlankDays; index += 1) {
    const blank = document.createElement("div");
    blank.className = "month-calendar-cell is-empty";
    blank.setAttribute("role", "gridcell");
    blank.setAttribute("aria-hidden", "true");
    calendarGrid.appendChild(blank);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const cell = document.createElement("div");
    cell.className = "month-calendar-cell";
    cell.style.setProperty("--calendar-cell-index", calendarGrid.children.length);
    cell.setAttribute("role", "gridcell");
    const events = calendarEvents.get(day);
    if (!events) {
      const inactiveDate = document.createElement("span");
      inactiveDate.className = "month-calendar-date is-inactive";
      inactiveDate.textContent = String(day);
      inactiveDate.setAttribute("aria-label", `September ${day}, ${year}; no featured event`);
      cell.appendChild(inactiveDate);
      calendarGrid.appendChild(cell);
      continue;
    }
    if (day === 26) cell.classList.add("is-preview-right");

    const dateButton = document.createElement("button");
    dateButton.className = "month-calendar-date is-highlighted";
    dateButton.type = "button";
    const dayNumber = document.createElement("span");
    dayNumber.className = "month-calendar-day-number";
    dayNumber.textContent = String(day);
    const eventTitle = document.createElement("span");
    eventTitle.className = "month-calendar-event-title";
    eventTitle.textContent = events.length > 1
      ? `${events[0].title} +${events.length - 1} more`
      : events[0].title;
    dateButton.append(dayNumber, eventTitle);
    dateButton.setAttribute("aria-haspopup", "dialog");
    dateButton.setAttribute("aria-label", `September ${day}, ${year}; ${events.map(event => event.title).join(", ")}`);
    dateButton.addEventListener("click", () => openDate(day, dateButton));

    const preview = document.createElement("span");
    preview.className = "month-calendar-preview";
    preview.setAttribute("aria-hidden", "true");
    events.forEach(event => {
      const previewItem = document.createElement("span");
      previewItem.className = "month-calendar-preview-item";
      const image = document.createElement("img");
      image.src = resolveAssetUrl(event.image);
      image.alt = "";
      image.loading = "lazy";
      const name = document.createElement("span");
      name.textContent = event.title.toUpperCase();
      previewItem.append(image, name);
      preview.appendChild(previewItem);
    });
    cell.append(dateButton, preview);
    calendarGrid.appendChild(cell);
  }

  const monthTitle = new Intl.DateTimeFormat("en", { month: "long" })
    .format(new Date(year, monthIndex, 1));
  document.getElementById("monthCalendarTitle").textContent = `${monthTitle} ${year}`;
  calendarGrid.setAttribute("aria-label", `${monthTitle} ${year}`);
  requestAnimationFrame(() => calendarGrid.classList.add("is-calendar-ready"));
  closeButton.addEventListener("click", closeCalendarDialog);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && dialog.open) {
      event.preventDefault();
      closeCalendarDialog();
    }
  });
  dialog.addEventListener("cancel", event => {
    event.preventDefault();
    closeCalendarDialog();
  });
  dialog.addEventListener("close", () => {
    clearVideoPlayers();
    calendarGrid.classList.remove("is-dialog-open");
    if (dismissedPreviewCell && !dismissedPreviewCell.matches(":hover")) {
      dismissedPreviewCell.classList.remove("is-preview-dismissed");
      dismissedPreviewCell = null;
    }
    if (returnFocus?.isConnected) returnFocus.focus();
  });
  dialog.addEventListener("click", event => {
    if (event.target === dialog) closeCalendarDialog();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "hidden" || !isGalleryAnimating) return;
    const event = calendarEvents.get(selectedDate)[selectedEventIndex];
    const images = event.images?.filter(Boolean) || [];
    galleryImage.getAnimations().forEach(animation => animation.cancel());
    finishGallerySwitch(images, pendingGalleryImageIndex);
  });
  previousEvent.addEventListener("click", () => {
    if (selectedEventIndex === 0) return;
    selectedEventIndex -= 1;
    showSelectedEvent();
  });
  nextEvent.addEventListener("click", () => {
    if (selectedEventIndex >= calendarEvents.get(selectedDate).length - 1) return;
    selectedEventIndex += 1;
    showSelectedEvent();
  });
  galleryPrevious.addEventListener("click", () => {
    changeGalleryImage(-1);
  });
  galleryNext.addEventListener("click", () => {
    changeGalleryImage(1);
  });
  dialogVideo.hidden = true;
  calendarGrid.dataset.initialized = "true";
}
function initializeHomePage() {
  homeActivityCardObserver?.disconnect();
  homeActivityCardObserver = null;
  homePurposeObserver?.disconnect();
  homePurposeObserver = null;

  const hero = document.getElementById("hero");
  if (!hero) return;

  const heroBackground = document.getElementById("heroBackground");
  const slideMeta = document.getElementById("slideMeta");
  const slideKicker = document.getElementById("slideKicker");
  const slideTitle = document.getElementById("slideTitle");
  const nextImage = document.getElementById("nextImage");
  const nextTitle = document.getElementById("nextTitle");
  const nextDate = document.getElementById("nextDate");
  const dots = document.getElementById("dots");
  const previousButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");
  const eventGrid = document.getElementById("eventGrid");
  const viewActivityButton = document.getElementById("viewActivityBtn");
  const viewActivityLabel = document.getElementById("viewActivityLabel");

  if (!hero.dataset.initialized && eventGrid) {
    const cards = activities.map((activity, index) => {
      const stage = document.createElement("div");
      stage.className = "event-card-stage";
      stage.style.setProperty("--card-index", String(index));

      const card = document.createElement("a");
      card.className = "event-card";
      card.id = `event-${activity.id}`;
      card.href = `./pages/timeline.html#timeline-${activity.id}`;

      const media = document.createElement("div");
      media.className = "event-media";
      const image = document.createElement("img");
      image.src = resolveAssetUrl(activity.image);
      image.alt = activity.name;
      image.loading = "lazy";
      media.appendChild(image);

      const content = document.createElement("div");
      content.className = "event-content";
      const number = document.createElement("span");
      number.className = "event-number";
      number.textContent = `ACTIVITY ${String(index + 1).padStart(2, "0")}`;
      const title = document.createElement("h3");
      title.textContent = activity.name;
      const summary = document.createElement("p");
      summary.textContent = activity.description;
      const linkLabel = document.createElement("div");
      linkLabel.className = "event-link";
      linkLabel.append("Explore history ");
      const arrow = document.createElement("span");
      arrow.textContent = "→";
      arrow.setAttribute("aria-hidden", "true");
      linkLabel.appendChild(arrow);
      content.append(number, title, summary, linkLabel);
      card.append(media, content);
      stage.appendChild(card);
      return stage;
    });
    eventGrid.replaceChildren(...cards);

    homeActivityCardObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in-view");
        homeActivityCardObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -6% 0px"
    });
    cards.forEach(stage => homeActivityCardObserver.observe(stage.firstElementChild));
  }

  const purposeSections = Array.from(document.querySelectorAll(".purpose-statement, .purpose-section"));
  if (purposeSections.length && "IntersectionObserver" in window) {
    homePurposeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        homePurposeObserver.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -5% 0px" });
    purposeSections.forEach(section => {
      if (section.classList.contains("is-revealed")) return;
      section.classList.add("purpose-reveal-pending");
      homePurposeObserver.observe(section);
    });
  }

  if (!hero.dataset.initialized && slideMeta && slideKicker && slideTitle
    && nextImage && nextTitle && nextDate && dots && previousButton && nextButton) {
    let selectedSlide = 0;

    function formatSlideTitle(title) {
      const lineBreak = /<br\s*\/?>/i;
      const breakIndex = title.search(lineBreak);
      if (breakIndex < 0) return title;
      const [firstLine, ...remainingLines] = title.split(lineBreak);
      return `${firstLine}<br><span class="hero-title-accent">${remainingLines.join(" ")}</span>`;
    }

    const dotButtons = slides.map((slide, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot";
      dot.setAttribute("aria-label", `Show slide ${index + 1}: ${slide.name}`);
      dot.addEventListener("click", () => showSlide(index));
      dots.appendChild(dot);
      return dot;
    });

    function showSlide(index) {
      selectedSlide = (index + slides.length) % slides.length;
      const slide = slides[selectedSlide];
      const upcoming = slides[(selectedSlide + 1) % slides.length];
      slideMeta.textContent = slide.meta;
      slideKicker.textContent = slide.kicker;
      slideTitle.innerHTML = formatSlideTitle(slide.title);
      if (viewActivityLabel) {
        viewActivityLabel.textContent = slide.id === "church-landmark" ? "View Landmark" : "Explore Activity";
      }
      heroBackground.style.backgroundImage = `url("${resolveAssetUrl(slide.image)}")`;
      nextImage.src = resolveAssetUrl(upcoming.image);
      nextImage.alt = `Preview of ${upcoming.name}`;
      nextTitle.textContent = upcoming.name;
      nextDate.textContent = upcoming.date;
      dotButtons.forEach((dot, dotIndex) => {
        const active = dotIndex === selectedSlide;
        dot.classList.toggle("active", active);
        dot.setAttribute("aria-current", String(active));
      });

      const copy = hero.querySelector(".hero-copy");
      copy?.classList.remove("slide-copy-entering");
      if (copy) {
        void copy.offsetWidth;
        copy.classList.add("slide-copy-entering");
      }
    }

    previousButton.addEventListener("click", () => showSlide(selectedSlide - 1));
    nextButton.addEventListener("click", () => showSlide(selectedSlide + 1));

    viewActivityButton?.addEventListener("click", () => {
      const slide = slides[selectedSlide];
      if (slide.id === "church-landmark") {
        navigateTo(new URL("./pages/landmark.html", window.location.href));
        return;
      }
      const activity = activities.find(item => item.id === slide.id);
      const card = activity && document.getElementById(`event-${activity.id}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.focus({ preventScroll: true });
        card.classList.add("highlighted");
        window.setTimeout(() => card.classList.remove("highlighted"), 1300);
      }
    });
    showSlide(0);
  }

  hero.dataset.initialized = "true";
}

function initializeProductsPage() {
  const showcase = document.getElementById("productShowcase");
  if (!showcase) return;

  const image = document.getElementById("featuredProductImage");
  const wheel = document.getElementById("productWheel");
  const category = document.getElementById("productCategory");
  const title = document.getElementById("productTitle");
  const description = document.getElementById("productDescription");
  const previousButton = document.getElementById("previousProduct");
  const nextButton = document.getElementById("nextProduct");
  const productCounter = document.getElementById("productCounter");
  if (!image || !wheel || !category || !title || !description || !previousButton || !nextButton || !productCounter) return;
  if (showcase.dataset.initialized === "true") return;

  let selectedIndex = 0;
  let selectionAnimationTimeout;
  let isAnimating = false;

  const wheelItems = products.map(product => {
    const item = document.createElement("button");
    item.className = "product-wheel-item";
    item.type = "button";

    const thumbnail = document.createElement("img");
    thumbnail.className = "product-wheel-icon";
    thumbnail.src = resolveAssetUrl(product.image);
    thumbnail.alt = "";
    item.append(thumbnail);
    wheel.append(item);
    return item;
  });

  function layoutWheel() {
    wheelItems.forEach((item, index) => {
      const distance = (index - selectedIndex + products.length) % products.length;
      const isSelected = distance === 0;
      item.classList.toggle("is-selected", isSelected);
      item.classList.remove("is-previous", "is-next");
      item.setAttribute("aria-hidden", String(!isSelected));
      item.disabled = true;
      item.setAttribute(
        "aria-label",
        isSelected ? `${products[index].name}, selected` : ""
      );
    });
  }

  function updateProduct(product) {
    category.textContent = product.category.toUpperCase();
    title.textContent = product.name.toUpperCase();
    title.classList.toggle("is-long-product-name", product.name === "Sapin-sapin");
    description.textContent = product.description;
    productCounter.textContent = `${String(selectedIndex + 1).padStart(2, "0")} / ${String(products.length).padStart(2, "0")}`;
    productCounter.setAttribute("aria-label", `Product ${selectedIndex + 1} of ${products.length}`);
    image.src = resolveAssetUrl(product.image);
    image.alt = product.name;
    showcase.style.setProperty("--product-bg-start", product.colors[0]);
    showcase.style.setProperty("--product-bg-middle", product.colors[1]);
    showcase.style.setProperty("--product-bg-end", product.colors[2]);
    showcase.style.setProperty(
      "--product-accent-color",
      `color-mix(in srgb, ${product.colors[0]} 74%, #ffffff)`
    );
  }

  function animateProductImage(direction, bounds, outgoingImage) {
    const duration = 1050;
    const edgeX = window.innerWidth + bounds.width;
    const bottomY = window.innerHeight - bounds.top + bounds.height * .35;
    const incomingX = direction > 0 ? -edgeX : edgeX;
    const outgoingX = -incomingX;
    const transform = (x, y, scale) =>
      `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    const options = {
      duration,
      easing: "cubic-bezier(.22,.72,.2,1)",
      fill: "both"
    };

    outgoingImage.style.position = "fixed";
    outgoingImage.style.top = `${bounds.top}px`;
    outgoingImage.style.left = `${bounds.left}px`;
    outgoingImage.style.width = `${bounds.width}px`;
    outgoingImage.style.height = `${bounds.height}px`;
    outgoingImage.style.maxWidth = "none";
    outgoingImage.style.margin = "0";
    outgoingImage.style.zIndex = "1000";
    outgoingImage.style.pointerEvents = "none";
    outgoingImage.style.animation = "none";
    outgoingImage.style.transform = "none";
    document.body.append(outgoingImage);

    const incomingAnimation = image.animate([
      { transform: transform(incomingX, bottomY, .48), opacity: 0, filter: "blur(1.2px)" },
      { transform: transform(incomingX * .68, bottomY * .64, .66), opacity: .42, filter: "blur(.7px)", offset: .32 },
      { transform: transform(incomingX * .24, bottomY * .14, .9), opacity: .92, filter: "blur(.15px)", offset: .72 },
      { transform: transform(0, 0, 1), opacity: 1, filter: "blur(0)" }
    ], options);
    const outgoingAnimation = outgoingImage.animate([
      { transform: transform(0, 0, 1), opacity: 1, filter: "blur(0)" },
      { transform: transform(outgoingX * .24, bottomY * .14, .9), opacity: .92, filter: "blur(.15px)", offset: .28 },
      { transform: transform(outgoingX * .68, bottomY * .64, .66), opacity: .42, filter: "blur(.7px)", offset: .68 },
      { transform: transform(outgoingX, bottomY, .48), opacity: 0, filter: "blur(1.2px)" }
    ], options);

    return Promise.all([
      incomingAnimation.finished
        .catch(() => undefined)
        .finally(() => incomingAnimation.cancel()),
      outgoingAnimation.finished.catch(() => undefined)
    ]).finally(() => outgoingImage.remove());
  }

  async function showProduct(index) {
    if (isAnimating) return;
    const nextIndex = (index + products.length) % products.length;
    if (nextIndex === selectedIndex) return;

    const forwardDistance = (nextIndex - selectedIndex + products.length) % products.length;
    const direction = forwardDistance <= products.length / 2 ? 1 : -1;
    const imageBounds = image.getBoundingClientRect();
    const outgoingImage = image.cloneNode();
    outgoingImage.removeAttribute("id");
    selectedIndex = nextIndex;
    isAnimating = true;
    wheel.classList.add("is-transitioning");
    layoutWheel();
    updateProduct(products[selectedIndex]);

    showcase.classList.remove("is-changing");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const wheelTransform = getComputedStyle(wheel).transform;
      const wheelTransformPrefix = wheelTransform === "none" ? "" : `${wheelTransform} `;
      const wheelAnimation = wheel.animate([
        { transform: `${wheelTransformPrefix}rotate(0deg)` },
        { transform: `${wheelTransformPrefix}rotate(${direction * 360}deg)` }
      ], {
        duration: 1050,
        easing: "cubic-bezier(.22,.72,.2,1)"
      });
      clearTimeout(selectionAnimationTimeout);
      void showcase.offsetWidth;
      showcase.classList.add("is-changing");
      selectionAnimationTimeout = window.setTimeout(() => showcase.classList.remove("is-changing"), 1200);
      await Promise.all([
        animateProductImage(direction, imageBounds, outgoingImage),
        wheelAnimation.finished.catch(() => undefined)
      ]);
    } else {
      wheel.classList.remove("is-transitioning");
      isAnimating = false;
      layoutWheel();
    }

    if (isAnimating) {
      wheel.classList.remove("is-transitioning");
      isAnimating = false;
      layoutWheel();
    }
  }

  previousButton.addEventListener("click", () => showProduct(selectedIndex - 1));
  nextButton.addEventListener("click", () => showProduct(selectedIndex + 1));

  updateProduct(products[selectedIndex]);
  layoutWheel();
  showcase.dataset.initialized = "true";
}


function initializePageContent() {
  initializeAmbientBackground();
  if (document.getElementById("hero")) initializeHomePage();
  if (document.getElementById("monthCalendarGrid")) initializeCalendarPage();
  if (document.getElementById("productShowcase")) initializeProductsPage();
  if (document.getElementById("landmarkMap")) initializeLandmarkPage();
  if (document.getElementById("historyTimeline")) initializeTimelinePage();
  initializeBackToTop();
}

let cancelPageLoader = null;

function initializePageLoader() {
  const loader = document.getElementById("pageLoader");
  const root = document.documentElement;
  if (!loader) return;
  if (!root.hasAttribute("data-page-loading")) {
    loader.remove();
    return;
  }

  const startedAt = performance.now();
  const criticalImages = Array.from(document.querySelectorAll("main img:not([loading='lazy'])")).slice(0, 2);
  const hero = document.getElementById("hero");
  if (hero) {
    const heroImage = new Image();
    heroImage.src = resolveAssetUrl(slides[0].image);
    criticalImages.unshift(heroImage);
  }
  const imageReady = Promise.all(criticalImages.map(image => {
    if (!image.complete && !image.decode) {
      return new Promise(resolve => {
        image.addEventListener("load", resolve, { once: true });
        image.addEventListener("error", resolve, { once: true });
      });
    }
    if (image.decode) return image.decode().catch(() => undefined);
    return Promise.resolve();
  }));
  let imageTimeoutId;
  let dismissTimeoutId;
  let removeTimeoutId;
  const cancel = () => {
    window.clearTimeout(imageTimeoutId);
    window.clearTimeout(dismissTimeoutId);
    window.clearTimeout(removeTimeoutId);
    root.removeAttribute("data-page-loading");
    loader.remove();
    cancelPageLoader = null;
  };
  cancelPageLoader = cancel;
  const imageTimeout = new Promise(resolve => {
    imageTimeoutId = window.setTimeout(resolve, 900);
  });

  Promise.race([imageReady, imageTimeout]).then(() => {
    window.clearTimeout(imageTimeoutId);
    if (!loader.isConnected) return;
    const minimumDisplay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 350;
    const remainingDisplay = Math.max(0, minimumDisplay - (performance.now() - startedAt));
    dismissTimeoutId = window.setTimeout(() => {
      loader.classList.add("is-dismissing");
      const dismissalDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 340;
      removeTimeoutId = window.setTimeout(() => {
        root.removeAttribute("data-page-loading");
        loader.remove();
        cancelPageLoader = null;
      }, dismissalDuration);
    }, remainingDisplay);
  });
}

function initializeBackToTop() {
  const buttons = Array.from(document.querySelectorAll("#backToTop"));
  const button = buttons.find(item => item.dataset.global === "true") || buttons[0] || document.createElement("button");
  buttons.forEach(item => {
    if (item !== button) item.remove();
  });

  if (!button.isConnected) {
    button.id = "backToTop";
    button.className = "back-to-top";
    button.type = "button";
    button.setAttribute("aria-label", "Scroll back to top");
    button.innerHTML = "<span aria-hidden=\"true\">↑</span>";
  }

  button.dataset.global = "true";
  const siteHeader = document.querySelector(".site-header");
  (siteHeader || document.body).append(button);

  if (button.dataset.initialized !== "true") {
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    button.dataset.initialized = "true";
  }

  const updateVisibility = () => {
    const canScroll = document.documentElement.scrollHeight > window.innerHeight + 40;
    const isVisible = canScroll && window.scrollY > 240;
    button.classList.toggle("show", isVisible);
  };

  if (button.dataset.scrollListener !== "true") {
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    button.dataset.scrollListener = "true";
  }
  updateVisibility();
}

initializePageContent();
initializePageLoader();
if (window.location.hash) {
  const initialHashTarget = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
  if (initialHashTarget) {
    requestAnimationFrame(() => initialHashTarget.scrollIntoView({ block: "center" }));
  }
}

const mainNav = document.querySelector(".main-nav");
const siteHeader = document.querySelector(".site-header");
const navIndicator = mainNav ? document.createElement("span") : null;
const navTransitionKey = "festival-nav-origin";
const routeTransitionKey = "festival-route-direction";
let isNavigating = false;
let queuedRouteNavigation = null;

function updateAntiContrastHeader(pathname) {
  const antiContrastRoutes = /\/pages\/(calendars|products|timeline|landmark)\.html$/i;
  siteHeader?.classList.toggle("is-anti-contrast", antiContrastRoutes.test(normalizeRoutePath(pathname)));
}

if (siteHeader) {
  let scrollFrame = 0;
  const updateHeaderScrollState = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      const introSection = document.querySelector(".intro-section");
      const scrollThreshold = introSection
        ? Math.min(introSection.offsetTop - siteHeader.offsetHeight, 80)
        : 48;
      siteHeader.classList.toggle("is-scrolled", window.scrollY >= scrollThreshold);
      scrollFrame = 0;
    });
  };
  window.addEventListener("scroll", updateHeaderScrollState, { passive: true });
  window.addEventListener("resize", updateHeaderScrollState);
  updateAntiContrastHeader(window.location.pathname);
  updateHeaderScrollState();
}

function getNavLinks() {
  return mainNav ? Array.from(mainNav.querySelectorAll("a")) : [];
}

function placeNavIndicator(link, animate = true) {
  if (!mainNav || !navIndicator || !link) return;
  const navBounds = mainNav.getBoundingClientRect();
  const linkBounds = link.getBoundingClientRect();
  const left = linkBounds.left - navBounds.left - mainNav.clientLeft + mainNav.scrollLeft;
  const top = linkBounds.top - navBounds.top - mainNav.clientTop + mainNav.scrollTop;
  navIndicator.classList.toggle("no-transition", !animate);
  navIndicator.style.left = `${left}px`;
  navIndicator.style.top = `${top}px`;
  navIndicator.style.width = `${linkBounds.width}px`;
  navIndicator.style.height = `${linkBounds.height}px`;
  if (!animate) {
    void navIndicator.offsetWidth;
    requestAnimationFrame(() => navIndicator.classList.remove("no-transition"));
  }
}

function correctNavIndicatorPosition() {
  if (!mainNav || !navIndicator) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      placeNavIndicator(mainNav.querySelector("a.active"), false);
    });
  });
}

function normalizeRoutePath(pathname) {
  return pathname === "/" ? "/index.html" : pathname;
}

function getRouteRequestUrl(destination) {
  const routeUrl = new URL(destination.href);
  routeUrl.hash = "";
  return routeUrl;
}

function prefetchRouteDocument(destination) {
  const routeUrl = getRouteRequestUrl(destination);
  const isSameOrigin = (routeUrl.protocol === "http:" || routeUrl.protocol === "https:")
    && routeUrl.origin === window.location.origin;
  const isSameLocalFile = routeUrl.protocol === "file:" && window.location.protocol === "file:";
  const connection = navigator.connection;
  if (
    connection?.saveData
    || connection?.effectiveType === "slow-2g"
    || connection?.effectiveType === "2g"
  ) return;
  if ((!isSameOrigin && !isSameLocalFile) || !routeUrl.pathname.toLowerCase().endsWith(".html")) return;

  const key = routeUrl.href;
  if (routeDocumentPrefetches.has(key)) return;
  while (routeDocumentPrefetches.size >= 3) {
    const oldestKey = routeDocumentPrefetches.keys().next().value;
    routeDocumentPrefetches.delete(oldestKey);
  }

  const request = fetch(routeUrl.href, { headers: { "X-Requested-With": "Festival-SPA" } })
    .then(async response => {
      if (!response.ok) throw new Error(`Unable to prefetch ${routeUrl.href}: ${response.status}`);
      return response.text();
    });
  routeDocumentPrefetches.set(key, request);
  request.catch(() => {
    if (routeDocumentPrefetches.get(key) === request) routeDocumentPrefetches.delete(key);
  });
  prefetchRouteStyles(routeUrl, request);
}

function prefetchRouteStyles(destination, documentRequest) {
  const key = destination.href;
  if (routeStylesPrefetches.has(key)) return;

  const request = documentRequest
    .then(markup => {
      const nextDocument = new DOMParser().parseFromString(markup, "text/html");
      return prepareRouteStyles(nextDocument, destination);
    })
    .catch(error => {
      if (routeStylesPrefetches.get(key) === request) routeStylesPrefetches.delete(key);
      console.error(`Unable to prefetch styles for ${destination.href}.`, error);
      return undefined;
    });
  routeStylesPrefetches.set(key, request);
}

async function fetchRouteDocument(destination) {
  const routeUrl = getRouteRequestUrl(destination);
  const key = routeUrl.href;
  const prefetched = routeDocumentPrefetches.get(key);
  if (prefetched) {
    routeDocumentPrefetches.delete(key);
    return prefetched;
  }

  const response = await fetch(routeUrl.href, { headers: { "X-Requested-With": "Festival-SPA" } });
  if (!response.ok) throw new Error(`Unable to load ${destination.href}: ${response.status}`);
  return response.text();
}

function handleRouteIntent(event) {
  const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
  if (!link || (event.type === "pointerover" && link.contains(event.relatedTarget))) return;
  if ((link.target && link.target !== "_self") || link.hasAttribute("download")) return;

  const destination = new URL(link.href, window.location.href);
  if (
    normalizeRoutePath(destination.pathname) === normalizeRoutePath(window.location.pathname)
    && destination.search === window.location.search
  ) return;

  prefetchRouteDocument(destination);
}

if (mainNav && navIndicator) {
  document.addEventListener("pointerover", handleRouteIntent, { passive: true });
  document.addEventListener("focusin", handleRouteIntent);
  document.addEventListener("touchstart", handleRouteIntent, { passive: true });

  navIndicator.className = "nav-indicator no-transition";
  navIndicator.setAttribute("aria-hidden", "true");
  mainNav.prepend(navIndicator);
  const links = getNavLinks();
  const activeLink = mainNav.querySelector("a.active") || links[0];
  const savedOrigin = sessionStorage.getItem(navTransitionKey);
  sessionStorage.removeItem(navTransitionKey);
  const originIndex = savedOrigin === null ? -1 : Number(savedOrigin);

  if (Number.isInteger(originIndex) && originIndex >= 0 && originIndex < links.length) {
    placeNavIndicator(links[originIndex], false);
    requestAnimationFrame(() => placeNavIndicator(activeLink));
  } else {
    placeNavIndicator(activeLink, false);
  }

  document.fonts.ready.then(correctNavIndicatorPosition);
  document.fonts.addEventListener("loadingdone", correctNavIndicatorPosition);

  navIndicator.addEventListener("transitionend", event => {
    if (isNavigating || event.target !== navIndicator) return;
    if (navIndicator.getAnimations().some(animation => animation.playState === "running")) return;
    correctNavIndicatorPosition();
  });

  navIndicator.addEventListener("transitioncancel", correctNavIndicatorPosition);
  window.addEventListener("pageshow", correctNavIndicatorPosition);
  window.addEventListener("resize", () => {
    if (!isNavigating) correctNavIndicatorPosition();
  });
  if ("ResizeObserver" in window) {
    const navResizeObserver = new ResizeObserver(() => {
      if (!isNavigating) correctNavIndicatorPosition();
    });
    navResizeObserver.observe(mainNav);
    getNavLinks().forEach(link => navResizeObserver.observe(link));
  }
}

async function loadRoute(destination, { replaceHistory = false } = {}) {
  const currentMain = document.querySelector("main");
  if (!currentMain) throw new Error("The current page does not have a compatible page layout.");

  const currentRouteStyles = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'))
    .filter(link => link.media !== "not all" && isPageStylesheet(new URL(link.href, document.baseURI)));
  const currentNavLinks = getNavLinks();
  const currentPageIndex = currentNavLinks.findIndex(link => link.classList.contains("active"));
  const destinationPath = normalizeRoutePath(destination.pathname);
  const destinationPageIndex = currentNavLinks.findIndex(link => normalizeRoutePath(new URL(link.href).pathname) === destinationPath);
  const direction = currentPageIndex >= 0 && destinationPageIndex >= 0 && destinationPageIndex < currentPageIndex
    ? "right"
    : "left";

  const nextDocument = new DOMParser().parseFromString(await fetchRouteDocument(destination), "text/html");
  const nextMain = nextDocument.querySelector("main");
  const nextFooter = nextDocument.querySelector("footer");
  const currentFooter = document.querySelector("footer");
  if (!nextMain || !currentMain) {
    throw new Error(`The page at ${destination.href} does not have a compatible page layout.`);
  }

  const routeStyleKey = getRouteRequestUrl(destination).href;
  const prefetchedStyles = routeStylesPrefetches.get(routeStyleKey);
  let nextRouteStyles = prefetchedStyles ? await prefetchedStyles : undefined;
  routeStylesPrefetches.delete(routeStyleKey);
  if (!nextRouteStyles) nextRouteStyles = await prepareRouteStyles(nextDocument, destination);
  preloadRouteImages(nextMain, destination);
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    await Promise.all([
      animateRoutePage(currentMain, `route-exiting-${direction}`),
      currentFooter ? animateRoutePage(currentFooter, `route-exiting-${direction}`) : Promise.resolve()
    ]);
  }

  if (replaceHistory) {
    history.replaceState(history.state, "", destination.href);
  } else {
    history.pushState({}, "", destination.href);
  }

  document.title = nextDocument.title;
  document.body.className = nextDocument.body.className;
  updateAntiContrastHeader(destination.pathname);
  currentMain.replaceWith(nextMain);
  nextRouteStyles.forEach(link => {
    link.media = "all";
    link.dataset.routeStyle = "";
  });
  currentRouteStyles.forEach(link => link.remove());
  if (currentFooter && nextFooter) currentFooter.replaceWith(nextFooter);
  else if (currentFooter) currentFooter.remove();
  else if (nextFooter) document.body.insertBefore(nextFooter, document.querySelector("script[src]"));

  document.head.querySelectorAll("style[data-route-style]").forEach(style => style.remove());
  nextDocument.head.querySelectorAll("style").forEach(style => {
    const routeStyle = document.createElement("style");
    routeStyle.dataset.routeStyle = "";
    routeStyle.textContent = style.textContent;
    document.head.append(routeStyle);
  });

  const loadedFontStylesheets = new Set(
    Array.from(document.head.querySelectorAll('link[rel="stylesheet"][href*="fonts.googleapis.com"]'), link => link.href)
  );
  nextDocument.head.querySelectorAll('link[rel="stylesheet"][href*="fonts.googleapis.com"]').forEach(fontLink => {
    if (loadedFontStylesheets.has(fontLink.href)) return;
    const routeFont = document.createElement("link");
    routeFont.rel = "stylesheet";
    routeFont.href = fontLink.href;
    routeFont.dataset.routeFont = "";
    document.head.append(routeFont);
    loadedFontStylesheets.add(fontLink.href);
  });
  const nextNavLinks = Array.from(nextDocument.querySelectorAll(".main-nav a"));
  nextNavLinks.forEach((nextLink, index) => {
    if (currentNavLinks[index]) currentNavLinks[index].href = new URL(nextLink.getAttribute("href"), destination.href).href;
  });
  const nextBrandLink = nextDocument.querySelector(".site-header .brand");
  const currentBrandLink = document.querySelector(".site-header .brand");
  if (nextBrandLink && currentBrandLink) {
    currentBrandLink.href = new URL(nextBrandLink.getAttribute("href"), destination.href).href;
  }

  const activeLink = currentNavLinks.find(link => normalizeRoutePath(new URL(link.href).pathname) === destinationPath);
  currentNavLinks.forEach(link => link.classList.toggle("active", link === activeLink));
  placeNavIndicator(activeLink, false);
  document.fonts.ready.then(correctNavIndicatorPosition);
  if (destination.hash) {
    const target = document.getElementById(decodeURIComponent(destination.hash.slice(1)));
    if (target) target.scrollIntoView({ block: "center", behavior: "smooth" });
    else window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, 0);
  }
  initializePageContent();
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const transitionWash = document.createElement("span");
    transitionWash.className = `route-transition-wash route-transition-wash-from-${direction}`;
    transitionWash.setAttribute("aria-hidden", "true");
    document.body.append(transitionWash);
    const removeTransitionWash = () => {
      window.clearTimeout(transitionWashTimeout);
      transitionWash.remove();
    };
    const transitionWashTimeout = window.setTimeout(removeTransitionWash, 1000);
    transitionWash.addEventListener("animationend", removeTransitionWash, { once: true });
    await Promise.all([
      animateRoutePage(nextMain, `route-entering-from-${direction}`),
      nextFooter ? animateRoutePage(nextFooter, `route-entering-from-${direction}`) : Promise.resolve()
    ]);
  }
}

function preloadRouteImages(main, destination) {
  const imageUrls = new Set();
  const routePath = normalizeRoutePath(destination.pathname);
  if (routePath.endsWith("/pages/products.html")) {
    imageUrls.add(resolveAssetUrl(products[0].image));
  } else if (routePath.endsWith("/pages/timeline.html")) {
    imageUrls.add(resolveAssetUrl(activities[0].image));
  } else if (routePath.endsWith("/pages/landmark.html")) {
    imageUrls.add(resolveAssetUrl(landmarkStops[0].image));
  } else if (routePath.endsWith("/index.html")) {
    imageUrls.add(resolveAssetUrl(slides[0].image));
  }

  for (const image of main.querySelectorAll("img[src]")) {
    if (image.loading === "lazy" || image.hidden) continue;
    imageUrls.add(new URL(image.getAttribute("src"), destination.href).href);
    if (imageUrls.size >= 2) break;
  }

  let priority = 0;
  for (const url of imageUrls) {
    const preload = new Image();
    preload.decoding = "async";
    preload.fetchPriority = priority++ === 0 ? "high" : "low";
    preload.src = url;
  }
}

function animateRoutePage(page, className) {
  return new Promise(resolve => {
    let timeout;
    const previousWillChange = page.style.willChange;
    const finish = event => {
      if (event && event.target !== page) return;
      page.removeEventListener("animationend", finish);
      window.clearTimeout(timeout);
      page.classList.remove(className);
      page.style.willChange = previousWillChange;
      resolve();
    };

    page.style.willChange = "transform, opacity";
    page.addEventListener("animationend", finish);
    page.classList.add(className);
    timeout = window.setTimeout(() => finish(), 360);
  });
}

function playStoredRouteEntry() {
  let direction;
  try {
    direction = sessionStorage.getItem(routeTransitionKey);
    sessionStorage.removeItem(routeTransitionKey);
  } catch (error) {
    console.error("Unable to restore the page transition after local navigation.", error);
    return;
  }

  if (
    (direction !== "left" && direction !== "right")
    || window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) return;

  const currentMain = document.querySelector("main");
  const currentFooter = document.querySelector("footer");
  if (currentMain) void animateRoutePage(currentMain, `route-entering-from-${direction}`);
  if (currentFooter) void animateRoutePage(currentFooter, `route-entering-from-${direction}`);
}

function isPageStylesheet(url) {
  return url.pathname.includes("/styles/") && !url.pathname.endsWith("/common.css");
}

async function prepareRouteStyles(nextDocument, destination) {
  const routeStyles = Array.from(nextDocument.querySelectorAll('link[rel="stylesheet"][href]'))
    .map(source => new URL(source.getAttribute("href"), destination.href))
    .filter(isPageStylesheet);

  return Promise.all(routeStyles.map(url => new Promise((resolve, reject) => {
    const existing = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'))
      .find(link => new URL(link.href, document.baseURI).href === url.href);
    if (existing) {
      resolve(existing);
      return;
    }

    const routeStyle = document.createElement("link");
    routeStyle.rel = "stylesheet";
    routeStyle.href = url.href;
    routeStyle.media = "not all";
    routeStyle.dataset.routeStyle = "";
    routeStyle.addEventListener("load", () => resolve(routeStyle), { once: true });
    routeStyle.addEventListener("error", () => {
      routeStyle.remove();
      reject(new Error(`Unable to load page stylesheet ${url.href}.`));
    }, { once: true });
    document.head.append(routeStyle);
  })));
}

async function navigateTo(destination, requestedNavLink = null) {
  if (isNavigating) {
    queuedRouteNavigation = { destination, requestedNavLink };
    return;
  }
  cancelPageLoader?.();
  isNavigating = true;
  mainNav?.classList.add("is-navigating");

  const targetNavLink = requestedNavLink?.closest(".main-nav")
    ? requestedNavLink
    : getNavLinks().find(link => normalizeRoutePath(new URL(link.href).pathname) === normalizeRoutePath(destination.pathname));
  if (targetNavLink) placeNavIndicator(targetNavLink);

  try {
    await loadRoute(destination);
  } catch (error) {
    console.error("Page transition failed; using normal navigation.", error);
    if (destination.protocol === "file:" && window.location.protocol === "file:" && targetNavLink) {
      try {
        const links = getNavLinks();
        const currentPageIndex = links.findIndex(link => link.classList.contains("active"));
        const destinationPageIndex = links.indexOf(targetNavLink);
        const direction = currentPageIndex >= 0 && destinationPageIndex >= 0 && destinationPageIndex < currentPageIndex
          ? "right"
          : "left";
        sessionStorage.setItem(navTransitionKey, String(destinationPageIndex));
        sessionStorage.setItem(routeTransitionKey, direction);
      } catch (storageError) {
        console.error("Unable to preserve the page transition during local navigation fallback.", storageError);
      }
    }
    const fallbackDestination = new URL(destination.href);
    if (destination.protocol === "file:" && window.location.protocol === "file:") {
      fallbackDestination.searchParams.set("__septemfest_navigation", "1");
    }
    window.location.assign(fallbackDestination.href);
    return;
  } finally {
    isNavigating = false;
    mainNav?.classList.remove("is-navigating");
    const queuedNavigation = queuedRouteNavigation;
    queuedRouteNavigation = null;
    if (
      queuedNavigation
      && (
        normalizeRoutePath(queuedNavigation.destination.pathname) !== normalizeRoutePath(window.location.pathname)
        || queuedNavigation.destination.search !== window.location.search
      )
    ) {
      void navigateTo(queuedNavigation.destination, queuedNavigation.requestedNavLink);
    }
  }
}

if (mainNav && navIndicator) {
  document.addEventListener("click", async event => {
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if ((link.target && link.target !== "_self") || link.hasAttribute("download")) return;

    const destination = new URL(link.href, window.location.href);
    const isLocalFileNavigation = destination.protocol === "file:" && window.location.protocol === "file:";
    const isSameWebOrigin = (destination.protocol === "http:" || destination.protocol === "https:")
      && destination.origin === window.location.origin;
    if ((!isLocalFileNavigation && !isSameWebOrigin) || !destination.pathname.toLowerCase().endsWith(".html")) return;
    if (normalizeRoutePath(destination.pathname) === normalizeRoutePath(window.location.pathname)
      && destination.search === window.location.search) {
      if (destination.hash !== window.location.hash) return;
      event.preventDefault();
      return;
    }

    event.preventDefault();
    await navigateTo(destination, link);
  });

  window.addEventListener("popstate", async () => {
    try {
      await loadRoute(new URL(window.location.href), { replaceHistory: true });
      placeNavIndicator(mainNav.querySelector("a.active"));
    } catch (error) {
      console.error("Unable to restore the previous page.", error);
      window.location.reload();
    }
  });
}

playStoredRouteEntry();
