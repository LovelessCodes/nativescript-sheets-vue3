<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'nativescript-vue';
import { showSheet } from '~/helpers/functions';
import Test from '~/components/sheets/Test.vue';
import { DIRECTION } from '~/helpers/constants';

const message = computed(() => {
  return `Blank {N}-Vue app`;
});

function logMessage() {
  console.log('You have tapped the message!');
}

function testSheet(direction: DIRECTION = 'bottom') {
  showSheet(Test, direction);
}
</script>

<template>
  <RootLayout>
    <Frame>
      <Page>
        <ActionBar>
          <Label text="Home" class="font-bold text-lg" />
        </ActionBar>
        <FlexboxLayout flexDirection="column" class="px-4">
          <Label
            row="1"
            class="text-xl align-middle text-center text-gray-500"
            :text="message"
            @tap="logMessage"
          />
          <Button @tap="testSheet()"> Show me a bottom sheet </Button>
          <Button @tap="testSheet('left')"> Show me a left sheet </Button>
          <Button @tap="testSheet('top')"> Show me a top sheet </Button>
          <Button @tap="testSheet('right')"> Show me a right sheet </Button>
        </FlexboxLayout>
      </Page>
    </Frame>
  </RootLayout>
</template>
