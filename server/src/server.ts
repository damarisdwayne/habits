import Fastify from 'fastify'

const app = Fastify()

app.get('/', () => {
    return 'Hello world'
})

app.listen({
    port: 3334
}).then(() => {
    console.log('Server running')
})