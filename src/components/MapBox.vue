<template>
    <div class="map">
        <v-card height="800px" flat>
            <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
        </v-card>
    </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: "pk.eyJ1Ijoia3JsdiIsImEiOiJjajZleXVjc3QwbjZlMzNvNHU5amtxc3diIn0.TGKbFfXD2F-vmNC4dzRLnA",
      mapStyle: 'mapbox://styles/krlv/ck5xx9gj37bl31iqxd2zlnh7q'
    };
  },
  created() {
    this.mapbox = Mapbox;
  }
};
</script>

<style scoped>
.map {
    margin: 5px;
}
</style>