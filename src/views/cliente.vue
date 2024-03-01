<template>
    <!-- <main> -->
        <MainInfo >
            <h2>Gestao  de clientes</h2>
            <Tabela :tableData="tableData" />
        </MainInfo>
        
    <!-- </main> -->
</template>

<script>
    import MainInfo from '../components/MainInfo.vue'
    import Tabela from '../components/tabela.vue'

    export default {
        name: 'Cliente',
        data() {
            return {
                tableData:{
                    headers: ['id', 'nome', 'telefone','data'],
                    content: [
                            ['1','saturnino', 9235432,'12-01-2012'],
                            ['2','john Brandon', 2232492 ,'12-0s-2003'],
                            ['3','saturnino', 5354352,'04-11-2022'],
                            ['1','saturnino', 9235432,'12-01-2012'],
                            ['2','john Brandon', 2232492 ,'12-0s-2003'],
                            ['3','saturnino', 5354352,'04-11-2022'],
                            ['1','saturnino', 9235432,'12-01-2012'],
                            ['2','john Brandon', 2232492 ,'12-0s-2003'],
                            ['3','saturnino', 5354352,'04-11-2022'],
                            ['1','saturnino', 9235432,'12-01-2012'],
                            ['2','john Brandon', 2232492 ,'12-0s-2003'],
                            ['3','saturnino', 5354352,'04-11-2022'],
                            ['1','saturnino', 9235432,'12-01-2012'],
                            ['2','john Brandon', 2232492 ,'12-0s-2003'],
                            ['3','saturnino', 5354352,'04-11-2022'],
                            ['1','saturnino', 9235432,'12-01-2012'],
                            ['2','john Brandon', 2232492 ,'12-0s-2003'],
                            ['3','saturnino', 5354352,'04-11-2022'],
                            ['1','saturnino', 9235432,'12-01-2012'],
                            ['2','john Brandon', 2232492 ,'12-0s-2003'],
                            ['3','saturnino', 5354352,'04-11-2022'],
                            ['1','saturnino', 9235432,'12-01-2012'],
                            ['2','john Brandon', 2232492 ,'12-0s-2003'],
                            ['3','saturnino', 5354352,'04-11-2022'],
                            ['1','saturnino', 9235432,'12-01-2012'],
                            ['2','john Brandon', 2232492 ,'12-0s-2003'],
                            ['3','saturnino', 5354352,'04-11-2022'],
                        ]
                }
            }
        },
        components: {
            MainInfo,
            Tabela
        }
    }
    
</script>

<style scoped>
    main{
        background-color: var(--primary);
        display: flex;
        gap: 1em;
        height: 100%;
        width: 100%;
        padding: 1em;
    }
    .main-views{
        
    }
</style>