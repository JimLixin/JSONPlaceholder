describe('Post Service', function() {
    var PostService;

    beforeEach(angular.mock.module('PostService'));

    beforeEach(inject(function(_PostService_) {
        PostService = _PostService_;
    }));

    it('has a dummy spec to test 2 + 2', function() {
        // An intentionally failing test. No code within expect() will never equal 4.
        expect(PostService).toBeDefined();
    });
});