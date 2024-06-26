<script setup>
import FamilyTreeGeneration from '@/components/FamilyTreeGeneration.vue';
import state from '../../stores/generations';

</script>

<template>
    <main>
        <FamilyTreeGeneration v-for="(generation, index) in state.state.generations" :key="index" :nodes="generation"
            :generationIndex="index" />
    </main>
</template>

<style>
* {
    padding: 0;
    margin: 0;
    font-family: 'Arial', sans-serif;
}

main {
    margin: auto 0;
    height: 90vh;
    display: flex;
    flex-direction: column-reverse;
}

.generation-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.node-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 9rem;

    p {
        width: 9rem;
        word-wrap: normal;
        overflow: visible;
        text-align: center;
    }

    span {
        font-size: 1rem;
        color: #aaa
    }
}

.node {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    opacity: 30%;
}

.green {
    background-color: lime;
}

.blue {
    background-color: lightblue;
}

.yellow {
    background-color: yellow;
}

.node.active {
    opacity: 100%;
}
</style>