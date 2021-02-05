/* eslint-disable prettier/prettier */
const path = require(`path`)

/*
async function turnPizzasIntoPages({ graphql, actions }) {
  // the path has the .js because it needs the whole file
  // this will be the component we use to create the pages
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  // get Pizza info from Sanity
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)
  */
async function turnArtIntoPages({ graphql, actions }) {
  const artTemplate = path.resolve('./src/templates/SingleArt.js');
  const { data } = await graphql(`
  query {
    wallArt: allSanityWallArt {
      nodes {
        wallArtImg {
          asset {
            id
            assetId
            description
            title
            extension
            fluid {
              src
            }
          }
        }
        credit
      }
    }
  }
  `)

  data.wallArt.nodes.forEach(art=> {
    console.log('each art is this')
    console.log(art)
    console.log(art.wallArtImg.asset.description)
    console.log('*******************************************************************************************************************')
    actions.createPage({
      // what is the url? use the slug we have access to
      path:`art/${art.wallArtImg.title}`,
      // what is the component?
      component: artTemplate,
      context:{
        art: art,
      }
    })
  })
}


exports.createPages = async (params)=> {
  await Promise.all([
    turnArtIntoPages(params)
  ])
}
