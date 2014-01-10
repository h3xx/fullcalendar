angular.module('calendarDemoApp')
	.controller('CalendarCtrl', function($scope) {
	
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();

		$scope.resources = [
			{"name":"Resource 1","id":1,"color" : "#ffff44","textcolor" : "#6b6b6b" ,"html" : "<img src='img/doge.jpg'></img>"},
			{"name":"Resource 2","id":2,"color" : "#ff0000", "html" : "<img src='img/doge_1.jpg'></img>"},
			{"name":"Resource 3","id":3,"color" : "#00ff00", "html" : "<img src='img/doge_2.jpg'></img>"}
		];
			
		$scope.events = [
				{
					title: "Resource 1",
					html: "<img style='width: 40px;' src='img/doge.jpg'></img>",
					status: 'red',
					id: 12,
					eventid: 19,
					start: new Date(y, m, d, 12, 15),
					end: new Date(y, m, d, 14, 45),
					allDay: false,
					extraA: "SOMETHING",
					resource: 1
				},
				{
					title: 'Resource 2',
					id: 12,
					status: 'green',
					eventid: 20,
					start: new Date(y, m, d, 13, 20),
					end: new Date(y, m, d, 14, 45),
					allDay: false,
					extraA: "SOMETHINGELSE",
					resource: 2
				},				
				{
					title: 'Meeting from this day to this +4',
					eventid: 21,
					status: 'green',
					start: new Date(y, m, d, 10, 30),
					end: new Date(y, m, d+4, 11, 00),
					allDay: false,
					resource: 1
				},
				{
					title: 'Meeting 11.00',
					eventid: 22,
					status: 'green',
					start: new Date(y, m-2, d, 11, 00),
					allDay: true,
					resource: 2
				},
				{
					title: 'Lunch 12-14',
					eventid: 23,
					status: 'green',
					start: new Date(y, m, d, 12, 0),
					end: new Date(y, m, d, 14, 0),
					allDay: false,
					resource: 3
				}
			];
		
		$scope.actionOnCalSelect = function(start, end, allDay, jsEvent, view, resource){
			$scope.$apply(function(){
				var title = prompt('event title:');
				if (title) {
					$scope.addEvent(title,start,end,resource.id);
				}
			});
		}
		
		$scope.actionOnEventResize = function( event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ) { 
			alert("NYI Event resize action");
		};
		
		$scope.actionOnEventClick = function( event, jsEvent, view )  {
			var xpos = jsEvent.pageX;
			var ypos = jsEvent.pageY;			
			$scope.popToggle(event,xpos,ypos);
		};

			
		$scope.actionOnEventDrop = function( event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view ) { 
			console.log(event);
		};

		$scope.addEvent = function(intitle,instart,inend,inresource) {		
			$scope.events.push({
				title: intitle,
				start: instart,
				end: inend,
				resource: inresource
			});
		};
	
		
		$scope.remove = function(index) {
		  $scope.events.splice(index,1);
		};
		
		$scope.uiConfig = {
			calendar:{
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'resourceDay,agendaWeek,agendaDay'
				},
				defaultView: 'resourceDay',
				firstDay: 1, 	
				editable: true,
				selectable: true,
				minTime: 8,
				maxTime:16,
				selectHelper: true,
				snapMinutes: 15,
				imgdir: 'img/',
				eventClick: $scope.actionOnEventClick,
				eventDrop: $scope.actionOnEventDrop,
				eventResize: $scope.actionOnEventResize,
				select: $scope.actionOnCalSelect		
			}
		  };
		
		$scope.eventSources = [$scope.events];									//Events need to be in a object
		$scope.resource =  $scope.resources;									//Resources not in an object
	});

