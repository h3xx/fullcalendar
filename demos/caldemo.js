
angular.module('calendarDemoApp', ['ui.calendar']);

function CalendarCtrl($scope) {
	
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		
		$scope.uiConfig = {
			calendar:{
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'resourceDay,resourceWeek,resourceNextWeeks,resourceMonth'
				},
				defaultView: 'resourceWeek',
				firstDay: 1, 	
				editable: true,
				selectable: true,
				minTime: 8,
				maxTime:16,
				selectHelper: true,
			}
		  };
		
		$scope.resources = [
			{"name":"Resource 1","id":1,"color" : "#ffff44","textcolor" : "#003300" ,"html" : "<img src='doge.jpg'></img>"},
			{"name":"Resource 2","id":2,"color" : "#ff0000"},
			{"name":"Resource 3","id":3,"color" : "#00ff00"}
		];
		
		$scope.events = [
				{
					title: "Resource 1 <img style='width: 20px;' src='doge.jpg'></img>",
					id: 12,
					start: new Date(y, m, d, 12, 15),
					end: new Date(y, m, d, 14, 45),
					allDay: false,
					resource: 1
				},
				{
					title: 'Resource 2',
					id:12,
					start: new Date(y, m, d, 13, 15),
					end: new Date(y, m, d, 14, 45),
					allDay: false,
					resource: 2
				},				
				{
					title: 'Meeting from this day to this +4',
					start: new Date(y, m, d, 10, 30),
					end: new Date(y, m, d+4, 11, 00),
					allDay: false,
					resource: 1
				},
				{
					title: 'Meeting 11.00',
					start: new Date(y, m-2, d, 11, 00),
					allDay: true,
					resource: 2
				},
				{
					title: 'Lunch 12-14',
					start: new Date(y, m, d, 12, 0),
					end: new Date(y, m, d, 14, 0),
					allDay: false,
					resource: 3
				}		
			];
		
		$scope.alertEventSelect = function( start, end, allDay, jsEvent, view, resource){
			$scope.$apply(function(){
				var title = prompt('event title:');

				if (title) {
					$scope.addEvent(title,start,end,resource.id);
				}
				calendar.fullCalendar('unselect');
			});
		};
		
		$scope.addEvent = function(intitle,instart,inend,inresource) {
			$scope.events.push({
				title: intitle,
				start: instart,
				end: inend,
				resource: inresource
			});
		};
		
		$scope.eventSources = [$scope.events];
		$scope.resource =  [$scope.resources];
		
		/*
		var calendar = $('#calendar').fullCalendar({
			resourceRender: function(resource, element, view) {
				// this is triggered when the resource is rendered, just like eventRender
			},
			eventDrop: function( event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view ) { 
				event.resource = view;
				calendar.fullCalendar( 'updateEvent', event )
			
				//alert('event moved to '+event.start+' to '+event.resource);
			},
			eventResize: function( event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ) { 
				alert('event was resized, new endtime: '+event.end);
			},
			eventClick: function ( event, jsEvent, view )  {
				alert('event '+event.title+' was left clicked');
			},
			eventRender: function( event, element, view ) { 

			},
			windowResize: function( view ) {
				calendar.fullCalendar('option', 'height', $(window).height() - 40);
			}
		});
		*/
	}

