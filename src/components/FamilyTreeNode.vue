<script setup>
import state from '../../stores/generations';
import { ref } from 'vue';

let showForm = ref(false);

defineProps({
    node: Object,
    generationIndex: Number
})

function nameChange(id, generation, firstname, lastname) {
    state.editItemById(id, { name: `${firstname} ${lastname}`, active: true });

    state.addItemToGeneration(generation + 1, {
        id: state.getHighestId() + 1,
        name: "...",
        color: "yellow",
        active: false,
        generationName: state.getGenerationName(generation + 1, 'female')
    });

    state.addItemToGeneration(generation + 1, {
        id: state.getHighestId() + 1,
        name: "...",
        color: "blue",
        active: false,
        generationName: state.getGenerationName(generation + 1, 'male')
    })
}

</script>

<template>
    <div class="node-container" @click="node.active ? '' : showForm = true">
        <div class="node" :class="{ 'active': node.active, [node.color]: true }"></div>
        <p>{{ node.name }}</p>
        <span>{{ node.generationName }}</span>
    </div>
    <form @submit.prevent="nameChange(node.id, generationIndex, firstname, lastname)" v-show="showForm" class="form">
        <label for="firstname">Firstname</label>
        <input type="text" v-model="firstname">
        <label for="lastname">Lastname</label>
        <input type="text" v-model="lastname">
        <button type="submit">submit</button>
    </form>
</template>

<style>
.form {
    position: absolute;
    background-color: lightblue;
    border-radius: 2rem;
    border: solid 1px black;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.25rem;
    z-index: 30;
}
</style>