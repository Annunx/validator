<script setup>
import { numbers } from "./data/number.js";
import { ids } from "./data/ids.js";


const list = [
    {
        label: '数字验证器',
        list: numbers
    },
    {
        label: '身份证验证器',
        list: ids
    }
]
</script>

<template>
    <div class="container-full">
        <div class="container">
            <div class="card overflow-hidden mb-4" v-for="item in list" :key="item.label">
                <div class="card-header">
                    {{ item.label }}
                </div>
                <table class="table" style="margin: 0">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">输入</th>
                            <th scope="col">输出</th>
                            <th scope="col">输出(带信息)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(iitem, index) in item.list">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ iitem.label }}</td>
                            <td>{{ iitem.value }}</td>
                            <td>{{ iitem.result }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<style scoped></style>
