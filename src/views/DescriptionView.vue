<template>
    <div class="description">
        <textWithImage 
        mainTitle="'MainTitle'" 
        subTitle="'SubTitle'"
        :textContent="[
            'text1',
            'text2'
        ]"
        ></textWithImage>
    </div>
</template>

<script setup>
import textWithImage from "@/components/text-with-image.vue"

</script>