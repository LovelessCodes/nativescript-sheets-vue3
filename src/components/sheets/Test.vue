<script lang="ts" setup>
import { DIRECTION } from '~/helpers/constants';
import { computed } from 'nativescript-vue';

const props = defineProps({
  direction: DIRECTION,
});

const tailwindDirections = {
  bottom: 'align-bottom rounded-t-lg',
  top: 'align-top rounded-b-lg',
  right: 'align-right rounded-l-lg w-8/12',
  left: 'align-left rounded-r-lg w-8/12',
};
</script>

<template>
  <GridLayout
    :class="`${
      tailwindDirections[props.direction]
    } p-8 bg-white text-black`"
  >
    <StackLayout>
      <Label
        class="text-lg text-center font-bold pb-4 mb-4 border-b border-accent"
        :text="`This is a ${props.direction} sheet!`"
      />
      <Label
        class="text-center"
        :textWrap="true"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis magni a quae magnam ullam, id voluptates quisquam dolorem quas omnis earum ducimus eum tenetur! Commodi rem nobis delectus cum accusamus."
      />
    </StackLayout>
  </GridLayout>
</template>

<style>
.align-right {
  horizontal-align: right;
}
.align-left {
  horizontal-align: left;
}
</style>
