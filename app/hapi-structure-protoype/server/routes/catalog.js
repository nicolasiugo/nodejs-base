// Base routes for default index/root path, about page, 404 error pages, and others..
exports.register = function(server, options, next) {

    server.route([
        {
            method: 'GET',
            path: '/catalog/{item}',
            config: {
                handler: function(request, reply) {
                    reply.view('about', {
                        title: request.params.item
                    });
                },
                id: 'catalog-item'
            }
        }
    ]);

    next();
}

exports.register.attributes = {
    name: 'catalog'
};