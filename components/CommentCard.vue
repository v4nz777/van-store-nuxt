<template>
    <div class="flex gap-2 items-end">
        <div class="flex gap-2 items-end">
            <div class=" bg-white rounded-full w-8 h-8 object-contain overflow-hidden">
                <img src="/you.png" class="w-full h-full" alt="">
            </div>
            <p class="font-bold align-text-bottom">{{ comment.from }} <span class="font-thin">(You)</span></p>:
        </div>
        <div class="convo-radius-them bg-white p-2 shadow-md">
            {{ comment.comment }}
        </div>
    </div>
</template>

<script setup lang="ts">
    const { comment } = defineProps(["comment"])
</script>

<style scoped>

</style>