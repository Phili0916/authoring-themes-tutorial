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