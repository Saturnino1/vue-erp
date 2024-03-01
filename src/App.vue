<template>
  <main>
    <SideBar />
    <router-view />
  </main>
</template>


<script>
  import Dashboard from './views/dashboard.vue'
  import SideBar from './components/SideBar.vue'
  export default {
    name: 'App',
    components: {
      Dashboard,
      SideBar
    }
  }
</script>

<style>

:root {

  --primary-blue: #007BFF;
  --secondary-blue: #6C757D;
  --terciary-blue: #0d6efd;

  --primary-creme: #F5F5DC;
  --secondary-creme: #EEE8AA;
  --terciary-creme: #F0E68C;

  --primary-black: #000000;
  --secondary-black: #2F4F4F;
  --terciary-black: #696969;

  --dark-2: #fff5;
  --dark-3: #fff3;


  --primary: #bebebe32;
  --secondary: #2828d6e5;

  --grey-light: #b6b8b9;

  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  

}

/*********************** Tabela *********************** */

.table-container{
  padding: 1em;
    height: 100%;
    overflow-y: auto;
    /* display: flex; */
}

table{
  width: 100%;
  border-spacing: 0px .2em;
  /* border-radius: 1em; */
  overflow: hidden;
  }
  
  thead{
    background-color: var(--secondary);
    color: var(--light);
    text-transform: uppercase;
  }
  th{
    padding:  .7em .5em;
    text-align: justify;
  }
 
td{
    padding: .5em;
}

th, td{
  padding-left: .9em;
}


tbody tr{
  background-color: #37535334;
}
  
tbody tr:nth-child(even){
    background-color: #37535364;    
}
  
td:first-child, th:first-child{
    border-radius: .5em 0px 0px .5em;
}

td:last-child, th:last-child{
    border-radius: 0px .5em .5em 0px;
}


/************************************************** */




body{
  height: 100vh;
  width: 100vw;
}


ul{
  list-style: none;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100vw;
}
main{
  background-color: var(--primary);
  display: flex;
  padding-bottom: .5em;
  gap: 1em;
  height: 100%;
  width: 100%;
  padding: .5em;
}


</style>
