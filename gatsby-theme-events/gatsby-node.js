const fs = require("fs")

//make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
    const contentPath = `${__dirname}/data`

    if (!fs.existsSync(contentPath)) {
        reporter.info(`creating the ${contentPath} directory`)
        fs.mkdirSync(contentPath)
    }
}

//Define the "Event" Type
exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(`
        type Event implements Node @dontInfer {
            id: ID!
            name: String!
            location: String!
            startDate: Date! @dateformat @proxy(from: "start_date")
            endDate: Date! @dateformat @proxy(from: "end_date")
            url: String!
            slug: String!
        }
    `)
}

//Define resolvers for custom fields
exports.createResolvers = ({ createResolvers }) => {
    const basePath = "/"
    //Quick helper to convert strings into URL-friendly slugs
    const slugify = str => {
        const slug = str
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "")
        return `/${basePath}/${slug}`.replace(/\/\/+/g, "/")
    }
    createResolvers({
        Event: {
            slug: {
                resolve: source => slugify(source.name)
            },
        },
    })
}