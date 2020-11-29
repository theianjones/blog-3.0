import type {Loader} from '@remix-run/data'

export let loader: Loader = async ({request, params, session}) => {
  return {request, params, session}
}
