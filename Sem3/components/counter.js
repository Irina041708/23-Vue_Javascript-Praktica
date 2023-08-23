const Counter = {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    minus() {
      this.counter--;
    },
  },
  template: `
  <div>
    <h2>{{counter}}</h2>
    <button @click="add">count++</button>
    <button @click="minus">count--</button>
  </div>
  `,
};
