---
_schema: blog-index
title: Blog
description: >-
  Read our latest articles and insights on web development, design, and
  technology.
keywords: []
heroSections:
  - _component: page-sections/heroes/hero-card
    id:
    eyebrowIcon:
      _component: building-blocks/core-elements/icon
      name: newspaper
      size: 3xl
      color: brand-gradient
      background: true
      iconOffset: true
      alignmentHorizontal: start
    heading: The engineering journal
    subtext: >-
      Insights, updates, and occasional technical deep-dives from the team that
      keeps the internet running.
    card:
      usePost: false
      post: /src/content/blog/why-we-rebuilt-our-dns-resolver-from-scratch-again.mdx
      eyebrowText:
      heading: >-
        Why we rebuilt our DNS resolver from scratch (<span
        class="highlight-text">again</span>)
      subtext: >-
        Sometimes good enough isn't good enough, especially when our engineers
        have strong opinions about query optimization.
      buttonSections:
        - _component: building-blocks/core-elements/button
          text: Learn why we did it
          hideText: false
          link: /blog/why-we-rebuilt-our-dns-resolver-from-scratch-again
          iconName: arrow-right
          iconPosition: after
          variant: secondary
          size: md
          _uuid: 526050b7-29b1-41e1-aed0-6b102f978ee7
      image:
        source: /src/assets/images/blog-dns-resolver.png
        alt: >-
          There seems no limit to what the printed circuit could have told you
          (if you had tried to find out); a revelation  trembles just past the
          threshold of your understanding.
        rounded: true
      counters:
        - counter:
            number: 47
            prefix:
            suffix: ms
          subtext: Previous resolver response time (unacceptable)
          _uuid: 5ff4ea56-cede-41bb-92b0-b98c723a298e
        - counter:
            number: 1.2
            prefix:
            suffix: ms
          subtext: New resolver response time (acceptable)
          _uuid: 107a72b2-9bfa-4b8c-b468-cd742bdb3ecd
        - counter:
            number: 840
            prefix:
            suffix: K+
          subtext: Lines of code written, deleted, rewritten
          _uuid: 4c08c11f-8c10-43eb-860d-357fc3882796
        - counter:
            number: 3
            prefix:
            suffix:
          subtext: All-hands meetings to convince management
          _uuid: 708d7b87-95f0-4160-a3bb-e5cfb1b1f7e8
    maxContentWidth: 2xl
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: base
    verticalOffset:
      size: xl
      direction: front
    rounded: false
    _uuid: 06f802b3-6306-4a22-8108-91a73840a313
ctaSections:
  - _component: page-sections/ctas/cta-center
    id:
    eyebrowIcon: {}
    eyebrowText:
    heading: Let's build your next tech breakthough together
    subtext:
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Or talk to us about fiber optics instead
        hideText: false
        link: ''
        iconName: arrow-long-right
        iconPosition: after
        variant: primary
        size: md
        _uuid: 870ef50d-f8f5-454f-a03a-acd55d2ec0b1
    maxContentWidth: xl
    paddingVertical: 2xl
    colorScheme: dark
    backgroundColor: highlight-radial-gradient
    contentBackground: false
    rounded: false
    _uuid: 7ddf63d6-edb8-40d6-a2f3-4ad5e8e46fd2
---
