// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var BraveHeartMinute = angular.module('starter', ['ionic'])

BraveHeartMinute.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

BraveHeartMinute.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboard.html',
          controller: 'dashboardCtrl'
        }
      }
    })
    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
    })
    .state('app.signUp', {
      url: '/signUp',
      views: {
        'menuContent': {
          templateUrl: 'templates/signUp.html',
          controller: 'signUpCtrl'
        }
      }
    })
     .state('app.forgetPwd', {
      url: '/forgetPwd',
      views: {
        'menuContent': {
          templateUrl: 'templates/forgetPwd.html',
          controller: 'forgetPwdCtrl'
        }
      }
    })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })
  
   .state('app.notifications', {
    url: '/notifications',
    views: {
      'menuContent': {
        templateUrl: 'templates/notifications.html',
        controller: 'notificationsCtrl'
      }
    }
  })
  
  
  .state('app.hydrationReport', {
    url: '/hydrationReport',
    views: {
      'menuContent': {
        templateUrl: 'templates/hydrationReport.html',
        controller: 'hydrationReportCtrl'
      }
    }
  })
  
   .state('app.wakeSleep', {
    url: '/wakeSleep',
    views: {
      'menuContent': {
        templateUrl: 'templates/wakeSleep.html',
        controller: 'wakeSleepCtrl'
      }
    }
  })
  
   .state('app.activity', {
    url: '/activity',
    views: {
      'menuContent': {
        templateUrl: 'templates/activity.html',
        controller: 'activityCtrl'
      }
    }
  })
  
   .state('app.editProfile', {
    url: '/editProfile',
    views: {
      'menuContent': {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
