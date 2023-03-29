const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['0']
            }
        }
    })

    server.route(routes)

    await server.start()
    console.log(`Server is running in ${server.info.uri} `)
}

init()