/* main.js */
const app = Vue.createApp({
  data(){
    return{
      intro: 'Din Pizza Beregner',
      n: 4,                 // antal pizzaer
      size: '16',           // '13' | '16' | '18'
      hydration: 63,        // % vand
      yeastType: 'dry',     // 'dry' | 'fresh' | 'sourdough'
      yeast: {              // faste værdier for hævemiddel
        fresh: 0.0025,      // 0,25% frisk gær
        dry: 0.001,         // 0,10% tørgær
        sourdough: 0.15     // 150 g pr. 1000 g mel = 15%
      },
      activeTab: 'calc',   // ← NY: styrer faner
    }
  },
  computed:{
    ballWeight(){
      const map = { '13': 260, '16': 340, '18': 500 };
      return map[this.size] || 260;
    },
    totalDough(){ return this.n * this.ballWeight; },
    h(){ return this.hydration / 100; },
    saltRate(){ return 0.03; }, // 30 g pr. kg mel
    yeastRate(){
      return this.yeast[this.yeastType] || 0;
    },
    flour(){ return this.totalDough / (1 + this.h + this.saltRate); },
    water(){ return this.flour * this.h; },
    saltG(){ return this.flour * this.saltRate; },
    yeastG(){ return this.flour * this.yeastRate; },
  }
});

// Mount app
app.mount('#app');
