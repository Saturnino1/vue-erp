<template>
    <section class="main-views">
        <header>
            <ul class="filters">
                <li class="filter">All</li>
                <li class="filter">Active</li>
                <li class="filter">Completed</li>
            </ul>
            <span class="filter-selector">[]</span>
        </header>
        <section class="corpo">

            <div class="table-container">
                <slot>

                </slot>
                
            </div>
        </section>
    </section>
</template>



<script>

export default{
    name: 'MainInfo',
    data(){
        return{
            utilizadores: [
                {
                    nome: 'Saturnino Moreira',
                    email: 'saturnino@gmail.com',
                    foto: 'https://www.w3schools.com/howto/img_avatar.png'
                },
                {
                    nome: 'Carlos Landim',  
                    email: 'carlos@gmail.com',
                    foto: 'https://www.w3schools.com/howto/img_avatar2.png'
                },
            ]
        }
    }
}


</script>

<style scoped>
    .main-views{
        height: 100%;
        width: 100%;
        border-radius: 1em;
        /* padding: 0px 1em; */
        overflow-y: auto;
        display: flex;
        gap: 1em;
        /* flex-direction: column; */
        flex-wrap: wrap;
        
    }
    .main-views header{
        width: 100%;
        height: 4em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .2em 1em;
        border-radius: 1em;
        background-color: var(--primary-blue);
        box-shadow: 0px 0px .5em .2em rgba(144, 144, 144, 0.066);
    }
    .main-views header ul{
        width: 100%;
        display: flex;
        padding: .5em;
        gap: .5em;
        
    }
    .main-views header ul li{
        background-color: var(--light);
        padding: .5em;
        border-radius: .5em;
        cursor: pointer;
        min-width: 8em;
    }

    .main-views  .corpo{
        background-color: var(--light);
        box-shadow: 1px 2px 2px 2px #0002;
        width: 100%;
        height: calc(100% - 4em - 1em) ;
        border-radius: 1em;
       
    }


</style>