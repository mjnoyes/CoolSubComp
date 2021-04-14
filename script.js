Vue.component('codenames',{
  data:function(){
    return{
      flipped: false
    }
  },
  props: ['name','codename'],
  template: '<div v-on:click="flip"><h3 v-bind:class="{hide:flipped}">{{name}}</h3> <h3 v-bind:class="{hide:!flipped}">{{codename}}</h3></div>',
  methods:{
    flip:function(){
        this.flipped=!this.flipped;
      }
    }
})
var app2 = new Vue({
  el: "#app2",
  data: {
    codenames:[
      {name: "Protagonist", codename: "Joker"},
      {name: "Anne", codename: "Panther"},
      {name: "Ryuji", codename: "Skull"}
    ]
  
}
})
var app = new Vue({
  el: "#app",
  data: {
    nameError: "",
    emailError: "",
    name: "",
    email: "",
    submit: ""
  },

  methods: {
    validate: function () {
      if (this.nameError == null && this.emailError == null) {
        this.submit = "Submitted";
      } else {
        this.submit = "Not Submitted";
      }
    }
  },

  watch: {
    name: function (name) {
      if (this.name.length < 2) {
        this.nameError = "The input needs to have at least 2 characters.";
      } else {
        this.nameError = null;
      }
    },

    email: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(email)) {
        this.emailError = null;
      } else{
        this.emailError="The input needs to be a valid email address."
      }
    }
  }
})