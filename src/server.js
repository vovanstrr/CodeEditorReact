import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            user: Model,
        },

        seeds(server) {
            server.create("user", { name: "Bob" })
            server.create("user", { name: "Alice" })
        },

        routes() {
            this.namespace = "api"

            this.get("/users", (schema) => {
                return schema.users.all()
            })

            this.post("/execute", (schema, request) => {
                let body = JSON.parse(request.requestBody)
                console.log('body ', body);

                if (body.code == "console.log('Hello, World');\nconsole.log('Hello, World');\nconsole.log('Hello, World');" &&
                    body.language == 'javascript') {
                    return ({
                        "result": "success",
                        "output": body.code
                    })
                }
                else if (body.code == "print('Hello, World')\nprint('Hello, World')\nprint('Hello, World')" &&
                    body.language == 'python') {
                    return ({
                        "result": "success",
                        "output": body.code
                    })
                } else {
                    return ({
                        "status": "error",
                        "error": "SyntaxError: Unexpected token"
                    })
                }

            })

        },
    })

    return server
}