<template>
    <div>
        <h2>Employees</h2>
        <div class="grid-items">
        <simple-card class="m-1"
            v-for="(item,i) in employeesList"
            :key="i"
            :title="item.title"
            :content="item.body"
            :linkUrl="'/employee-details/' + item.id"></simple-card>
        </div>
    </div>
</template>
<script>
import SimpleCard from '../components/SimpleCard.vue';
import axios from 'axios';
export default {
    components: { SimpleCard },
    data () {
        return {
            employeesList: null
        };
    },
    mounted () {
        // axios.get('https://dummy.restapiexample.com/api/v1/employees')
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);
                this.employeesList = response.data;
            });

        // axios
        //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        //     .then(response => (this.info = response.data.bpi))
        //     .catch(error => console.log(error));
    }
};
</script>

  <style scoped>
  .flex{
      display: flex;
  }
  .m-1{
      margin:0.5rem;
  }
  .grid-items{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  </style>
