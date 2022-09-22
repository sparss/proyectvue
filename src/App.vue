<script setup>

</script>

<template>
  <header>
  <body>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
 integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

 <div v-if="ver_principal===false" >
  <form v-on:submit.prevent="ver_principal=true" > 
    <div class="cn_imputs_forms" >
  <div class="mb-3">
    <label  for="exampleInputEmail1"  class="form-label">Correo electronico</label>
    <input  type="email" v-model="usuario" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text"></div>
  </div>
  <p>{{usuario}}</p>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
  </div>

  <button   @click="enviarpro(), ver_principal=false;" type="submit" 
  class="btn btn-primary" >Iniciar sesion</button>
  </div>
</form>   
</div>
<publicacion  v-if="ver_pag2===true" :nomb211="dato"> </publicacion>
<principal v-if="ver_principal===true" :nomb="dato" > </principal> 

  </body>
  </header>
  
</template>

<script>
import principal from "./components/principal.vue";
import publicacion from "./components/publicacion.vue"

 export default{
   name:"App",
   components:{principal,publicacion},
      
  pag_principal:principal,
     data(){
       return {
         ver_principal:false,
         ver_pag2:false,
    usuario:'',
    password:'',
    usuarios:[],
  
    dato:'',
       };
     },
     methods:{
      enviarpro()  {
        this.usuarios.push({
                  usuario:this.usuario,
                  pasword:this.password,  
                     
          });
       this.dato=this.usuario;
       this.usuarios="";
       this.password="";
            console.log(this.usuarios)
            console.log(this.usuario)   
              this.dato=this.usuario;
      
      },
           
     
       },
      
     }
</script>
