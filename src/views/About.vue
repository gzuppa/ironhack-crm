<template>
  <div class="uk-card uk-card-default uk-width-1-1@m">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div>
          <div class="uk-width-auto text-lead uk-text-center score uk-border-circle"
               v-bind:class="{'uk-alert-success': user.score === 'A' , 'uk-alert-warning': user.score === 'B', 'uk-alert-danger': user.score === 'C' }">
            {{user.score}}
          </div>
        </div>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">{{user.name}} {{user.surName}} {{user.lastName}}</h3>
          <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">{{user.date}}</time></p>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <div class="uk-flex uk-flex-around">
        <div>Datos de contacto: </div>
        <div>Email: {{user.email}}</div>
        <div>Tel: {{user.tel}}</div>
      </div>
      <h5><span class="uk-text-muted">Aplicó para:</span> {{user.course}}</h5>
      <p><span class="uk-text-muted">Razón:</span> {{user.why}}</p>
      <p><span class="uk-text-muted">Objetivo:</span> {{user.objectives}}</p>
      <p><span class="uk-text-muted">Skills:</span> {{user.skills}}</p>
    </div>
    <div class="uk-card-footer">
      <div class="" uk-grid>
        <div class="uk-width-2-3">
          <div class="uk-width-1-1 uk-height-large" id="map"></div>
        </div>
        <div class="uk-width-1-3">
          <h5 class="uk-margin-small"><span class="uk-text-muted">CP:</span> {{user.cp}}</h5>
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

  @Component({})
  export default class About extends Vue {



      key: string = 'AIzaSyBR166UPVG8dk4kQRn7dI9revtfAz8RqhM';
      id: string = "";
      user: any = {};
      location: any = {};
      address: any = {
          neighborhood: "",
          city: ""
      };

      created(){

          this.getId();
        /*let googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBR166UPVG8dk4kQRn7dI9revtfAz8RqhM';

          if (!document.querySelectorAll(`[src="${googleMapsUrl}"]`).length) {
              document.body.appendChild(Object.assign(
                  document.createElement('script'), {
                      type: 'text/javascript',
                      src: googleMapsUrl,
                      onload: () => this.drawMap()
                  }));
          } else {
              this.drawMap();
          }*/

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
                  console.log(data);
                  this.user = data;
                  this.user.date = moment(data.date).format('MMMM Do YYYY, h:mm:ss a');
                  this.getLocation(data.cp);
              });
      }

      getLocation(cp:string){
          let test = '09100';
          fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+cp+'+mexico&region=mx&key='+this.key)
              .then(response=> {return response.json()})
              .then(data=>{
                  console.log(data);
                  this.location = data.results;
                  this.address.neighborhood = data.results[0].address_components[1].long_name;
                  this.address.city = data.results[0].address_components[2].long_name;
                  this.drawMap();
              });
      }

      drawMap(){

          let lat = this.location[0].geometry.location.lat,
              lng = this.location[0].geometry.location.lng,
              bound_north = this.location[0].geometry.bounds.northeast.lat,
              bound_east = this.location[0].geometry.bounds.northeast.lng,
              bound_south = this.location[0].geometry.bounds.southwest.lat,
              bound_west = this.location[0].geometry.bounds.southwest.lng,
              MapOptions: any = {
                  zoom: 13,
                  center: {lat: lat, lng: lng},
                  mapTypeId: 'roadmap'
              };

          let map = new google.maps.Map(document.getElementById('map'), MapOptions);

          let rectangle = new google.maps.Rectangle({
              strokeColor: '#00B7FF',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#00B7FF',
              fillOpacity: 0.25,
              map: map,
              bounds: {
                  north: bound_north,
                  south: bound_south,
                  east: bound_east,
                  west: bound_west
              }
          });

      }

  }

</script>
