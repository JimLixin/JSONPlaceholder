import { CommentService } from '../../services/commentService'

class CommentDetailController {
    constructor($state,$stateParams,CommentService) {
        this.name = 'Comment Detail controller';
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.id = this.$stateParams.id;
        this.comment = {};
        this.commentService = CommentService;
        this.getComment();
    }

    getComment() {
        let _this = this;
        this.commentService.getComment(_this.id).then(function(data) {
            _this.comment = data;
        });
    }

    exit(){
        this.$state.go("^");
    }
}

export default CommentDetailController;