<template>
    <aside>
        <section class="user-info">
            <img :src="utilizador.foto" alt="Foto do utilizador">
            <h2> <i class="fa-solid fa-users"></i> {{ utilizador.nome }}</h2>
        </section>
        <nav>
            <ul>
                <li><router-link to="/" active-class="active" ><font-awesome-icon  icon="icon-dashboard" /> Dashboard</router-link></li>
                <li><router-link to="/utilizador" active-class="active" >  <font-awesome-icon icon="user-secret" /> Utilizador</router-link></li>
                <li><router-link to="/cliente" active-class="active" >Clientes</router-link></li>
            </ul>
        </nav>
    </aside>
</template>

<script>

export default{
    name: 'SideBar',
    data(){
        return{
            utilizador: {
                nome: 'Saturnino Moreira',
                email: 'saturnino@gmail.com',
                foto: 'https://www.w3schools.com/howto/img_avatar.png',
                
            }
        }
    }
}
</script>

<style scoped>

aside{
    /* background-color: var(--primary-blue); */
    /* color: var(--light); */

    background-color: #222;
    color: #fff9;

    height: 100%;
    width: 20%;
    border-radius: 1em;
    padding: 1em;
}

aside .user-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5em;
    padding: .5em;
    border-bottom: 2px dotted var(--light);
    margin-bottom: 1em;
}

aside .user-info img{
    width: 5em;
    height: 5em;
    border-radius: 50%;
}

aside .user-info h2{
    font-size: 10pt;
}

aside nav{
    display: flex;
}

aside nav ul{
    list-style: none;
    /* padding: 1em; */
    display: flex;
    flex-direction: column;
    gap: .3em;
    width: 100%;
    
}

aside nav ul li{
    cursor: pointer;
    transition: 0.3s;
    width: 100%;
    font-weight: bold;
    
    display: flex;
    
}


aside nav ul li a{
    border: 1px solid transparent;
    border-radius: .5em;
    padding: .5em;
    padding-left: 1em;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: var(--light);
}
aside nav ul li a:hover{
    /* background-color: #fff2; */
    border: 1px solid #fff3;
    color: #fff8;
}

aside nav ul .active {
    background-color: var(--dark-3);
    color: #fff9;
}

</style>