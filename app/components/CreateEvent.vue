<template>
  <Page>
    <ActionBar title="Event Erstellen">
      <NavigationButton
        text="Go Back"
        android.systemIcon="ic_menu_back"
        @tap="goBack"
      />
    </ActionBar>
    <ScrollView>
      <StackLayout class="home-panel">
        <GridLayout columns="auto, *, auto" rows="auto, auto">
          <Label text=" Beschreibung" fontSize="15px" />
          <TextField v-model="description" hint="" />
        </GridLayout>

        <GridLayout columns="auto, *, auto" rows="auto, 2" marginTop="25px">
          <Label text="Datum" fontSize="15px" col="0" row="0" />
          <DatePicker
            :year="currentYear"
            :month="currentMonth"
            :day="currentDay"
            minDate="1970-01-01"
            maxDate="2100-12-31"
          />
        </GridLayout>
        <GridLayout columns="auto, *, auto" rows="auto, 2" marginTop="25px">
          <Label text="Uhrzeit" fontSize="15px" />
          <TimePicker :hour="currentHour" :minute="currentMinute" />
          <ActivityIndicator :busy="isBusy" />
        </GridLayout>
        <ListPicker
          :items="listPickerCategory"
          v-model="selectedListPickerIndex"
        />
        <Button text="Speichern" @tap="submitEvent" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import App from "./App";
const geoLocation = require("nativescript-geolocation");
import dataProvider from "../src/dataProvider.js";

export default {
  methods: {
    goBack() {
      this.$navigateTo(App);
    },
    enableLocationServices() {
      geoLocation.isEnabled().then((enabled) => {
        if (!enabled) {
          geoLocation.enableLocationRequest();
        }
      });
    },

    switchChanged(args) {
      console.log("test");
    },
    async submitEvent(args) {
      await this.enableLocationServices();
      dataProvider.addEvent(this.$data).then(() => {
      goBack();
      });
    },
  },

  data() {
    return {
      listPickerCategory: ["Party", "Essen", "Kino", "Netflix and Chill"],
      selectedListPickerIndex: 0,

      description: "",
      currentDay: new Date().getUTCDate(),
      currentMonth: new Date().getUTCMonth() + 1,
      currentYear: new Date().getUTCFullYear(),

      currentHour: new Date().getHours(),
      currentMinute: new Date().getMinutes(),

      currentGeoLocation: {
        latitude: null,
        longitude: null,
        altitude: null,
        direction: null,
      },
    };
  },
};
</script>
