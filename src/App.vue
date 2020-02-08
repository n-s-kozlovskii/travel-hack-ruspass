<template>
  <v-app>
    <Header text="#MskTravelHack"/>

    <SeasonTrip/>

    <v-content>
      <MapBox/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
import MapBox from './components/MapBox';
import SeasonTrip from "./components/SeasonTrip";

export default {
  name: 'App',

  components: {
    Header,
    MapBox,
    SeasonTrip
  },
  data: () => ({
    //
  }),
};
</script>
