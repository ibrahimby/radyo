const Discord = require('discord.js');
const client = new Discord.Client();

const sesKanali = "804706220614221836";
const radyoYayinLinki ="http://45.32.154.169:9300/;";

client.on("ready", async (Byibrahim) => {
  console.log(client.user.tag + " Bot aktif!");
  const kanal = client.channels.cache.get(sesKanali); // eğer v12 kullanıyorsanız .cache eklemeyi unutmayın
  if (kanal && kanal.type === "voice") {
    setTimeout(() => {
      kanal.join().then(baglanti => {
        baglanti.play(radyoYayinLinki);
                  
        console.log("Ses kanalına bağlanıldı!");
      });
    }, 5*1000);
  };
});

/* Kullanabileceğiniz bazı radyo linkleri

   fenomen : "http://fenomen.listenfenomen.com/fenomen/256/icecast.audio",
    kral    : "http://46.20.3.204/",
    kralpop : "http://46.20.3.201/;",
    lovefm    : "http://radioline.fm:8000/",
    metro   : "https://17703.live.streamtheworld.com/METRO_FM.mp3 ",
    maximum  : "http://37.59.205.232:9406/; ",
    superfm : "https://17733.live.streamtheworld.com/SUPER_FM.mp3",
    Joytürk    : "https://17703.live.streamtheworld.com/JOY_TURK2.mp3 ",
    fenomenpop : "http://fenomenoriental.listenfenomen.com/fenomenpop/128/icecast.audio",
    slowtürk:   "http://yayindaslowradyo.net:5050/; ",
    taksimclup: "http://cast1.taksim.fm:8016/; ",
    megafm: "http://46.105.35.48:9346/; ",
    Vokalfm: "http://37.247.98.8/stream/35/ ",
    showpop: "http://46.20.3.229/; ",
    powerakustik: " http://powerturkakustik.listenpowerapp.com/powerturkakustik/mpeg/icecast.audio",
    fenomenrap: "http://fenomenoriental.listenfenomen.com/fenomenrap/128/icecast.audio ",
    fenomentürk: "http://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio  ",
    istanbulfm: " http://45.32.154.169:9300/;",
    powerdance: "http://powerdance.listenpowerapp.com/powerdance/mpeg/icecast.audio ",
    powertürk: "http://mpegpowerturk.listenpowerapp.com/powerturk/mpeg/icecast.audio",
    popularfm: "http://37.59.205.232:9344/; ",
    palslow: " http://shoutcast.radyogrup.com:2020/stream/1;",
    radyopop: "http://80.radyopop.com/stream/1/",
    radyodamar:"http://radyodamarfm.com:8404/; ",
    radyoviva:"http://46.20.3.231/;",
    arabesttürk: "http://91.121.48.78:9328/;",
    türkfm: "http://turkiyemfm.canliyayinda.com:8032/;",
    hitfm: "http://yayin.turkiletisim.com.tr:1094/;",
    hocalarfm: " http://95.173.185.128:9316/;",
    powertürkcover: "http://powerturkcover.listenpowerapp.com/powerturkcover/mpeg/icecast.audio",
    showradyo: "http://windows.showradyo.com.tr/;",
    
    

*/

client.login('ODE0NDU4MzkyMzI3NDg3NDk4.YDeJfA.bPZo1ohnIGy-FvKwGrGpPasd5Cs');



