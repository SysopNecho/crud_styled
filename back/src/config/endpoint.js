const endpointMap = new Map()
    .set('local', {
        SERVER_API: 'http://localhost:8081'
    })
    .set('dev', {
        SERVER_API: 'http://development.example.com'
    })
    .set('prod', {
        SERVER_API: 'https://production.example.com'
    });

export const getEndpoints = () => {
    return endpointMap.get(process.env.ENVIRONMENT);
}