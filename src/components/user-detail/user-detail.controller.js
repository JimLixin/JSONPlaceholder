import { UserService } from '../../services/userService'

class UserDetailController {
    constructor($state,$stateParams,UserService) {
        this.name = 'User Detail controller';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.id = this.$stateParams.id;
        this.from = this.$stateParams.from;
        this.user = {};
        this.userService = UserService;
        this.getUser();
    }

    getUser() {
        let _this = this;
        this.userService.getUser(_this.id).then(function(data) {
            _this.user = data;
        });
    }

    exit(){
        this.from == 'u' ? this.$state.go("^") : this.$state.go('post'); 
    }
}

export default UserDetailController;