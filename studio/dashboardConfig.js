export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601d1c4a2e6289ca819b3e5f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mjkvf1u6',
                  apiId: '66309b60-70ab-4a73-95fc-20bd55176853'
                },
                {
                  buildHookId: '601d1c4a016eb7ba5b00a7ab',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8se8uuev',
                  apiId: 'a4d91e0c-36de-4989-89d2-633b306dd024'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cristis/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8se8uuev.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
