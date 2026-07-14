---
_schema: default
title: Jetstream | Astro Template for CloudCannon
description: >-
  An Astro template built for CloudCannon with visual editing, flexible
  components, and an exceptional developer experience. Deploy your next project
  with speed and style.
keywords: []
pageSections:
  - _component: page-sections/heroes/hero-center
    eyebrowIcon: {}
    eyebrowText:
    heading: Introducing<br /><span class="highlight-text">Jetstream</span>
    headingSize: 4xl
    subtext: >-
      A new Astro template by CloudCannon, built with our [Astro Component
      Starter](https://lemon-pear.cloudvent.net/) for top performance, true
      visual editing, and an ideal developer experience.
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Deploy Jetstream on CloudCannon
        hideText: false
        link: >-
          https://app.cloudcannon.com/register#sites/connect/github/cloudcannon/jetstream-astro-template
        iconName: arrow-up-right
        iconColor: default
        iconPosition: after
        variant: primary
        size: md
        _uuid: 61a3e2a3-9df2-4dfd-a8ac-32904864f79f
      - _component: building-blocks/core-elements/button
        text: Check out the Component Starter
        hideText: false
        link: https://github.com/CloudCannon/astro-component-starter
        iconName: arrow-up-right
        iconColor: default
        iconPosition: after
        variant: tertiary
        size: md
        _uuid: 3e4ee113-8dc4-43ea-9b4b-92917f4e7c33
    image:
      source: /src/assets/images/hero-1.svg
      alt: Dashboard overview image rounded
      rounded: true
    icons:
      - name: globe-asia-australia
        color: '#f40f0f'
        background: true
        size: 4xl
        _uuid: 70c749d7-ee45-40ad-bf41-f2878d49ecb9
      - name: rocket-launch
        color: '#000000'
        background: true
        size: 4xl
        _uuid: bc9812b8-8955-497d-a506-0bcb42ed36f2
    backgroundDecoration: true
    sectionHeight: full
    maxContentWidth: lg
    colorScheme: inherit
    backgroundColor: highlight-grid
    contentBackground: true
    verticalOffset:
      size: nav-height
      direction: back
    rounded: false
    paddingVertical: md
    _uuid: a188913f-40da-43d0-87da-1d7fa35e4728
  - _component: page-sections/features/logo-strip
    heading: >-
      We’ve solved the internet for the world’s most ambitious engineering teams.
    images:
      - source: /src/assets/images/apex.svg
        alt: Apex logo
        link: ''
        _uuid: 355f7ad2-63b0-4509-8171-d49b49c92e9d
      - source: /src/assets/images/aura.svg
        alt: Aura logo
        link: ''
        _uuid: 148454e0-09cd-45da-a549-a77cfb57df2c
      - source: /src/assets/images/business2.svg
        alt: Fake Business logo
        link: ''
        _uuid: c1ec461d-20d8-4f5a-97b1-231ff762839f
      - source: /src/assets/images/businesss.svg
        alt: Vantage logo
        link: ''
        _uuid: 03f2d53b-ee0c-4883-abe6-e717b46b22ed
      - source: /src/assets/images/dental.svg
        alt: Align logo
        link: ''
        _uuid: 4818f438-e5ef-41c2-85a8-7efce81f1a1f
      - source: /src/assets/images/fake-uni.svg
        alt: Fake University logo
        link: ''
        _uuid: f872c5b6-b2a9-476a-ac30-0059727e2ded
      - source: /src/assets/images/fintech.svg
        alt: Fintech logo
        link: ''
        _uuid: 015cfc1c-5085-4b29-b1b1-3c57b30e791d
      - source: /src/assets/images/medical.svg
        alt: Omnia logo
        link: ''
        _uuid: f93ca7dd-7cd4-4bf4-9ab4-b4324cdb8538
    maxContentWidth: 2xl
    paddingVertical: 4xl
    colorScheme: light
    backgroundColor: surface-linear-gradient
    contentBackground: false
    lockColorScheme: true
    verticalOffset:
      size: 2xl
      direction: front
    rounded: true
    _uuid: 01785a66-7665-4602-95e6-eaff6d94d15a
  - _component: page-sections/features/feature-grid
    id: services
    eyebrowIcon:
      _component: building-blocks/core-elements/icon
      name: light-bulb
      size: 3xl
      color: brand-gradient
      background: true
      iconOffset: true
      alignmentHorizontal: center
    eyebrowText:
    heading: 'Jetstream protects what matters most: <br />your uptime percentage'
    subtext: >-
      Everything you need to scale from boutique team to a global enterprise
      without the operational friction —&nbsp;or the science fiction.
    featureGrid:
      features:
        - _component: page-sections/features/feature-grid/feature-item
          link: ''
          image:
            source: /src/assets/images/card-1.svg
            alt: Dashboard accelerate
            rounded: false
          eyebrowIcon: {}
          eyebrowText:
          title: Content delivery acceleration
          description: >-
            Your websites will load faster than human perception allows. We're
            not saying we've broken the laws of physics, but our CDN operates at
            speeds that would make light jealous.
          columnSpan: 5
          rowSpan: 1
          _uuid: 8da77023-9d03-4188-a1c4-a686f02ed5a7
        - _component: page-sections/features/feature-grid/feature-item
          link: ''
          image:
            source: ''
            alt: ''
            rounded: false
          eyebrowIcon: {}
          eyebrowText: We've got this.
          title: DDoS mitigation that never sleeps
          description: >-
            Bad actors don't stand a chance against our behavioral analysis
            engines, which have been trained on every known attack pattern, plus
            several we invented just to be thorough.
          columnSpan: 3
          rowSpan: 1
          _uuid: 1b2af8f3-1918-4f5a-8f7a-fcede9868bca
        - _component: page-sections/features/feature-grid/feature-item
          link: ''
          image:
            source: /src/assets/images/card-2.svg
            alt: Dashboard queries
            rounded: false
          eyebrowIcon: {}
          eyebrowText:
          title: Zero-trust security framework
          description: >-
            We trust nothing and verify everything, twice. Sometimes three times
            if it's Tuesday. Our security team operates under the principle that
            paranoia isn't a bug — it's a feature we bill for.
          columnSpan: 4
          rowSpan: 1
          _uuid: 2817bd2e-9703-44a1-8f15-8f8c46a573f1
        - _component: page-sections/features/feature-grid/feature-item
          link: ''
          image:
            source: /src/assets/images/card-3.svg
            alt: Dashboard global
            rounded: false
          eyebrowIcon: {}
          eyebrowText:
          title: Automated SSL / TLS management
          description: >-
            Our automated certificate lifecycle system renews your SSL
            certificates before they even think about expiring. We've eliminated
            the 3am renewal panic entirely.
          columnSpan: 3
          rowSpan: 1
          _uuid: 626e6346-9291-4373-a37a-4a7e05c78ac1
        - _component: page-sections/features/feature-grid/feature-item
          link: ''
          image:
            source: /src/assets/images/card-4.svg
            alt: Dashboard uptime
            rounded: false
          eyebrowIcon: {}
          eyebrowText:
          title: DNS resolution bordering on prescient
          description: >-
            Our global DNS infrastructure responds in fractions of milliseconds
            that require new units of measurement. Your domain names resolve
            before users finished typing them.
          columnSpan: 7
          rowSpan: 1
          _uuid: d6a21258-a9dc-484f-a208-97ac613d0bad
      backgroundColor: highlight-radial-gradient
      gridBackgroundMaxWidth: none
      gridMaxWidth: 2xl
      rounded: false
      overhang: true
    maxContentWidth: 2xl
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: base
    contentBackground: false
    verticalOffset:
      size: none
      direction: front
    rounded: false
    _uuid: 52972a9d-a29b-4355-b225-23e6c0fa7109
  - _component: page-sections/info-blocks/tabbed-content
    id: solutions
    eyebrowIcon: {}
    eyebrowText:
    heading: Customer solutions that solve themselves
    subtext: >-
      We don't just provide infrastructure — we provide infrastructure that
      understands your business. And your heart.
    tabs:
      - _component: building-blocks/wrappers/content-selector/content-selector-item
        title: MediConnect
        subtext: Telemedicine platform connecting 15K+ providers
        contentSections:
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/simple-text
                text: >-
                  We implemented our low-latency routing protocol and deployed
                  dedicated health sector edge nodes with HIPAA-compliant
                  encryption that doesn't slow things down.

                  Doctors can read patient expressions in real-time, and medical
                  care is delivered at the speed of actual conversation — which,
                  our research indicates, is how medical care should work.
                alignmentHorizontal: start
                size: md
                _uuid: ae696aae-135f-4e85-8eca-e9db96e2609f
            secondColumnContentSections: []
            distributionMode: three-quarters-quarter
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
            _uuid: d247d429-99f9-44f7-aaea-7e1d636bfaaf
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/image
                source: /src/assets/images/medi-connect.png
                alt: Person thinking
                sizes: '(max-width: 1280px) 100vw, 1280px'
                widths:
                  - 640
                  - 1280
                  - 2560
                rounded: false
                aspectRatio: none
                positionVertical: center
                positionHorizontal: center
                priority: false
                id: ''
                _uuid: aa1c2c0d-31e7-4159-b302-faadb790ec42
            secondColumnContentSections:
              - _component: building-blocks/core-elements/counter
                number: 94
                prefix:
                suffix: '%'
                alignmentHorizontal: start
                size: xl
                _uuid: 54b6befd-e62a-4f39-b21e-3675ed3303ee
              - _component: building-blocks/core-elements/text
                text: '**Reduction in connection quality complaints**'
                alignmentHorizontal: start
                size: md
                _uuid: f90aee5e-53a2-4201-a0a2-53ce70761202
              - _component: building-blocks/core-elements/counter
                number: 340
                prefix:
                suffix: x
                alignmentHorizontal: start
                size: xl
                _uuid: a8a8440d-71b1-4e5b-82ff-53d600c643b9
              - _component: building-blocks/core-elements/text
                text: '**More numbers than other companies**'
                alignmentHorizontal: start
                size: md
                _uuid: 25a9178d-e813-46f7-84ed-ded2867050cc
            distributionMode: three-quarters-quarter
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
            _uuid: 51b54545-7ada-4c3c-858d-1f0560e759d6
        _uuid: 1eca4224-f656-4d1c-8a29-0bec499795b4
      - _component: building-blocks/wrappers/content-selector/content-selector-item
        title: FinTrust Bank
        subtext: Digital banking institution processing transactions for 8M customers
        contentSections:
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/simple-text
                text: >-
                  FinTrust needed transaction speeds that matched customer
                  expectations and security that exceeded regulatory paranoia.
                  Their customers now experience instantaneous transfers while
                  attempted attacks are neutralized before they even realize
                  they've failed. Banking infrastructure that's faster than
                  fraud and more reliable than gravity.
                alignmentHorizontal: start
                size: md
                _uuid: c0d6e383-ad20-43eb-9904-fd4b4fc449f3
            secondColumnContentSections: []
            distributionMode: three-quarters-quarter
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
            _uuid: b0fb4501-118f-49b8-8bd9-e1f6c6bac0b3
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/image
                source: /src/assets/images/fin-trust.png
                alt: Fintrust dashboard
                sizes: '(max-width: 1280px) 100vw, 1280px'
                widths:
                  - 640
                  - 1280
                  - 2560
                rounded: false
                aspectRatio: none
                positionVertical: center
                positionHorizontal: center
                priority: false
                id: ''
                _uuid: d4f4b988-6248-4fbe-a7b8-68c07118028d
            secondColumnContentSections:
              - _component: building-blocks/core-elements/counter
                number: 2.3
                prefix:
                suffix: s
                alignmentHorizontal: start
                size: xl
                _uuid: 90598bb0-2107-41a2-8aa9-c298fb70407b
              - _component: building-blocks/core-elements/text
                text: '**Average transaction completion time**'
                alignmentHorizontal: start
                size: md
                _uuid: eeb1103e-e54f-49f4-9214-3d5ab457e4e7
              - _component: building-blocks/core-elements/counter
                number: 100
                prefix:
                suffix: '%'
                alignmentHorizontal: start
                size: xl
                _uuid: 28aba200-281b-405b-aede-a83ad432ee9e
              - _component: building-blocks/core-elements/text
                text: '**Mitigation rate against 12,000+ daily attack attempts**'
                alignmentHorizontal: start
                size: md
                _uuid: c9b8e441-695f-461e-8a4b-5a19deb765c6
            distributionMode: three-quarters-quarter
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
            _uuid: a59a8b56-8220-40b8-8beb-b0cfa9a89a35
        _uuid: 1b4624d8-0e95-47a1-82a0-5ecd37b970da
    navigationPosition: top
    maxContentWidth: 2xl
    paddingVertical: 4xl
    colorScheme: light
    backgroundColor: highlight-grid
    verticalOffset:
      size: none
      direction: ''
    rounded: false
    _uuid: 26c76fd1-728d-46db-8c72-4b86ed7ab595
  - _component: page-sections/people/testimonial-section
    text: >-
      Downtime used to be a weekly crisis. Now it's a theoretical concept we
      vaguely remember.
    authorName: Dr. Liz Vante
    authorDescription: CTO, MediConnect Healthcare
    authorImage: /src/assets/images/testimonial.png
    maxContentWidth: xl
    paddingVertical: 2xl
    colorScheme: dark
    backgroundColor: highlight-radial-gradient
    background:
      type: image
      positionVertical: top
      positionHorizontal: center
      priority: false
      imageSource: ''
      imageAlt: ''
      overlay: 0
    _uuid: ddc84b43-2f6d-4df7-b841-cba92cccf067
  - _component: page-sections/features/feature-grid
    eyebrowIcon:
      _component: building-blocks/core-elements/icon
      name: presentation-chart-line
      size: 3xl
      color: brand-gradient
      background: true
      iconOffset: true
      alignmentHorizontal: center
    eyebrowText:
    heading: Pricing that scales with your ambition
    subtext: >-
      Choose the plan that matches your current infrastructure needs, then
      upgrade when your inevitable success makes it necessary. We'll be here,
      ready with congratulations and additional bandwidth.
    featureGrid:
      features:
        - _component: page-sections/features/feature-grid/pricing-item
          title: Standard
          price:
            prefix: $
            amount: '49'
            suffix: /mo
          subtext: 'For organizations that need reliability '
          list:
            _component: building-blocks/core-elements/list
            items:
              - text: Global CDN with 800+ edge nodes
                iconName: check-circle
                iconColor: purple
                link: ''
                _uuid: f54e3c8f-083e-4cc2-803a-43f4b3c69ccc
              - text: Automated SSL certificate management
                iconName: check-circle
                iconColor: purple
                link: ''
                _uuid: abefe181-b84c-4de9-8b4b-f031c660efc9
              - text: "Complimentary network topology consult with our most artistic engineer"
                iconName: check-circle
                iconColor: purple
                link: ''
                _uuid: f320bcd1-e7a4-4ace-9a9f-8123f3d5aaa3
            direction: vertical
            alignmentHorizontal: start
            size: md
            listType: icon
          button:
            _component: building-blocks/core-elements/button
            text: Get started
            hideText: false
            link: https://cloudcannon.com/templates/jetstream/
            iconName: arrow-right
            iconColor: default
            iconPosition: after
            variant: secondary
            size: md
          columnSpan: 5
          rowSpan: 1
          _uuid: a5068a55-8ba9-4f3a-acac-42fcafba30e9
        - _component: page-sections/features/feature-grid/pricing-item
          title: Team
          price:
            prefix: $
            amount: '300'
            suffix: /mo
          subtext: For organizations that refuse to accept the concept of downtime
          list:
            _component: building-blocks/core-elements/list
            items:
              - text: Priority traffic routing
                iconName: check-circle
                iconColor: purple
                link: ''
                _uuid: a1481267-dc45-48e0-8000-ebac3531f451
              - text: Dedicated customer success specialist
                iconName: check-circle
                iconColor: purple
                link: ''
                _uuid: af6b9482-6baf-4e3d-8a69-c8a3c49e3f5b
              - text: "Annual infrastructure health assessment conducted by our senior
                  architects, complete with a 40-page report bound in a
                  collectible presentation folder"
                iconName: check-circle
                iconColor: purple
                link: ''
                _uuid: 2fc2c58f-b04f-4aeb-b126-6201c5d5c672
            direction: vertical
            alignmentHorizontal: start
            size: md
            listType: icon
          button:
            _component: building-blocks/core-elements/button
            text: Get started
            hideText: false
            link: https://cloudcannon.com/templates/jetstream/
            iconName: arrow-right
            iconColor: default
            iconPosition: after
            variant: secondary
            size: md
          columnSpan: 7
          rowSpan: 1
          _uuid: 433d5a56-4f48-4102-a67a-73266005f8eb
      backgroundColor:
      gridBackgroundMaxWidth: none
      gridMaxWidth: 2xl
      rounded: false
      overhang: false
    maxContentWidth: md
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: surface-linear-gradient
    contentBackground: false
    verticalOffset:
      size: 6xl
      direction: back
    rounded: false
    _uuid: 3af9da36-13ed-4ddf-8f0d-efbfdf4591f1
  - _component: page-sections/ctas/cta-center
    eyebrowIcon: {}
    eyebrowText:
    heading: Ready for performance that defies conventional wisdom?
    subtext:
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Book a strategy session
        hideText: false
        link: ''
        iconName: calendar
        iconColor: default
        iconPosition: before
        variant: primary
        size: md
        _uuid: dd8daa91-e8f1-4385-8ece-57bcdb1a5504
    maxContentWidth: xl
    paddingVertical: 4xl
    colorScheme: dark
    backgroundColor: highlight-radial-gradient
    contentBackground: false
    rounded: true
    _uuid: d899ae6a-05e6-4f72-9508-1d66ebe09f82
---
