import { PostService } from '../../services/postService'

class PostDetailController {
    constructor($state,$stateParams,PostService) {
        this.name = 'Post Detail controller';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.id = this.$stateParams.id;
        this.post = {};
        this.postService = PostService;
        this.getPost();
    }

    getPost() {
        let _this = this;
        this.postService.getPost(_this.id).then(function(data) {
            _this.post = data;
        });
    }

    exit(){
        this.$state.go("^");
    }
}

export default PostDetailController;