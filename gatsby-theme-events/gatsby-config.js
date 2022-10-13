module.exports = ({ contenPath = `${__dirname}/data/`, basepath = "/" }) => ({
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: contenPath,
            },
        },
        {
            resolve: "gatsby-transformer-yaml",
            options: {
                typeName: "Event",
            },
        },
    ],
})

