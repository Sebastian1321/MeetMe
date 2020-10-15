<template lang="html">
    <Page>
        <ActionBar>
            <Label text="Matches"></Label>
        </ActionBar>

         <ListView  for="event in events" layout="grid"
    itemHeight="200"
    gridSpanCount="2" @itemTap="onItemTap">
      <v-template>
        <StackLayout orientation="horizontal">
          <Image :src="event.eventPicture" width="100" height="100"/>
          <Label :text="event.name" textWrap="true"></Label>
          <Label :text="event.category" textWrap="true"></Label>
          <Label :text="event.description" textWrap="true"></Label>
          <Label :text="event.user.name" textWrap="true"></Label>
          <Label :text="event.user.age" textWrap="true"></Label>
        </StackLayout>
       </v-template>
    </ListView >
    </Page>
</template>

<script>
import dataProvider from "../src/dataProvider.js";
import ItemDetails from "./ItemDetails";
import App from "./App";

export default {
  data() {
    return {
      events: dataProvider.getMatches(),
    };
  },
  methods: {
    onItemTap(args) {
      this.$navigateTo(ItemDetails, {
        props: { event: args.item },
        animated: true,
        transition: {
          name: "slide",
          duration: 200,
          curve: "ease",
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
