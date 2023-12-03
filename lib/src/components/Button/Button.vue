<template>
      <button @click="$event => handleClick">{{ value }}</button>
</template>

<script lang="ts" setup>

export type ButtonProps = {
  value: string
}

defineProps<ButtonProps>()

defineEmits<{
  (event: 'click'): void
}>()

const handleClick = () => {
  console.log('clicked')
}

</script>

<style lang="css">
button {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  margin: 0;
  padding: 6px 12px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
}
</style>