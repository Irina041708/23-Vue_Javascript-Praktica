const Sort = {
  data() {
    return {
      goods: [
        {
          id: 1,
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 10,
          img: "img/product_img_img 1.jpg",
        },
        {
          id: 2,
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 20,
          img: "img/product_img_img 1.jpg",
        },
        {
          id: 3,
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 40,
          img: "img/product_img_img 3.jpg",
        },
        {
          id: 4,
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 50,
          img: "img/product_img_img 4.jpg",
        },
        {
          id: 5,
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 180,
          img: "img/product_img_img 5.jpg",
        },
        {
          id: 6,
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 70,
          img: "img/product_img_img 6.jpg",
        },
      ],
    };
  },
  methods: {
    sortUp() {
      this.goods.sort((a, b) => a.price - b.price);
    },
    sortDown() {
        this.goods.sort((a, b) => b.price - a.price);
      },
  },
  template: `
    <section class="center content section3 ">   
        <button @click="sortUp">sortUp</button>
        <button @click="sortDown">sortDown</button>
      <div class="product-box"> 
          <figure class="product" v-for="good in goods" :key="good.id">
              <a href="#" class="product__img">
                  <img class="product__img__img1" :src="good.img" alt="product">
              </a>
              <div class="product__content">
                  <figcaption class="product__content__padding">
                      <a href="#" class="product__content__name">{{good.title}}</a>
                      <p class="product__content__text">{{good.text}}</p>
                      <p class="product__content__price">{{good.price}}</p> 
                  </figcaption>  
              </div>
          </figure>    
      </div>  
  </section>
    `,
};
