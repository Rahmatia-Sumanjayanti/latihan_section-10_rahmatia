<template>
    <!-- <div>
        <div v-for="(api, index) in allList" :key="index">
     
                <div> author:{{api.source.id}}</div> <br>
                <div> content: {{api.source.name}}</div> 
        </div>
    </div> -->
   
    <div class="container mx-auto mt-4">
        <div class="row">
            <div class="col-md-4" v-for="(api, index) in allList" :key="index">
                <router-link :to="'/nextpage/id'+index">
                <div class="card" style="width: 18rem;">
                <img :src="api.urlToImage" class="card-img-top" alt="...">
                    
                    <div class="card-body">
                        <h5 class="card-title">{{ api.title }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted mt-2">{{api.author}}</h6>
                        <p class="card-subtitle mb-2 text-muted">{{api.publishedAt}}</p>
                        
                        <button type="button" class="btn btn-secondary mt-2" @click="readMore(index)">View All</button>
                    </div>
                </div>
                </router-link>
            </div>       
        </div>    
    </div>

</template>

<script>
export default {
    name: 'Api',
    computed: {
        allList(){
            return this.$store.state.api.list;
        }

    },
    methods:{
        fetchApi(){
            this.$store.dispatch("api/fetchList");
        },
        readMore(index){
            this.$router.push({name:'NextPage', param:{id: index}});
        },
    },
    mounted(){
        this.fetchApi();
    },
}
</script>

<style scoped>

.card {
    width: 444px
}

body {
    background: #eee
}
:root {
  --gradient: linear-gradient(to left top, #DD2476 10%, #FF512F 90%) !important;
}

body {
  background: #111 !important;
}

.card {
  background: #222;
  border: 1px solid #dd2476;
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
}

button{
    width: 200px;
}
</style>