import angular from 'angular'

import moment from 'moment';
window['moment'] = moment;

require('angular-moment-picker')

angular.module('app', [
  'moment-picker'
]).controller('AppController', ['$scope', function App($scope) {
  moment.locale('en')
  $scope.myDate = moment()
}])
