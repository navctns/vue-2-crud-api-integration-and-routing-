<template>
  <div class="card-main">
     <div class="top-img">
     </div>
     <div class="top-tags">
        <slot name="top-left"><span>{{readTime}} Mins Read</span></slot>
        <slot name="top-right"><span class="categ-tag">{{categ}}</span></slot>
     </div>
     <div>
        <h5 class="card-heading">{{title}}</h5>
        <p>
            {{ content }}
        </p>
     </div>
     <div>
        <slot name="footer"></slot>
     </div>
  </div>
</template>

<script>
export default {
    name: 'ArticleCard',
    props: {
        title: { type: String, default: 'Title Text' },
        content: { type: String, default: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur modi doloribus hic vitae eligendi labore, deserunt enim illum atque cumque voluptas. Harum officia iste earum veritatis non maiores porro vero.' },
        categ: { type: String, default: 'Category' },
        readTime: { type: String, default: '5' }
    }
};
</script>

<style scoped>
.img-fluid{
    max-width: 100%;
    height: auto;
}
.top-img{
    position: relative;
    width:100%;
    height: 10rem;
    background-image: url('https://images.unsplash.com/photo-1706043903564-114bc58354ac?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
}
.card-heading{
    margin-top:0;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}
.top-tags{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0.5rem 0.5rem 0.5rem 0;
}
.card-main{
    padding:0.75rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 0.5rem;
}
.categ-tag{
  padding:0.2rem 0.5rem;
  background-color: lightblue;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}
</style>
