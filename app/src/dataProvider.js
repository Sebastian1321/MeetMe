const fileSystemModule = require("tns-core-modules/file-system");
const model = require("./../src/model/ContentItem");
const imageSourceModule = require("tns-core-modules/image-source");
const data = require("./data.json");
const user = require("./user.json");
//const fs = require('fs');

function getEvents() {
    return fillContentItem(false)
}

function getMatches() {
    return fillContentItem(true)
}

function fillContentItem(matched) {
    var listContentItem = []
    var ContentItem;
    data.forEach(element => {
        var pictures = new model.eventPictures();
        element.user.pictures.forEach(picture => {
            pictures.addPicture(new model.picture(picture))
        });
        var appUser = new model.appUser(element.user, pictures)
        ContentItem = new model.ContentItem(element, appUser);
        ContentItem.addEventPicturePath(pictures.pictures);
        if (ContentItem.match == matched)
            listContentItem.push(ContentItem);
    });
    return listContentItem;
}
async function addEvent(eventData) {
    //user
    var listContentItem = fillContentItem(false)

    var eventPicturePath = null;
    user.pictures.forEach(img => img.main == true ? eventPicturePath = img.picture : null);
    var dateTime = new Date(eventData.currentYear, eventData.currentMonth, eventData.currentDay, eventData.currentHour, eventData.currentMinute);
    var event = {
        name: eventData.name,
        category: eventData.listPickerCategory[eventData.selectedListPickerIndex],
        description: eventData.description,
        id: "00000000-0000-1100-0000-000000000002",
        startDate: dateTime.toJSON(),
        match: false,
        eventPictures: eventPicturePath
    }
    var ContentItem = new model.ContentItem(event, user);
    ContentItem.addUserPicturePath(eventPicturePath);

    listContentItem.push(ContentItem);
  await updateJson(listContentItem)
    debugger;
}
async function updateJson(listContentItem) {
    listContentItem = JSON.stringify(listContentItem);
    //fs doesn't work
    //fs.writeFile("./data.json", listContentItem,  function(err) {
    //     debugger;
    // });
    debugger;
}
exports.getEvents = getEvents;
exports.getMatches = getMatches;
exports.addEvent = addEvent;

