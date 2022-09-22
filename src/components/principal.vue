
<template>
<header>
    <body>
     
        <div id="padre" class="form-floating">
          <div v-if="pag_publicacion===false" >
     <form  v-on:submit.prevent="pag_publicacion=true"> 
  <textarea class="form-control" v-model="comentario" 
  placeholder="Da tu comentario"  id="floatingTextarea2" style="height: 100px"></textarea>
<label   for="">{{resultado}}</label>
<div class="mb-3">
  <label for="formFile" class="form-label"> </label>
 
</div>
<div class="col-auto">
    <label class="visually-hidden" for="autoSizingSelect">Estado:</label>
    <select  v-model="estado_selec" class="form-select" id="autoSizingSelect">
<label   for="">dad</label>
      <option :value="estd" v-for="estd of estados">
        {{estd}}
        </option>
      <br>
    </select>
  </div  >
   <div class="col-auto">
    <button @click="guardar_publicacion(), pag_publicacion=false;"
     type="submit" class="btn btn-primary">Publicar</button>
  </div>
     </form>



 
</div>
   </div>
 </body>
</header>  
          
<publicacion v-if="pag_publicacion===true" :nomb211="nomnre" :comen_recibido="comentario_hno" :estado_re="esto_env"> </publicacion>
   

</template>
<script>
import publicacion from '../components/publicacion.vue';

    export default{
      components:{ 
      publicacion   
     },
   pag_publicacion:publicacion,
    
        data(){
          return {
            pag_publicacion:false,
            comentario:'',
            estados:['Triste 🥲','Feliz 😁','Arto 😒','Emocionado 🤩'],
            estado_selec: 'Feliz 😁',
            publicaciones:[],
            file:'',
            images:null,
            resultado:'',
            numbtohijo:null,
            comentario_hno:null,
            esto_env:null,
            nomnre:null,
          }
           },
           props:{
           nomb:null
          
           },
          methods:{
          guardar_publicacion(){
            this.publicaciones.push({
              comentario: this.comentario,
              estados: this.estado_selec,
             nomb:this.nomb,
            });
            this.comentario_hno=this.comentario;
            this.esto_env=this.estado_selec;
            this.nomnre=this.nomb
            this.comentario='';
            console.log(this.publicaciones);
            console.log(this.nomb);

               this.estado_selec= 'Feliz 😁';
            
   
            
          } 
          
         

            
          }

       
                
 }
</script>