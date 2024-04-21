<template>
  <div class="flex">
    <simple-card class="m-1"></simple-card>
    <simple-card class="m-1"></simple-card>
    <simple-card class="m-1"></simple-card>
    <simple-card class="m-1"></simple-card>
  </div>
</template>

<script>
import SimpleCard from './SimpleCard.vue';
export default {
    components: { SimpleCard }

};
</script>

<style scoped>
.flex{
    display: flex;
}
.m-1{
    margin:0.5rem;
}
</style>
