<script lang="ts" setup>
import { defineProps, inject } from 'vue';

type Props = {
    name: string;
};

type EmitEvents = {
    (event: 'greet'): void;
};

const props = defineProps<Props>();

var appName = inject('appName', 'Default App');

defineEmits<EmitEvents>();
</script>

<template>
    <div>
        <b>App name: {{ appName }}</b>
        <p>Hello {{ props.name }}</p>
        <button @click="$emit('greet')">Greet</button>
    </div>
</template>
