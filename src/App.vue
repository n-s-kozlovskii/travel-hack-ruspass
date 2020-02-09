<template>
    <v-app>
        <Header class="header" text="#MskTravelHack"/>

        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-1-3">
                        <div class="row">
                            <Gender/>
                        </div>
                        <div class="row">
                            <SeasonTrip/>
                        </div>
                        <div class="row">
                            <TargetTrips class="row"/>
                        </div>
                    </div>
                    <div class="col-2-3">
                        <v-content>
                            <MapBox/>
                        </v-content>
                    </div>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>

    import Vue from 'vue'
    import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
    import Header from './components/Header';
    import MapBox from './components/MapBox';
    import SeasonTrip from "./components/SeasonTrip";
    import Gender from './components/Gender';
    import TargetTrips from "./components/TargetTrips";

    Vue.use(BootstrapVue)
    Vue.use(IconsPlugin)

    export default {
        name: 'App',

        components: {
            Header,
            MapBox,
            SeasonTrip,
            Gender,
            TargetTrips
        },
        data: () => ({
            //
        }),
    };
</script>

<style>
    @import "./assets/css/styles.css";
</style>