import { DataService } from '../../services/mockService'

class HomeController {
    constructor($state, DataService) {
        this.name = 'Home Controller';
        this.dataList = [];
        this.$state = $state;
        this.dataService = DataService;
    }

    getMockupData() {
        //this.dataList = this.dataService.loadData();
        let _this = this;
        this.dataService.loadData().then(function(data) {
            _this.dataList = data;
        });
    }

    changeThisName() {
        this.name = 'Home-Changed';
    }

    goToNew() {
        this.$state.go('new');
    }
}

export default HomeController;