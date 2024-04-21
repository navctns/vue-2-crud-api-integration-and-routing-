<template>
  <div class="card-simple">
    <!-- <div class="top-img"></div> -->
    <h5 class="card-heading">{{title}}</h5>
    <p>{{ content }}</p>
    <button class="btn" @click="buttonClicked">Learn More</button>
  </div>
</template>

<script>
export default {
    props: {
        title: { type: String, default: 'Card Custom Heading' },
        content: { type: String, default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit voluptates atque tenetur maiores odit deserunt a placeat ad, iure eveniet similique in officia obcaecati, quasi corrupti. Dolorem, nulla ex!' },
        linkUrl: { type: String, default: '' }
    },
    methods: {
        buttonClicked () {
            alert('button-clicked');
            this.$router.push(this.linkUrl);
        }
    }

};
</script>

<style scoped>
.card-simple{
    padding: 1rem 0.75rem;
    border:1px solid rgba(128,128,128,0.3);
    border-radius: 0.5rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.top-img{
    max-width: 100%;
    height: 15rem;
    background-image: url('https://images.unsplash.com/photo-1706362723628-60e8f1929ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
}
.btn{
    padding:0.5rem;
    border:1px solid rgba(128,128,128,0.3);
    background-color: rgb(43, 143, 43);
    border-radius: 0.3rem;
    color:#fafafa;
    cursor: pointer;
}
.card-heading{
    font-size: 1.1rem;
    margin-bottom: 1rem;
    margin-top:1rem;
}
</style>
