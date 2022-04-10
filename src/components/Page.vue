<template>
    <div >
        <div v-for="(api, index) in allList" :key="index">
        <!-- <img :src="api.urlToImage" alt="" width="50%"> 
        <h1 class="mt-4">{{allList[0].title}}</h1>

        <div class="identity">
            <h6 class="author mt-2">{{allList[0].author}}</h6>
            <h6 class="time">{{allList[0].publishedAt}}</h6>
        </div>

        <div class="description mt-4">
            <p>{{allList[0].content}}</p>
            <p>Lanjutkan Baca ke <a :href="allList[0].url">Sini</a></p>
            <router-link to="/api" class="tombolKembali"><button>kembali</button></router-link>
        </div> -->

        <v-card
            class="mx-auto mb-5 mt-4"
            max-width="800"
        >
            <v-img
            class="white--text align-end"
            height="300px"
            :src="api.urlToImage"
            >
            </v-img>
            <v-card-title>{{api.title}}</v-card-title>


            <v-card-text class="text--primary">
            
            <div>{{api.content}}</div>
            </v-card-text>

            <v-card-actions>
                
                <!-- techCrunch -->
                <v-row class="d-flex justify-content-between px-4 py-4" justify="space-between">
                    <v-btn
                    class="order-1 "
                    color="secondary"
                    rounded
                    dark>
                    {{api.source.name}}
                    </v-btn>

                    <!-- icon sosial media -->
                    <div class="text-justify d-flex align-center order-2 order-sm-2 mb-3 mb-sm-0"> 
                    <v-tooltip bottom> 
                        <template v-slot:activator="{ on, attrs }"> 
                        <a href="www.redditmedia.com"> 
                            <v-icon 
                            color="#FF4500" 
                            dark 
                            v-bind="attrs" 
                            v-on="on" 
                            >mdi-reddit 
                            </v-icon> 
                        </a> 
                        </template> 
                        <span>Reddit</span> 
                    </v-tooltip> 
        
                    <v-tooltip bottom> 
                        <template v-slot:activator="{ on, attrs }"> 
                        <a href="https://twitter.com/twitter"> 
                            <v-icon 
                            color="info" 
                            dark 
                            v-bind="attrs" 
                            v-on="on" 
                            > 
                            mdi-twitter 
                            </v-icon> 
                        </a> 
                        </template> 
                        <span>Twitter</span> 
                    </v-tooltip> 
                    
                    <v-tooltip bottom> 
                        <template v-slot:activator="{ on, attrs }"> 
                        <a href="https://id-id.facebook.com/"> 
                            <v-icon 
                            color="primary" 
                            dark 
                            v-bind="attrs" 
                            v-on="on" 
                            > 
                            mdi-facebook 
                            </v-icon> 
                        </a> 
                        </template> 
                        <span>Facebook</span> 
                    </v-tooltip> 
        
                    <v-tooltip bottom> 
                        <template v-slot:activator="{ on, attrs }"> 
                        <a href="https://myaccount.google.com/profile"> 
                            <v-icon 
                            color="red" 
                            dark 
                            v-bind="attrs" 
                            v-on="on" 
                            > 
                            mdi-google-plus 
                            </v-icon> 
                        </a> 
                        </template> 
                        <span>Google+</span> 
                    </v-tooltip> 
        
                    <v-tooltip bottom> 
                        <template v-slot:activator="{ on, attrs }"> 
                        <a href="https://www.linkedin.com/"> 
                            <v-icon 
                            color="blue" 
                            dark 
                            v-bind="attrs" 
                            v-on="on" 
                            >mdi-linkedin</v-icon> 
                        </a> 
                        </template> 
                        <span>Lingked In</span> 
                    </v-tooltip> 
                    </div>

                    <!-- Read more -->
                    <v-btn
                        class="order-3"
                        color="primary"  
                    >
                        Read more
                    </v-btn>
                </v-row>
                
            </v-card-actions>
        </v-card>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'apiPath',
    computed: {
        allList(){
            return this.$store.state.api.list;
        },
        index(){
            return this.$route.params.id.slice(2)

        }
    },
    methods:{
    fetchApi(){
        this.$store.dispatch("api/fetchList");
        }
    },
    mounted(){
        this.fetchApi();
    },
}
</script>

<style scoped>
h6{
    color: gray;
}
a {
  text-decoration: none;
  margin: 0 5px;
}

</style>