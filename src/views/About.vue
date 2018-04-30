<template>
  <div class="uk-card uk-card-default uk-width-1-1@m" id="detail">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div>
          <div class="uk-width-auto text-lead uk-text-center score uk-border-circle"
               v-bind:class="{'uk-alert-success': user_data.score === 'A' , 'uk-alert-warning': user_data.score === 'B', 'uk-alert-danger': user_data.score === 'C' }">
            {{user_data.score}}
          </div>
        </div>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">{{user_data.name}} {{user_data.surName}} {{user_data.lastName}}</h3>
          <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">{{user_data.date}}</time></p>
        </div>
      </div>
    </div>
    <div class="uk-card-body">

      <ul uk-switcher="animation: uk-animation-fade" uk-tab>
        <li><a href="#">Básico</a></li>
        <li><a href="#">Prueba técnica</a></li>
        <li><a href="#">Entrevista personal</a></li>
      </ul>

      <ul class="uk-switcher uk-margin">

        <li>
          <DetailBasics :user="user_data"></DetailBasics>
        </li>

        <li>
          <DetailTechnicalInterview :user="user_data"></DetailTechnicalInterview>
        </li>

        <li>
          <DetailPersonalInterview @personal_Interview="submitPersonalInterview($event)"></DetailPersonalInterview>
        </li>

      </ul>


    </div>

    <div class="uk-modal-footer">
      <div class="" uk-grid>
        <div class="uk-width-2-3">
          <div class="uk-width-1-1 uk-height-large" id="map"></div>
        </div>
        <div class="uk-width-1-3">
          <h5 class="uk-margin-small"><span class="uk-text-muted">CP:</span> {{user_data.cp}}</h5>
          <h5 class="uk-margin-small"><span class="uk-text-muted">Colonia:</span> {{address.neighborhood}}</h5>
          <h5 class="uk-margin-small"><span class="uk-text-muted">Ciudad:</span> {{address.city}}</h5>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import moment from 'moment';
  import {} from '@types/googlemaps';
  import DetailBasics from '@/components/detail-basics.vue';
  import DetailTechnicalInterview from '@/components/detail-technical-interview.vue';
  import DetailPersonalInterview from '@/components/detail-personal-interview.vue';

  @Component({
      components: {
          DetailBasics,
          DetailTechnicalInterview,
          DetailPersonalInterview
      }
  })
  export default class About extends Vue {

      constructor(){
          super();
          moment.locale('es');
      }

      id: string = "";
      user_data: any = {};
      key: string = 'AIzaSyBR166UPVG8dk4kQRn7dI9revtfAz8RqhM';

      location: any = {};
      address: any = {
          neighborhood: "",
          city: ""
      };
      bounds: any = {
          bound_north: "",
          bound_east: "",
          bound_south: "",
          bound_west: ""
      };

      created(){

          this.getId();

      }

      submitPersonalInterview(interview: any){
          console.log("personal", interview);
      }

      getId(){
          let id = this.$route.params.id;
          this.id = id;
          let url = 'https://iron-uber.herokuapp.com/apps/'+id;
          this.fetchData(url);
      }

      fetchData(url: string){
          fetch(url,{
              headers:{"Content-Type":"application/json"}
          })
              .then(response=>{
                  return response.json()
              })
              .then(data => {
                  this.user_data = data;
                  this.user_data.date = moment(Date.parse(data.date)).format('MMMM Do YYYY, h:mm:ss a');
                  this.getLocation(data.cp);
              });
      }

      getLocation(cp:string){
          let test = '09100';
          fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+cp+'+mexico&region=mx&key='+this.key)
              .then(response=> {return response.json()})
              .then(data=>{
                  this.location = data.results;
                  this.address.neighborhood = data.results[0].address_components[1].long_name;
                  this.address.city = data.results[0].address_components[2].long_name;
                  this.drawMap();
              });
      }

      drawMap(){

          let lat = this.location[0].geometry.location.lat,
              lng = this.location[0].geometry.location.lng,
              MapOptions: any = {
                  zoom: 13,
                  center: {lat: lat, lng: lng},
                  mapTypeId: 'roadmap'
              };

          let map = new google.maps.Map(document.getElementById('map'), MapOptions);

          if(this.location[0].geometry.bounds){
              this.bounds.bound_north = this.location[0].geometry.bounds.northeast.lat;
              this.bounds.bound_east = this.location[0].geometry.bounds.northeast.lng;
              this.bounds.bound_south = this.location[0].geometry.bounds.southwest.lat;
              this.bounds.bound_west = this.location[0].geometry.bounds.southwest.lng;
          }else{
              this.bounds.bound_north = this.location[0].geometry.viewport.northeast.lat;
              this.bounds.bound_east = this.location[0].geometry.viewport.northeast.lng;
              this.bounds.bound_south = this.location[0].geometry.viewport.southwest.lat;
              this.bounds.bound_west = this.location[0].geometry.viewport.southwest.lng;
          }

          let rectangle = new google.maps.Rectangle({
              strokeColor: '#00B7FF',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#00B7FF',
              fillOpacity: 0.25,
              map: map,
              bounds: {
                  north: this.bounds.bound_north,
                  south: this.bounds.bound_south,
                  east: this.bounds.bound_east,
                  west: this.bounds.bound_west
              }
          });

      }

  }

</script>

<style>
  #detail .score{
    padding: 5px 15px;
  }
  #detail .text-lead{
    font-size: 1.5rem;
    line-height: 1.5;
  }
</style>
