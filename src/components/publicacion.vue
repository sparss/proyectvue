<template>
    
        <body>
                
               <button  class="btn btn-success" @click="mostrar_pub()">Ver publicacion </button>
          
             
              <table class="table">

  <thead>
    <th scope="col">usuario</th>
      <th scope="col">comentario</th>
       <th scope="col">Estado</th>
     </thead>
  <tr v-for="publ of publicaciones" >
      <td>{{publ.nomb211}}</td>
      <td>{{publ.comen_recibido}}</td>
      <td>{{publ.estado_re}}</td>
  </tr>
 

  <tbody class="table-group-divider">
  
  </tbody>
</table>

        </body>

</template>

<script>
export default{

        data:()=>{
                return{
                            
                publicaciones:[],   
                comen:'',      
                }
        },
        props:{
                
                estado_re:null,
                comen_recibido:null,
                nomb211:null,
        },
       
        methods:{         
                mostrar_pub(){
this.publicaciones.push({
    nomb211:this.nomb211,
        estado_re:this.estado_re,
comen_recibido: this.comen_recibido,
        
});
   console.log(this.publicaciones);
 
},

        }
}
</script>


