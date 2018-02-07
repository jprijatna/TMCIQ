sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	var chart;

	var count = 0;

	var interval;

	var peopleText;
	var equipText;
	var enviText;
	var safety1;
	var safety2;
	var safety3;

	var peopleTextValue;
	var equipTextValue;
	var enviTextValue;
	var safety1Value;
	var safety2Value;
	var safety3Value;

	var vehicleCount = 0;

	var map;

	var marker;
	var marker2;
	var marker3;
	var marker4;
	var marker5;

	return Controller.extend("DPROP.controller.Main", {

		onInit: function() {
			chart = this.getView().byId("resourceChart");

			peopleText = this.getView().byId("peopleText");
			equipText = this.getView().byId("equipText");
			enviText = this.getView().byId("carText");
			safety1 = this.getView().byId("safety1");

			this._loadVideo();

			// var oTable = this.getView().byId("alertsTable");
			// var oModel = new sap.ui.model.json.JSONModel();
			// var tableData = [{
			// 	Date: "Fri, 17-11-2017 | 01:12:59 PM",
			// 	Priority: "Medium",
			// 	Description: "The number of people and safety equipment do no match.",
			// 	Type: "E338 - Missing Safety Gear",
			// 	State: "Warning",
			// 	StatusIcon: 'sap-icon://alert'
			// },{
			// 	Date: "Fri, 17-11-2017 | 11:38:35 AM",
			// 	Priority: "High",
			// 	Description: "Misuse of Power Equipment",
			// 	Type: "E404 - Equipment Mishandle",
			// 	State: "Error",
			// 	StatusIcon: 'sap-icon://sys-cancel-2'
			// }, {
			// 	Date: "Thu, 16-11-2017 | 10:33:04 AM",
			// 	Priority: "Low",
			// 	Description: "The number of people and safety equipment do no match.",
			// 	Type: "E338 - Missing Safety Gear",
			// 	State: "Warning",
			// 	StatusIcon: 'sap-icon://alert'
			// }]
			// ;
			// oModel.setData(tableData);
			// oTable.setModel(oModel);

			//chart.update();
		},

		loadMap: function() {
			var mapOptions = {
				center: new google.maps.LatLng(-33.851825, 151.210782),
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				featureType: "poi.business",
				elementType: "labels",
				stylers: [{
					visibility: "off"
				}]
			};
			map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(),
				mapOptions);

		},

		onAfterRendering: function() {
			// var backButton = sap.ui.getCore().byId("__xmlview0--backBtn");
			// backButton.setVisible(false);

			var that = this;
			var vid = document.getElementById("videoPlyr");
			this.loadMap();
			
			var image = {
						url: 'images/tracker.png',
						// This marker is 20 pixels wide by 32 pixels high.
						scaledSize: new google.maps.Size(20, 20)
					};

			marker = new google.maps.Marker({
				position: new google.maps.LatLng(-33.851825, 151.210782),
				icon: image,
				map: map
			});

			marker2 = new google.maps.Marker({
				position: new google.maps.LatLng(-33.851825, 151.210782),
				icon: image,
				map: map
			});

			marker3 = new google.maps.Marker({
				position: new google.maps.LatLng(-33.851825, 151.210782),
				icon: image,
				map: map
			});

			marker4 = new google.maps.Marker({
				position: new google.maps.LatLng(-33.851825, 151.210782),
				icon: image,
				map: map
			});

			marker5 = new google.maps.Marker({
				position: new google.maps.LatLng(-33.851825, 151.210782),
				icon: image,
				map: map
			});
			vid.onplay = function() {

				count = 0;
				peopleText.setValue(count.toString());

				setTimeout(function() {
					equipText.setValue("1");
				}, 4000);

				setTimeout(function() {
					equipText.setValue("2");
					enviText.setValue("1");
					$.ajax({
						url: 'https://us-central1-gold-order-178001.cloudfunctions.net/TMC-Write',
						type: 'POST',
						success: function(response) {
							alert("Incident Logged.");
						},
						error: function(e) {
							console.log("Error");
							console.log(e);
						}
					});
				}, 14000);

				setTimeout(function() {
					safety1.setValue("1");
				}, 19000);

				interval = setInterval(function() {
					var randomnumber = Math.floor(Math.random() * (10 - 7 + 1)) + 7;
					count = count + randomnumber;
					peopleText.setValue(count.toString());
				}, 3000);
				setTimeout(function() {
					clearInterval(interval);
				}, 38 * 1000);

				var that = this;

				setInterval(function() {

					var lat = ['-33.852460', '-33.842575', '-33.859088', '-33.853581', '-33.850001', '-33.846621', '-33.858395', '-33.843383',
						'-33.844114'
					];

					var lng = ['151.210679', '151.205130', '151.206560', '151.209915', '151.212218', '151.212432', '151.207079', '151.209721',
						'151.211575'
					];

					marker.setMap(null);
					marker2.setMap(null);
					marker3.setMap(null);
					marker4.setMap(null);
					marker5.setMap(null);

					var latLng = [
						[-33.852460, 151.210679],
						[-33.842575, 151.205130],
						[-33.859088, 151.206560],
						[-33.853581, 151.209915],
						[-33.850001, 151.212218],
						[-33.846621, 151.212432],
						[-33.858395, 151.207079],
						[-33.843383, 151.209721],
						[-33.844114, 151.211575]
					];

					var image = {
						url: 'images/tracker.png',
						// This marker is 20 pixels wide by 32 pixels high.
						scaledSize: new google.maps.Size(20, 20)
					};
					var random = latLng[Math.floor(Math.random() * latLng.length)];

					marker = new google.maps.Marker({
						position: new google.maps.LatLng(random[0], random[1]),
						icon: image,
						map: map
					});

					var random2 = latLng[Math.floor(Math.random() * latLng.length)];

					marker2 = new google.maps.Marker({
						position: new google.maps.LatLng(random2[0], random2[1]),
						icon: image,
						map: map
					});

					var random3 = latLng[Math.floor(Math.random() * latLng.length)];

					marker3 = new google.maps.Marker({
						position: new google.maps.LatLng(random3[0], random3[1]),
						icon: image,
						map: map
					});

					var random4 = latLng[Math.floor(Math.random() * latLng.length)];

					marker4 = new google.maps.Marker({
						position: new google.maps.LatLng(random4[0], random4[1]),
						icon: image,
						map: map
					});

					var random5 = latLng[Math.floor(Math.random() * latLng.length)];

					marker5 = new google.maps.Marker({
						position: new google.maps.LatLng(random5[0], random5[1]),
						icon: image,
						map: map
					});
				}, 2000);

			};
			//interval = setInterval(this.updateChart, 1000);
			//setTimeout(this.clearInterval, 35 * 1000);
		},

		buttonPress: function() {
			var vid = document.getElementById("videoPlyr");
			alert(vid.duration);
		},

		clearInterval: function() {
			count = 0;
			clearInterval(interval);
		},

		updateChart: function() {

			console.log(count);

			if (count === 34) {
				count = 0;
				clearInterval(interval);
			}

			var json = {
				"data": [{
					"people": "2",
					"vehicle": "3",
					"high-vis-suit": "2",
					"saw": "0",
				}, {
					"people": "1",
					"vehicle": "1",
					"high-vis-suit": "0",
					"saw": "0",
				}, {
					"people": "3",
					"vehicle": "2",
					"high-vis-suit": "3",
					"saw": "1",
				}, {
					"people": "3",
					"vehicle": "0",
					"high-vis-suit": "3",
					"saw": "0",
				}, {
					"people": "2",
					"vehicle": "0",
					"high-vis-suit": "2",
					"saw": "0",
				}, {
					"people": "2",
					"vehicle": "1",
					"high-vis-suit": "2",
					"saw": "1",
				}, {
					"people": "2",
					"vehicle": "2",
					"high-vis-suit": "2",
					"saw": "1",
				}, {
					"people": "2",
					"vehicle": "2",
					"high-vis-suit": "2",
					"saw": "1",
				}, {
					"people": "2",
					"vehicle": "3",
					"high-vis-suit": "2",
					"saw": "1",
				}, {
					"people": "2",
					"vehicle": "2",
					"high-vis-suit": "2",
					"saw": "1",
				}, {
					"people": "2",
					"vehicle": "3",
					"high-vis-suit": "2",
					"saw": "1",
				}, {
					"people": "3",
					"vehicle": "2",
					"high-vis-suit": "3",
					"saw": "0",
				}, {
					"people": "3",
					"vehicle": "2",
					"high-vis-suit": "3",
					"saw": "0",
				}, {
					"people": "3",
					"vehicle": "1",
					"high-vis-suit": "3",
					"saw": "0",
				}, {
					"people": "3",
					"vehicle": "1",
					"high-vis-suit": "3",
					"saw": "0",
				}, {
					"people": "3",
					"vehicle": "1",
					"high-vis-suit": "3",
					"saw": "0",
				}, {
					"people": "3",
					"vehicle": "1",
					"high-vis-suit": "3",
					"saw": "1",
				}, {
					"people": "2",
					"vehicle": "1",
					"high-vis-suit": "2",
					"saw": "1",
				}, {
					"people": "2",
					"vehicle": "1",
					"high-vis-suit": "2",
					"saw": "1",
				}, {
					"people": "2",
					"vehicle": "1",
					"high-vis-suit": "2",
					"saw": "1",
				}, {
					"people": "2",
					"vehicle": "1",
					"high-vis-suit": "2",
					"saw": "1",
				}, {
					"people": "3",
					"vehicle": "0",
					"high-vis-suit": "3",
					"saw": "1",
				}, {
					"people": "2",
					"vehicle": "0",
					"high-vis-suit": "2",
					"saw": "1",
				}, {
					"people": "2",
					"vehicle": "0",
					"high-vis-suit": "2",
					"saw": "0",
				}, {
					"people": "1",
					"vehicle": "1",
					"high-vis-suit": "1",
					"saw": "0",
				}, {
					"people": "1",
					"vehicle": "2",
					"high-vis-suit": "1",
					"saw": "1",
				}, {
					"people": "1",
					"vehicle": "2",
					"high-vis-suit": "1",
					"saw": "1",
				}, {
					"people": "1",
					"vehicle": "2",
					"high-vis-suit": "1",
					"saw": "1",
				}, {
					"people": "1",
					"vehicle": "2",
					"high-vis-suit": "1",
					"saw": "0",
				}, {
					"people": "2",
					"vehicle": "0",
					"high-vis-suit": "2",
					"saw": "0",
				}, {
					"people": "2",
					"vehicle": "0",
					"high-vis-suit": "2",
					"saw": "0",
				}, {
					"people": "2",
					"vehicle": "2",
					"high-vis-suit": "2",
					"saw": "0",
				}, {
					"people": "2",
					"vehicle": "2",
					"high-vis-suit": "2",
					"saw": "0",
				}, {
					"people": "2",
					"vehicle": "2",
					"high-vis-suit": "2",
					"saw": "0",
				}, {
					"people": "2",
					"vehicle": "0",
					"high-vis-suit": "2",
					"saw": "0",
				}, {
					"people": "0",
					"vehicle": "0",
					"high-vis-suit": "0",
					"saw": "0",
				}]
			};
			chart.getProperty("data").labels.push("");

			chart.getProperty("data").datasets[0].data[count] = json.data[count].people;

			chart.update();

			peopleTextValue = peopleText.getValue();
			equipTextValue = equipText.getValue();
			enviTextValue = enviText.getValue();
			safety1Value = safety1.getValue();

			peopleText.setValue(json.data[count].people);
			equipText.setValue(json.data[count].saw);
			enviText.setValue(json.data[count].vehicle);
			safety1.setValue(json.data[count]['high-vis-suit']);

			if (parseInt(peopleTextValue) < parseInt(json.data[count].people)) {
				peopleText.setIndicator("Up");
			} else if (parseInt(peopleTextValue) > parseInt(json.data[count].people)) {
				peopleText.setIndicator("Down");
			} else if (parseInt(peopleTextValue) === parseInt(json.data[count].people)) {
				peopleText.setIndicator("None");
			}

			if (parseInt(equipTextValue) < parseInt(json.data[count].saw)) {
				equipText.setIndicator("Up");
			} else if (parseInt(equipTextValue) > parseInt(json.data[count].saw)) {
				equipText.setIndicator("Down");
			} else if (parseInt(equipTextValue) === parseInt(json.data[count].saw)) {
				equipText.setIndicator("None");
			}

			if (parseInt(enviTextValue) < parseInt(json.data[count].vehicle)) {
				enviText.setIndicator("Up");
			} else if (parseInt(enviTextValue) > parseInt(json.data[count].vehicle)) {
				enviText.setIndicator("Down");
			} else if (parseInt(enviTextValue) === parseInt(json.data[count].vehicle)) {
				enviText.setIndicator("None");
			}

			if (parseInt(safety1Value) < parseInt(json.data[count]['high-vis-suit'])) {
				safety1.setIndicator("Up");
			} else if (parseInt(safety1Value) > parseInt(json.data[count]['high-vis-suit'])) {
				safety1.setIndicator("Down");
			} else if (parseInt(safety1Value) === parseInt(json.data[count]['high-vis-suit'])) {
				safety1.setIndicator("None");
			}

			count += 1;
		},

		changeValue: function(numericID, numericValue) {
			var textValue = this.getView().byId(numericID);
			var prevTextValue = textValue.getValue();
			textValue.setValue(numericValue);

			if (parseInt(prevTextValue) < parseInt(numericValue)) {
				textValue.setIndicator("Up");
			} else if (parseInt(prevTextValue) > parseInt(numericValue)) {
				textValue.setIndicator("Down");
			} else if (parseInt(prevTextValue) === parseInt(numericValue)) {
				textValue.setIndicator("None");
			}
		},

		_loadVideo: function() {
			var videoURL = "https://storage.googleapis.com/leoapp/TrafficCCTVInception.mp4";
			var html1 = new sap.ui.core.HTML({
				content: "<video controls autoplay loop id='videoPlyr' width='100%' height='100%'>" +
					"<source src='" + videoURL + "' type='video/mp4'>" +
					"Your browser does not support the video tag." +
					"</video>"
			});
			var gridPanel = this.getView().byId("vidPlayer");
			gridPanel.removeAllItems();
			// var videoName =  new sap.m.Text({text: 'Check out the video'}).addStyleClass("fontMedium sapUiTinyMarginBottom sapUiTinyMarginTop sapUiTinyMarginBegin");
			//var videoDesc =  new sap.m.Text({text: videoDescription}).addStyleClass("descText sapUiTinyMarginBottom sapUiTinyMarginBegin");
			var videoBoxContent = new sap.m.VBox({
				//items: [html1, videoName, videoDesc],
				items: [html1],
				fitContainer: true
			}).addStyleClass("");
			var videoBox = new sap.m.HBox({
				items: [videoBoxContent],
				justifyContent: "Center",
				alignItems: "Center"
			}).addStyleClass("videoHBox");
			gridPanel.addItem(videoBox);
		}

	});
});