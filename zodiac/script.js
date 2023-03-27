//start find button
function findSign(){
    //declaration & finding element
  const findBtn = document.getElementById('findBtn')
  const resetBtn = document.getElementById('resetBtn');
  const headerContent = document.getElementById('header-content');
  const z_img = document.getElementById('imgCT');

  const h3_z = document.getElementById('h3-zodiac');
  const h3_p = document.getElementById('h3-planet');
  const h3_ce = document.getElementById('h3-ce');
  const h3_sd = document.getElementById('h3-sd');

  const zodiacSign = document.getElementById('zodiac');
  const planet = document.getElementById('planet');
  const elementColor = document.getElementById('element-color');
  const description = document.getElementById('description');

  //Grabing date
  const d_input = document.getElementById('dateInput')
  let birthDate = document.getElementById('dateInput');
  birthDate = new Date(birthDate.value);
  const month = birthDate.getMonth();
  const day = birthDate.getDate();

  //restriction if date input is null
  if(!month && !day){
    d_input.style.border = 2 + "px solid white";
    setTimeout((findSign) => {
      d_input.style.border = "none";
    }, 300);
    setTimeout((findSign) => {
      d_input.style.border = 2 + "px solid white";
    }, 600);
    setTimeout((findSign) => {
      d_input.style.border = "none";
    }, 900);
    setTimeout((findSign) => {
      d_input.style.border = 2 + "px solid white";
    }, 1200);
    setTimeout((findSign) => {
      d_input.style.border = "none";
    }, 1500);
    return
  }
  else{
    //checking date and displaying zodiac sign info
    checking: if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
      //Aquarius
      z_img.src = "assets/zodiac_imgs/aquarius.png";
      zodiacSign.textContent = "Aquarius (January 20 - February 18)";
      planet.textContent = "Uranus"
      elementColor.textContent = "Blue, Air";
      description.textContent = "Despite the \"aqua\" in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign."
      break checking;
    } else if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
      //Pices
      z_img.src ="assets/zodiac_imgs/pisces.png";
      zodiacSign.textContent = "Pisces (February 19 - March 20)";
      planet.textContent = "Neptune"
      elementColor.textContent = "Sea-Green, Water";
      description.textContent = "Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac and that's because it's the last of the last. As the final sign, Pisces has absorbed every lesson the joys and the pain, the hopes and the fears learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division between fantasy and reality.";
      break checking;
    } else if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) {
      //Aries
      z_img.src ="assets/zodiac_imgs/aries.png";
      zodiacSign.textContent = "Aries (March 21 - April 9)";
      planet.textContent = "Mars"
      elementColor.textContent = "Red, Fire";
      description.textContent = "The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top!";
      break checking;
    } else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) {
      //Taurus
      z_img.src ="assets/zodiac_imgs/taurus.png";
      zodiacSign.textContent = "Taurus (April 20 - May 20)";
      planet.textContent = "Venus"
      elementColor.textContent = "Green, Earth";
      description.textContent = "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.";
      break checking;
    } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
      //Gemini
      z_img.src ="assets/zodiac_imgs/gemini.png";
      zodiacSign.textContent = "Gemini (May 21 - June 20)";
      planet.textContent = "Mercury"
      elementColor.textContent = "Yellow, Air";
      description.textContent = "Geimini are Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.";
      break checking;
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) {
      //Cancer
      z_img.src ="assets/zodiac_imgs/cancer.png";
      zodiacSign.textContent = "Cancer (June 21 - July 22)";
      planet.textContent = "Moon"
      elementColor.textContent = "Silver, Water";
      description.textContent = "Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer's ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But just like the hard-shelled crustaceans this water sign is willing to do whatever it takes to protect itself emotionally.";
      break checking;
    } else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) {
      //Leo
      z_img.src ="assets/zodiac_imgs/leo.png";
      zodiacSign.textContent = "Leo (July 23 - August 22)";
      planet.textContent = "Sun"
      elementColor.textContent = "Orange, Fire";
      description.textContent = "Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate";
      break checking;
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      //Virgo
      z_img.src ="assets/zodiac_imgs/virgo.png";
      zodiacSign.textContent = "Virgo (August 23 - September 22)";
      planet.textContent = "Mercury"
      elementColor.textContent = "Brown, Earth";
      description.textContent = "Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn't afraid to improve skills through diligent and consistent practice.";
      break checking;
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      //Libra
      z_img.src ="assets/zodiac_imgs/libra.png";
      zodiacSign.textContent = "Libra (September 23 - October 22)";
      planet.textContent = "Venus"
      elementColor.textContent = "Pink, Air";
      description.textContent = "Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life especially when it comes to matters of the heart.";
      break checking;
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) {
      //Scorpio
      z_img.src ="assets/zodiac_imgs/scorpio.png";
      zodiacSign.textContent = "Scorpio (October 23 - November 21)";
      planet.textContent = "Mars and Pluto"
      elementColor.textContent = "Black, Water";
      description.textContent = "Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.";
      break checking;
    } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
      //Sagitarrius
      z_img.src ="assets/zodiac_imgs/sagittarius.png";
      zodiacSign.textContent = "Sagittarius (November 22 - December 21)";
      planet.textContent = "Jupiter"
      elementColor.textContent = "Purple, Fire";
      description.textContent = "Sagittarians are the bright, breezy, adorable \"Tiggers\" of the zodiac, all big hugs, bouncy energy and lots of laughs. They have zero filters, which makes them spontaneous, rude, honest, hilarious and challenging.";
      break checking;
    } else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) {
      //Capricorn
      z_img.src ="assets/zodiac_imgs/capricorn.png";
      zodiacSign.textContent = "Capricorn (December 22 - January 19)";
      planet.textContent = "Saturn"
      elementColor.textContent = "Gray, Earth";
      description.textContent = "The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.";
      break checking;
    }
  }


    //Header section Up animation
    headerContent.style.transform = "translate(-50%,-35%)";
    headerContent.style.transition = "all 1s";
    
    //showing reset button & hinding Find Button
    resetBtn.style.opacity = 100 + "%";
    findBtn.style.opacity = 0;
    

    // Zodiac img animation
    setTimeout((findSign) => {
        z_img.style.opacity = 100 + "%";
    }, 1000);
    
    setTimeout((findSign) => {
        z_img.style.transform = "translateX(-165%)";
        z_img.style.transition = "all 1s";

    }, 2000);
    //showing info template
    setTimeout((findSign) => {
        h3_z.style.opacity = 100 + "%";
    }, 3000);
    setTimeout((findSign) => {
        h3_p.style.opacity = 100 + "%";
    }, 3500);
    setTimeout((findSign) => {
        h3_ce.style.opacity = 100 + "%";
    }, 4000);
    setTimeout((findSign) => {
        h3_sd.style.opacity = 100 + "%";
    }, 4500);
   
}// end find button

// start reset button
function reset(){
    location.reload();
}
