<script setup>
import FamilyTreeNode from '@/components/FamilyTreeNode.vue';

const props = defineProps({
    nodes: Object,
    generationIndex: Number,
})

</script>

<template>
    <div class="generation-row">
        <FamilyTreeNode v-for="node in props.nodes" :key="node.name" :generationIndex="generationIndex" :node="node">
        </FamilyTreeNode>
    </div>
</template>