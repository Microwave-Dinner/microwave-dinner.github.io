---
home: true
heroImage: /logo.png
heroText: Microwave Dinner Documentation
tagline: Here you'll find everything you need to know in order to make levels!
actions:
  - text: Let's go!
    link: /info/outfits
    type: primary
features:
  - title: Info
    details: Information on various engine features of Microwave Dinner
  - title: Tutorials
    details: Tutorials that help you get common things done
  - title: Guides
    details: Good practices to follow to keep Microwave Dinner style consistent
---

<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <h2><a v-bind:href="feat.link">{{ feat.title }}</a></h2>
    <p>{{ feat.details }}</p>
  </div>
</div>