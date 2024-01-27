function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      skills: '='
    },
    templateUrl: 'templates/skills-member.html',
    controller: function($scope) {
      $scope.getSkill = function(skill) {
        return skill.charAt(0).toUpperCase() + skill.slice(1);
      }
    }
  };
}