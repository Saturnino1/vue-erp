<template>
    <!-- <main> -->
        <MainInfo >
            <h2>Gestao  de Utilizadores</h2>
            <Tabela :tableData = "tableData" />
        </MainInfo>
    <!-- </main> -->
</template>

<script>
    import MainInfo from '../components/MainInfo.vue'
    import Tabela from '../components/tabela.vue'
    export default {
        name: 'Utilizador',
        components: {
            MainInfo,
            Tabela
        },
        data() {
            return {
                tableData:{
                    headers: ['id', 'username', 'password','data'],
                    content: [
                            ['1','saturninok3', 'pass123','12-01-2003'],
                            ['2','johnM', 'pass123','12-01-2003'],
                            ['3','line33', 'pass123','12-01-2003'],
                        ]
                }
            }
        },
    }
    
</script>

<style scoped>
   
</style>