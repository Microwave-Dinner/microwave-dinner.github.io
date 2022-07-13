export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo.png\",\"heroText\":\"Microwave Dinner Documentation\",\"tagline\":\"Here you'll find everything you need to know in order to make levels!\",\"actions\":[{\"text\":\"Let's go!\",\"link\":\"/info/outfits\",\"type\":\"primary\"}],\"features\":[{\"title\":\"Info\",\"details\":\"Information on various engine features of Microwave Dinner\"},{\"title\":\"Tutorials\",\"details\":\"Tutorials that help you get common things done\"},{\"title\":\"Guides\",\"details\":\"Good practices to follow to keep Microwave Dinner style consistent\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
