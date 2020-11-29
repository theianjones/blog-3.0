import React from 'react'
import {Social} from '../types'
export default ({socials}: {socials: Social[]}) => (
  <>
    {socials.map((social) => (
      <a
        className="mr-3 text-lg font-light hover:text-primary ease-in-out text-gray-500 tracking-wider"
        href={social.url}
        target="_blank"
      >
        {social.label}
      </a>
    ))}
  </>
)
