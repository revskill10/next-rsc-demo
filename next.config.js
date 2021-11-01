module.exports = {
    experimental: {
        reactRoot: true,
        concurrentFeatures: true,
        serverComponents: true,
    },
    async rewrites() {
        return [
            { "source": "/pokemon/:id", "destination": "/demo/pokemon?articleId=:id", "locale": false }
        ]
    }
}