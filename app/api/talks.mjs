import data from './talks.json' assert { type: 'json' }
export async function get() {
  return {
    json: data
  }
}

export const talks = data
