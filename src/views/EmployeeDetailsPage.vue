<template>
    <div>
        <h3>{{employeeData.title}}</h3>
        <p>{{employeeData.body}}</p>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    props: {
        title: { type: String, default: 'Card Custom Heading' },
        id: { type: String, default: '' },
        content: { type: String, default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit voluptates atque tenetur maiores odit deserunt a placeat ad, iure eveniet similique in officia obcaecati, quasi corrupti. Dolorem, nulla ex!' }
    },
    methods: {
        buttonClicked () {
            alert('button-clicked');
        }
    },
    data () {
        return {
            employeeData: null
        };
    },
    mounted () {
        // axios.get('https://dummy.restapiexample.com/api/v1/employees')
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
            .then(response => {
                console.log(response.data);
                this.employeeData = response.data;
            });

        // axios
        //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        //     .then(response => (this.info = response.data.bpi))
        //     .catch(error => console.log(error));
    }

};

</script>
