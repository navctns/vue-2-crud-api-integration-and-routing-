<template>
 <div>
   <!-- <h2 class="heading-main">{{headingText}}</h2> -->
  <!-- <the-cards></the-cards> -->
  <router-view></router-view>
  <!-- <the-employees></the-employees> -->
 </div>
</template>

<script>
// import TheCards from './components/TheCards.vue';
// import TheEmployees from './components/TheEmployees.vue';
export default {
    components: {},
    name: 'App',
    data () {
        return {
            headingText: 'This is a heading'
        };
    }
};
</script>

<style scoped>
.heading-main{
  font-size: 1.8rem;
  color:green;
}

</style>
