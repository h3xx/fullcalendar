angular.module('calendarDemoApp')		
	.directive('popup', function() {
		return {
			restrict: 'A',
			templateUrl: 'js/templates/popup.html',
			link: function(scope, elm, attrs) {
				scope.Popdata = {
								style: {'left': '0px',
										'top': '0px'} //Style object
								},	//Define the object to use for storing local popup content
				scope.popToggle = function(event,x,y) {
					//Set popupdata
					scope.Popdata.id = event.eventid;
					scope.Popdata.title = event.title;
					scope.Popdata.style.left = x + 'px';
					scope.Popdata.style.top = y + 'px';
					
					//Show or hide
					if (scope.Popdata.id != scope.Popdata.lastid){
						scope.Popdata.lastid = event.eventid;
						scope.Popdata.show = false;
					}
					scope.Popdata.show = !scope.Popdata.show;
					scope.$apply();
				};
			}
		};
	});