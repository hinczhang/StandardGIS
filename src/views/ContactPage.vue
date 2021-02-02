<template>
    <div>
        <navigation-bar style="position:fixed;width:100%;z-index:100" v-bind:tempIndex="'5'"></navigation-bar>
        <cv-card style="top:100px;position:relative"></cv-card>
        <contact-card style="margin-top:120px"></contact-card>
        <address-card style="margin-top:20px"></address-card>
    </div>
</template>

<script>
import ContactCard from '../components/ContactPage/ContactCard'
import AddressCard from '../components/ContactPage/AddressCard'
import CvCard from '../components/ContactPage/CVCard'
import NavigationBar from '../components/NavigationBar'
export default {
    components:{
        ContactCard, AddressCard, NavigationBar, CvCard
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>