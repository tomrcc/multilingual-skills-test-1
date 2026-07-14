---
_schema: default
title: Pricing
description: ''
keywords: []
pageSections:
  - _component: page-sections/heroes/hero-center
    id:
    eyebrowIcon:
      _component: building-blocks/core-elements/icon
      name: document-currency-dollar
      size: 3xl
      color: brand-gradient
      background: true
      iconOffset: true
      alignmentHorizontal: center
    eyebrowText:
    heading: >-
      Pricing designed<br />by <span class="highlight-text">engineers</span><br
      />who know value
    headingSize: 2xl
    subtext: >-
      We’ve eliminated the confusion typically associated with infrastructure
      pricing <br>through a strategy we call "being straightforward about what
      things cost."
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Book a demo
        hideText: false
        link: ''
        iconName: arrow-long-right
        iconColor: default
        iconPosition: after
        variant: primary
        size: md
        _uuid: 2724772c-0ce6-480a-8be1-38beab8827ea
    icons:
      - name: globe-asia-australia
        color: brand-gradient
        background: true
        size: 4xl
        _uuid: 680c8a2e-fb19-4dd2-bd84-cdd23b3cba29
      - name: rocket-launch
        color: brand-gradient
        background: true
        size: 4xl
        _uuid: cb3ac449-2c73-4bb1-bd8e-664aef61e851
    backgroundDecoration: false
    sectionHeight: content
    maxContentWidth: 2xl
    colorScheme: inherit
    backgroundColor: highlight-grid
    contentBackground: true
    verticalOffset:
      size: nav-height
      direction: back
    rounded: false
    _uuid: f3029eba-2b7c-40d3-9b64-0f61a32b8fde
  - _component: page-sections/features/feature-grid
    id:
    eyebrowIcon: {}
    eyebrowText:
    heading: ''
    subtext:
    featureGrid:
      features:
        - _component: page-sections/features/feature-grid/pricing-item
          title: Standard
          price:
            prefix: $
            amount: '49'
            suffix: /mo
          subtext: For organizations that need reliability
          list:
            _component: building-blocks/core-elements/list
            items:
              - text: Global CDN with 800+ edge nodes
                iconName: globe-americas
                iconColor: default
                link: ''
                _uuid: 92b71434-f4ea-4321-b92d-aaa8892d0047
              - text: Automated SSL certificate management
                iconName: shield-check
                iconColor: default
                link: ''
                _uuid: 3002ece9-326f-4e3d-ae48-d8d37a87d6de
              - text: "Complimentary network topology consult with our most artistic engineer"
                iconName: heart
                iconColor: default
                link: ''
                _uuid: 8b6b79be-4537-4242-9658-be175a152772
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
          _uuid: 9162d231-7af8-48d3-91b2-797fcc888ed1
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
                iconName: adjustments-horizontal
                iconColor: default
                link: ''
                _uuid: 265f4dd6-e489-46d4-b70a-b998a266dc49
              - text: Dedicated customer success specialist
                iconName: chat-bubble-left-right
                iconColor: default
                link: ''
                _uuid: 67cec1a6-4813-424b-83f3-4fac0d0aea32
              - text: "Annual infrastructure health assessment conducted by our senior
                  architects, complete with a 40-page report bound in a
                  collectible presentation folder"
                iconName: heart
                iconColor: default
                link: ''
                _uuid: 96422339-d59d-4f0d-945f-de8774339fd9
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
          _uuid: 524d46a5-3c4d-461f-b15f-f6b76219e689
        - _component: page-sections/features/feature-grid/pricing-item
          title: Enterprise
          price:
            prefix:
            amount: Custom to your needs
            suffix:
          subtext: >-
            For organizations that consider infrastructure a competitive
            advantage
          list:
            _component: building-blocks/core-elements/list
            items:
              - text: Custom API rate limits
                iconName: chart-bar
                iconColor: default
                link: ''
                _uuid: 391fce57-af6b-4359-8a0d-f8c089394b45
              - text: Dedicated Slack channel with our operations team
                iconName: chat-bubble-bottom-center-text
                iconColor: default
                link: ''
                _uuid: 1263390c-0abf-43e1-87fb-ef6261f22963
              - text: Quarterly capacity planning sessions
                iconName: clipboard-document-list
                iconColor: default
                link: ''
                _uuid: b62f5de1-e857-41e2-af88-a50819571a43
              - text: Custom security rules
                iconName: lock-closed
                iconColor: default
                link: ''
                _uuid: e7cd2bd2-1614-4549-992f-fdd94d695502
              - text: Priority feature requests
                iconName: question-mark-circle
                iconColor: default
                link: ''
                _uuid: f09fe9ca-f410-4f4b-b33b-eb4ba5d18678
              - text: Private peering arrangements
                iconName: globe-alt
                iconColor: default
                link: ''
                _uuid: 936945b3-cc8f-484c-9c0f-36db925b3507
              - text: Daily infrastructure audits
                iconName: clipboard-document-check
                iconColor: default
                link: ''
                _uuid: 00c6f2de-75c5-4fe7-aab4-41220dd4c360
              - text: Contractual response times
                iconName: clock
                iconColor: default
                link: ''
                _uuid: ffb0a58d-5ec7-400f-bd7b-d779ac0923c3
              - text: Access to ‘experimental’ features
                iconName: heart
                iconColor: default
                link: ''
                _uuid: 15379802-c9e6-4873-976c-0118f592d0e4
            direction: vertical
            alignmentHorizontal: start
            size:
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
          columnSpan: 12
          rowSpan: 1
          _uuid: b38c7912-7d68-4387-9e5b-260c06808075
      backgroundColor: brand-linear-gradient-muted
      gridBackgroundMaxWidth: 3xl
      gridMaxWidth: 2xl
      rounded: true
      overhang: true
    maxContentWidth: 2xl
    paddingVertical: xl
    colorScheme: inherit
    backgroundColor: base
    contentBackground: false
    verticalOffset: {}
    rounded: false
    _uuid: a6aa1ca8-a4f6-402a-943d-fce8a750323a
  - _component: page-sections/info-blocks/table
    id:
    eyebrowIcon: {}
    eyebrowText:
    heading: Compare plan features
    subtext:
    table:
      headers:
        - hideText: true
          text: ''
          _uuid: 8f66201c-47f7-40c8-a8f4-fa06e334b9f2
        - hideText: true
          text: ''
          _uuid: 8da7b0d6-a786-4a2f-a6f2-f6ea42b7e4f9
        - hideText: false
          text: Standard
          _uuid: 5d849ce4-8f05-4029-aef5-3f11cc2eb965
        - hideText: false
          text: Team
          _uuid: c8a8004e-28fb-4fb5-ab6f-66b77ff11d0f
        - hideText: false
          text: Enterprise
          _uuid: f91c4b43-3582-4651-a5e5-34b7ce6ee736
      sections:
        - sectionName: Performance and delivery
          rows:
            - cells:
                - Global edge nodes
                - 847 locations
                - 847 locations + priority routing
                - Custom dedicated nodes
              _uuid: f4cc61ef-5d0a-4c41-9d18-5468cd82f614
            - cells:
                - Bandwidth included
                - 10TB/month
                - 50TB/month
                - Custom allocation
              _uuid: ad35cf58-8f9b-40f0-a2e0-eea345aa844b
            - cells:
                - DNS query response time
                - <5ms average
                - <2ms average
                - <1ms guaranteed
              _uuid: cab32931-cfd2-4847-84f5-1a6f07def924
          _uuid: 1823f83d-3c98-4efb-bcf9-d94181d9f3f2
        - sectionName: Security and reliability
          rows:
            - cells:
                - DDoS protection
                - Up to 10Tbps
                - Up to 50Tbps
                - Custom mitigation
              _uuid: bf9b65f6-8cf9-4e46-b333-6f352b7a9e6d
            - cells:
                - SSL certificate management
                - 100+ domains
                - Unlimited domains
                - Custom certificates and private CA integration
              _uuid: 04a147d6-b979-4808-aea8-1a28d12c0fc1
            - cells:
                - Uptime SLA
                - 99.9%
                - 99.99%
                - 99.999% with financial guarantees
              _uuid: 0ae4e321-d512-4540-9a5e-fbb10590a395
          _uuid: aca64655-67f1-4347-ba3f-75a2dae2f932
        - sectionName: Security and reliability
          rows:
            - cells:
                - Support availability
                - Business hours, 4-hour response
                - 24/7, 1-hour response
                - 25/8, 15-minute response with dedicated team
              _uuid: 9ba15e72-ba0e-4969-83c2-1edb32cf3ca3
          _uuid: 614fa082-a76f-44d7-991a-f30f362245ff
    maxContentWidth: 2xl
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: base
    contentBackground: false
    verticalOffset:
      size: xl
      direction: front
    rounded: false
    _uuid: 0d6b8879-4892-4e71-980d-d0e52404d33b
  - _component: page-sections/info-blocks/faq-section
    heading: Common questions
    items:
      - _component: building-blocks/wrappers/accordion/accordion-item
        title: How quickly can I get started?
        contentSections:
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/text
                text: >-
                  Approximately seven minutes for basic setup, assuming you can
                  type reasonably fast and don't get distracted.


                  Our onboarding process involves pointing your DNS at our
                  nameservers and letting our automation handle the rest.


                  For more complex migrations requiring custom configurations,
                  our team can have you operational within 24 hours.


                  We've timed it. Multiple times. With stopwatches.
                alignmentHorizontal: start
                _uuid: 4899e0ee-fb6f-48c0-b94d-4621b79aac86
              - _component: building-blocks/wrappers/button-group
                label:
                buttonSections:
                  - _component: building-blocks/core-elements/button
                    text: Get started
                    hideText: false
                    link: https://cloudcannon.com/templates/jetstream/
                    iconName: arrow-right
                    iconColor: default
                    iconPosition: after
                    variant: secondary
                    size: md
                    _uuid: a44cbbdb-deef-4911-b10d-fd2bd2c4b854
                direction: row
                alignmentHorizontal: start
                _uuid: e6c45944-46fc-4c0b-9771-e298bf102fd1
            secondColumnContentSections:
              - _component: building-blocks/core-elements/image
                id: ''
                source: /src/assets/images/card-1.svg
                alt: ''
                rounded: true
                aspectRatio: none
                positionVertical:
                positionHorizontal: center
                priority: false
                _uuid: 1ef5fd81-a2ce-46b7-a9ef-37d9ca8d3df4
            distributionMode: half
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
            _uuid: b1cc2cba-bd9b-4910-8b29-e937841db431
        _uuid: 3d955fcc-9e3c-44ce-9618-8618557e4a2a
      - _component: building-blocks/wrappers/accordion/accordion-item
        title: What happens if I exceed my bandwidth limit?
        contentSections:
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/text
                text: >-
                  We'll send you a polite notification and continue serving your
                  traffic without interruption, because throttling your users
                  mid-session seems counterproductive to everyone involved.


                  You'll be billed for overage at a reasonable per-GB rate that
                  we've listed clearly in our documentation.


                  If you're consistently exceeding your plan limits, we'll
                  suggest upgrading to a tier that matches your actual usage —
                  our billing team considers surprises a sign of poor
                  communication.
                alignmentHorizontal: start
                _uuid: f446809c-4332-4f34-a24a-b50715cac5fb
              - _component: building-blocks/wrappers/button-group
                label:
                buttonSections:
                  - _component: building-blocks/core-elements/button
                    text: Get started
                    hideText: false
                    link: https://cloudcannon.com/templates/jetstream/
                    iconName: arrow-right
                    iconColor: default
                    iconPosition: after
                    variant: secondary
                    size: md
                    _uuid: 0c9e97c8-51d8-4750-9634-52b784543935
                direction: row
                alignmentHorizontal: start
                _uuid: 5429eb08-cdc5-411f-83fe-8e927dfc0e7a
            secondColumnContentSections:
              - _component: building-blocks/core-elements/image
                id: ''
                source: /src/assets/images/card-2.svg
                alt: ''
                rounded: true
                aspectRatio: none
                positionVertical:
                positionHorizontal: center
                priority: false
                _uuid: 915046e4-6d9e-4830-9d45-f126b272db05
            distributionMode: half
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
            _uuid: a139ef2c-c55f-4f4e-abec-24da61e21c39
        _uuid: 1a9c16d8-2218-4723-95e6-4bd369e3d5c6
      - _component: building-blocks/wrappers/accordion/accordion-item
        title: What if I need to cancel my service?
        contentSections:
          - _component: building-blocks/wrappers/split
            label: ''
            firstColumnContentSections:
              - _component: building-blocks/core-elements/text
                text: >-
                  You can cancel anytime from your dashboard without talking to
                  a retention specialist who's been trained to make you feel
                  guilty.


                  We'll continue service through the end of your billing period,
                  provide export tools for your configuration data, and part
                  ways professionally.


                  Our cancellation process takes approximately 90 seconds, which
                  our legal team insists is still too generous but our
                  engineering team considers appropriately respectful of
                  people's time.
                alignmentHorizontal: start
                _uuid: 23f7ee01-0010-4599-9fdb-c1c0300a9360
              - _component: building-blocks/wrappers/button-group
                label:
                buttonSections:
                  - _component: building-blocks/core-elements/button
                    text: Get started
                    hideText: false
                    link: https://cloudcannon.com/templates/jetstream/
                    iconName: arrow-right
                    iconColor: default
                    iconPosition: after
                    variant: secondary
                    size: md
                    _uuid: fcbdeacd-0ebd-4d48-bc98-c1b64366d0c3
                direction: row
                alignmentHorizontal: start
                _uuid: 47492391-2249-448a-81c8-fc3ceb480a36
            secondColumnContentSections:
              - _component: building-blocks/core-elements/image
                id: ''
                source: /src/assets/images/fin-trust.png
                alt: ''
                rounded: true
                aspectRatio: none
                positionVertical:
                positionHorizontal: center
                priority: false
                _uuid: 7211d11d-437e-4093-95d5-a95bfda96aa5
            distributionMode: half
            fixedWidth:
            minSplitWidth: 760
            alignmentVertical: center
            reverse: false
            reverseOrderOnMobile: false
            gap: lg
            _uuid: 0804c86e-614e-4dde-ab65-f85f4b557f18
        _uuid: ca861ea9-c155-43ad-aa06-d00e51d4c9eb
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: base
    id:
    eyebrowIcon: {}
    eyebrowText: ''
    subtext: ''
    singleOpen: true
    openFirst: false
    maxContentWidth: xl
    contentBackground: false
    verticalOffset:
      size: xl
      direction: front
    rounded: false
    _uuid: e6d1adfa-1354-4107-ac31-70ef093d9349
  - _component: page-sections/ctas/cta-form
    id: contact
    eyebrowIcon: {}
    eyebrowText: ''
    heading: Need more info?<br /><span class="highlight-text">Contact us</span>
    subtext: >-
      Our solutions team stands ready with answers and an appropriate level of
      enthusiasm.
    formAction: ./
    formBlocks:
      - _component: building-blocks/forms/input
        label: Name
        name: name
        type: text
        required: true
        iconColor: default
        iconPosition: before
        _uuid: 3f9a3ebb-0fe2-47e7-b1b8-cadc28f8c7a2
      - _component: building-blocks/forms/input
        label: Email
        name: email
        type: email
        required: true
        iconColor: default
        iconPosition: before
        _uuid: 5e0de156-d033-47cd-87a6-1fe761c87979
      - _component: building-blocks/forms/textarea
        label: Message
        name: message
        required: true
        _uuid: 9aa269be-c241-42d5-a76a-76b4cdb5ba60
      - _component: building-blocks/forms/submit
        text: Send message
        variant: primary
        size: md
        iconColor: default
        iconPosition: before
        hideText: false
        disabled: false
        _uuid: 2cf7c5c9-d6cc-4fcc-b82d-9ba254c2e34f
    buttonSections: []
    reverse: false
    maxContentWidth: 2xl
    paddingVertical: 4xl
    colorScheme: inherit
    backgroundColor: highlight-grid
    contentBackground: true
    verticalOffset:
      size: xl
      direction: front
    rounded: false
    _uuid: 3c7f9ae0-f294-4580-aa71-d9ccf7782865
---
