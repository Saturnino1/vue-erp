<template>
    <!-- <main> -->
        <MainInfo >
            <div>Welcome Back, sr.</div>
        </MainInfo>
    <!-- </main> -->
</template>

<script>
    import MainInfo from '../components/MainInfo.vue'

    export default {
        name: 'Dashboard',
        
        components: {
            MainInfo
        }
    }
    
</script>

<style scoped>

    div{
        /* background-color: rgba(176, 106, 0, 0.697);
        box-shadow: 0px 0px 5px 5px #0003; */
        border-radius: .5em;

        display: flex;
        justify-content: center;
        padding-top: 5em;
        font-weight: bold;
        font-size: 30pt;
        text-shadow: 3px 2px 2px #0005;
        color: #222;
        font-family: monospace;
        height: 100%;

    }

    main{
        /* background-color: var(--primary); */
        display: flex;
        gap: 1em;
        height: 100%;
        width: 100%;
        padding: 1em;
    }
    
</style>