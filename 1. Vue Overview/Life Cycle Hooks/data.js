var app = new Vue({
  el: '#app',
  data: {
    maximum: 99,
    products: null,
  },
  // mounted: function() {
    
  // }
  mounted() {
    fetch('https://hplussport.com/api/products/order/price')
    .then(response => response.json())
    .then(data => {
      this.products = data;
    })
  }
  // Mounted method is when everything is ready and the app is just about to display. Make the api call.
});