export class ContentItem {
	constructor(event, user) {
		this.match = event.match;
		this.startDate = event.startDate;
		this.id = event.id;
		this.category=event.category;
		this.description=event.description;
		this.user = user;
		this.eventPicture = null;
	}

	addEventPicturePath(pictures){
		pictures.forEach(element => {
			if(element.isMain)
			this.eventPicture=element.picture;
		});
	}
	addUserPicturePath(picturePath){
			this.eventPicture=picturePath;
	}
}

export class appUser {
	constructor(appUser, pictures) {
		this.id = appUser.id;
		this.name = appUser.name;
		this.pictures=pictures;
		this.age=appUser.age;

	}
	addPictures(picture){
		this.pictures.push(picture);
	}
}

export class eventPictures {
	constructor() {
		this.pictures=[];	
	}

	addPicture(picture){
		this.pictures.push(picture)
	}
}

export class picture {
	constructor(picture) {
		this.picture = picture.picture;
		this.isMain = picture.main;
	}
}

