<template>
  <Page>
    <ActionBar>
      <GridLayout verticalAlignment="top">
        <Button
          text="Settings"
          @tap="goToSettings"
          horizontalAlignment="left"
        />
        <Label
          text="Events"
          style="font-weight: bold"
          horizontalAlignment="center"
        ></Label>

        <Button text="+" @tap="openCreateEvent" horizontalAlignment="right" />
      </GridLayout>
    </ActionBar>

    <ListView  for="event in events" layout="grid"
    itemHeight="200"
    gridSpanCount="2" @itemTap="onItemTap">
      <v-template>
        <StackLayout orientation="horizontal">
          <Image :src="event.eventPicture" width="100" height="100"/>
          <Label :text="event.name" textWrap="true"></Label>
          <Label :text="event.category" textWrap="true"></Label>
          <Label :text="new Date(event.startDate)" textWrap="true"></Label>
          <Label :text="event.user.name" textWrap="true"></Label>
          <Label :text="event.user.age" textWrap="true"></Label>
        </StackLayout>
      </v-template>
    </ListView >
  </Page>
</template>

<script>
import ItemDetails from "./ItemDetails";
import CreateEvent from "./CreateEvent";
import Settings from "./Settings";
import dataProvider from "../src/dataProvider.js";
import { Frame } from 'tns-core-modules/ui/frame';

export default {
  methods: {
    openCreateEvent() {
      this.$navigateTo(CreateEvent);
    },
    goToSettings() {
      console.log("test");
      this.$navigateTo(Settings);
    },
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
  data() {
    return {
      events: dataProvider.getEvents(),
    };
  },
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
