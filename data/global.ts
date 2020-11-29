import type {DataLoader} from '@remix-run/core'

export let loader: DataLoader = async () => {
  return {
    socials: [
      {
        label: 'Github',
        url: 'https://github.com/theianjones',
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/_jonesian',
      },
    ],
  }
}
