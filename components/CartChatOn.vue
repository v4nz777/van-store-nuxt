<template>
    <div class="p-1 flex items-end gap-4 w-full">
        <Icon name="mynaui:cart" color="purple" size="24px"/>
        <div class="w-max flex gap-1 h-full items-end" v-if="!chatOn">
            <div class="animate-[bounce_1s_ease-in-out_infinite] h-2 w-2 rounded-full bg-gray-500"></div>
            <div class="animate-[bounce_2s_ease-in-out_infinite] h-2 w-2 rounded-full bg-gray-500"></div>
            <div class="animate-[bounce_1s_ease-in-out_infinite] h-2 w-2 rounded-full bg-gray-500"></div>
        </div>
        <div class="bg-white h-max w-max shadow-lg p-5 convo-radius-them" v-else>
            <slot></slot>
        
        </div>
    </div>
</template>

<script setup lang="ts">
    const { chatOn } = defineProps(['chatOn'])
    const { $anime } = useNuxtApp()


</script>

<style scoped>

</style>