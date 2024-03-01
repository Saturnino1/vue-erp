<template>
    <div>
        
        <table>
            <thead>
                <tr>
                    <th v-for = "(header,index) in tableData.headers" :key="index">
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(fields,index) in tableData.content" :key="index">
                    <td v-for="(content,index) in fields" :key="index">
                        {{ content }}
                    </td>
                </tr>    
            </tbody>
        </table>
    </div>
</template>


<script>

export default {

    name: "Tabela",
    
    props:{
        tableData: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>