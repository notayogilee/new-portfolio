import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "kd4r1s4u",
  dataset: "production",
  useCdn: true
})