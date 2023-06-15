export default function ({ html, state = {} }) {
  let { store = {} } = state
  let { speaker } = store
  return html`
    <page-layout>
      <pre>${JSON.stringify(speaker, null, 2)}</pre>
    </page-layout>
  `
}
