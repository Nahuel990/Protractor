'use strict';

let roles = function () {

    this.clickDisplayRoles = function () {
        this.displayRole = $('.dropdown-toggle.form-control.assoc-selector.font-bold.main-bg');
        this.displayRole.click();
    };
    this.selectRole = function (selectedRole) {
        this.role = element.all(by.repeater('profile in NavCtrl.user.userInfo.profile'));
        this.role.get(1).element(by.xpath("//a[contains(.,'"+ selectedRole +"')]")).click();
    };
    this.selectRoleUniversity = function (selectUniversity) {
        this.displayUniversity = $('.dropdown-toggle.form-control.assoc-selector.font-regular.main-bg');
        this.university = element.all(by.repeater('university in NavCtrl.user.currentRole.universities'));
        this.displayUniversity.click();
        this.university.get(1).element(by.xpath("//a[contains(.,'"+ selectUniversity +"')]")).click();
    }
};
module.exports = roles;