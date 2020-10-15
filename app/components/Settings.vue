<template>
    <Page class="page">
        <ActionBar title="Einstellungen" class="action-bar">
  <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="goBack"/>
        </ActionBar>
        <ScrollView>
            <StackLayout>
                <Button :text="textPicture" class="btn btn-primary"
                    marginTop="20" @tap="takePicture"></Button>
                <Image :src="pictureFromCamera"></Image>
                <Button :text="savePicture" @tap="onButtonTap" />

                <Label :text="name" fontSize="15px" />
                <TextField v-model="textFieldValue" hint="" />
                <Label :text="age" fontSize="15px" />
                <TextField v-model="textFieldValue" hint="" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import * as camera from "nativescript-camera";
    import * as http from "http";
    import App from "./App";

    export default {
        data() {
            return {
                pictureFromCamera: null,
                textPicture: "Bild aufnehmen",
                savePicture: "Bild speichern",
                name: "Name",
                age: "Alter"
                
            };
        },
        methods: {
            onButtonTap() {
                console.log("Button was pressed");
            },
            goBack() {
                this.$navigateTo(App);
            },
            switchChanged(args) {
                console.log("test");
            },
            onSearchSubmit(args) {
                let searchBar = args.object;
                console.log("You are searching for " + searchBar.text);
            },
            takePicture() {
                // See the options at https://github.com/NativeScript/nativescript-camera#using-the-options-to-take-memory-efficient-picture
                // for more information on how to customize the pictures you take.
                console.log(camera);
                camera
                    .takePicture({
                        width: 300,
                        height: 300,
                        keepAspectRatio: true
                    })
                    .then(imageAsset => {
                        this.pictureFromCamera = imageAsset;
                    })
                    .catch(err => {
                        console.log("Error -> " + err.message);
                    });
            }
        }
    };
</script>