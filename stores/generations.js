import { reactive } from 'vue';

const state = reactive({
    generations: [
        [
            {
                id: 1,
                name: '...',
                color: 'green',
                active: false,
                generationName: 'You'
            }
        ]
    ]
});

function editItemById(id, newProperties) {
    state.generations.forEach(generation => {
        const item = generation.find(item => item.id === id);
        if (item) {
            Object.assign(item, newProperties);
        }
    });
}

function addItemToGeneration(generationIndex, newItem) {
    if (generationIndex >= 0 && generationIndex < state.generations.length) {
        state.generations[generationIndex].push(newItem);
    } else {
        state.generations.push([newItem]);
    }
}

function getHighestId() {
    let highestId = 0;
    state.generations.forEach(generation => {
        generation.forEach(item => {
            if (item.id > highestId) {
                highestId = item.id;
            }
        });
    });
    return highestId;
}

function getGenerationName(generationIndex, gender) {
    if (generationIndex === 1) {
        return gender === 'male' ? 'Father' : 'Mother';
    } else if (generationIndex === 2) {
        return gender === 'male' ? 'Grandfather' : 'Grandmother';
    } else if (generationIndex >= 3) {
        return gender === 'male' ? 'Great-'.repeat(generationIndex - 2) + 'Grandfather' : 'Great-'.repeat(generationIndex - 2) + 'Grandmother';
    }
}

export default {
    state,
    editItemById,
    addItemToGeneration,
    getHighestId,
    getGenerationName
};
